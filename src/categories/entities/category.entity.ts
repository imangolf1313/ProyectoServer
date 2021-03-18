//id, description, color, imagen

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 300})
    description: string;

    @Column({length: 50})
    color: string;

    @Column({length:300})
    imagen: string;

}

