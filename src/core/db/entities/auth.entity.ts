import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class AuthEntity{
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number;

    @Column()
    @ApiProperty()
    firstName:string

    @Column()
    @ApiProperty()
    lastName:string

    @Column({unique:true})
    @ApiProperty()
    email:string

    @Column()
    @ApiProperty()
    password:string
}