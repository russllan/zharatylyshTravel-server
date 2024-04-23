import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createDate: Date

    @Column({nullable: false})
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column({nullable: true})
    country: string

    @Column({nullable: true})
    cardNumber: string

    // relation
    
}
