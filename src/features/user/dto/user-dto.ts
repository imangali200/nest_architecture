import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({})
    productId: string;

    @IsNotEmpty()
    @IsString()
     @ApiProperty({})
    description: string;

}
