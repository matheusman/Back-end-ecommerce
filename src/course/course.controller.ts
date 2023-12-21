import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CourseService } from './course.service';
import UpdateCoursesUser from './dto/update-course.dto';
import CreateCourseUser from './dto/create-course.dto';

@Controller('course')
export class CourseController {

    constructor ( private readonly CourseService : CourseService) {

    }

    @Get()
    findAll () {
        return this.CourseService.findAll();
    }
    
    @Get(":id")
    findOne (@Param() parm) {
        return this.CourseService.findOne(Number(parm.id))
    }

    @Post()
    created (@Body() body : CreateCourseUser) {
        return this.CourseService.create(body);
    }

    @Put(":id")
    update (@Param('id') id : string, @Body() body : UpdateCoursesUser) {
        return this.CourseService.updateOne(body, Number(id))
    }

    @Delete(":id")
    delete (@Param('id') id : string) {
        return this.CourseService.deleteOne(Number(id));
    }

}
