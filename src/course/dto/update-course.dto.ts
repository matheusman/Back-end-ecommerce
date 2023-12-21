import { PartialType } from '@nestjs/mapped-types'
import CreateCouseUser from './create-course.dto';

export default class UpdateCoursesUser extends PartialType(CreateCouseUser) {

} 