import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Tags from "./Tags.entity";

@Entity("courses")
export default class Courses {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
    description: string;
    
    @JoinTable()
    @ManyToMany( () => Tags, tag => tag.courses, {cascade : true })
    tags: Tags[];
}