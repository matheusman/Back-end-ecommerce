import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Courses from './Entities/Course.entity';
import Tags from './Entities/Tags.entity';

@Module({
    imports : [TypeOrmModule.forFeature([Courses, Tags])],
    controllers: [CourseController],
    providers: [CourseService]
})
export class CourseModule {}
