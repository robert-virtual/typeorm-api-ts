import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("products")
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;
   
    @Column()
    quantity: number;

}
