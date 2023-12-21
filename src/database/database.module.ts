import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import Courses from 'src/course/Entities/Course.entity';
import Tags from 'src/course/Entities/Tags.entity';

export const dataSourceOptions : DataSourceOptions = {
    type : "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
    database: "jest",
    entities: [Courses, Tags],
    synchronize: true
}


@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return {
                ...dataSourceOptions
            }
        }
    })]
})
export class DatabaseModule {}
