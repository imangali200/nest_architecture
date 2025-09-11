import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity('user')
export class User{
    @PrimaryColumn()
    productId:string;

    @Column()
    description:string
}