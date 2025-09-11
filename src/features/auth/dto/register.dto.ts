import { IsEmail, isString, IsString } from "class-validator";

export class RegisterDto{
    @IsString()
    firstname:String

    @IsString()
    lastname:string

    @IsEmail()
    @IsString()
    email:string

    @IsString()
    password:string
}