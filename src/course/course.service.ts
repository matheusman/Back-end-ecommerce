import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Courses from './Entities/Course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import CreateCourseUser from './dto/create-course.dto';
import UpdateCoursesUser from './dto/update-course.dto';
import Tags from './Entities/Tags.entity';

@Injectable()
export class CourseService {
    constructor (
        @InjectRepository(Courses) private readonly CourseRepository : Repository<Courses>,
        @InjectRepository(Tags) private readonly TagRepository : Repository<Tags>
        ) {

    }

    async findAll () {
        return this.CourseRepository.find({ relations : ['tags']})
    }

    async findOne (id : number) {
        const course = await this.CourseRepository.findOne( { where : {
            id: id,
        }, relations : ['tags']})
        if (!course) 
            throw new HttpException("Id não existe", 404)
        return course
    }

    async create (body : CreateCourseUser) {
        const tags = await Promise.all(
            body.tags.map( tag => this.UpdateTagRepository(tag))
        )
        const course = this.CourseRepository.create({...body, tags })
        return await this.CourseRepository.save(course);
    }

    async updateOne (body : UpdateCoursesUser, id: number) {

        const tags = body.tags && await Promise.all(
            body.tags.map( tag => this.UpdateTagRepository(tag))
        )

        const course = await this.CourseRepository.preload({
            id,
            ...body,
            tags
        })
        if (!course)
            throw new HttpException("not found this id", HttpStatus.NOT_FOUND)
        return await this.CourseRepository.save(course)
    }

    async deleteOne (id: number) {
        const course = await this.CourseRepository.findOne({ where : { id }})
        if (course)
            throw new HttpException("Id não existe", HttpStatus.NOT_FOUND)
        return await this.CourseRepository.remove(course);
    }

    private async UpdateTagRepository (name : string) {
        const tag = await this.TagRepository.findOne( { where : { tags : name }})
        if (tag) 
            return tag
        return this.TagRepository.create({ tags : name })
    }
}
