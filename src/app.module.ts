import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
