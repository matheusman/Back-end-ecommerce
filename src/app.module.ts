import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CourseController } from './course/course.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, CourseController],
  providers: [AppService],
})
export class AppModule {}
