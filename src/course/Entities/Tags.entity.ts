import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Courses from "./Course.entity";

@Entity("tags")
export default class Tags {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    tags : string;
    
    @ManyToMany(() => Courses, courses => courses.tags)
    courses : Courses[]
}