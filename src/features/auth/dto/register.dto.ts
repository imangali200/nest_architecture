import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, isString, IsString } from "class-validator";

export class RegisterDto {
    @IsString()
    @ApiProperty({})

    firstname: String

    @IsString()
    @ApiProperty({})

    lastname: string

    @IsEmail()
    @ApiProperty({})

    @IsString()
    email: string

    @IsString()
    @ApiProperty({})

    password: string
}