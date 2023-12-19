import { Controller, Get, Param} from '@nestjs/common';

@Controller('course')
export class CourseController {

    @Get()
    findAll () {
        return "Todos os elementos";
    }
    
    @Get(":id")
    findOne (@Param() parm) {
        return `elemento numero : ${parm.id}`
    }

}
