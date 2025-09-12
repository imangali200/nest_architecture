import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity('user')
export class User{
    @PrimaryColumn()
    @ApiProperty()
    productId:string;

    @Column()
    @ApiProperty()
    description:string
}