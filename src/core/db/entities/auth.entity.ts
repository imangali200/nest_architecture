import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class AuthEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column({unique:true})
    email:string

    @Column()
    password:string
}