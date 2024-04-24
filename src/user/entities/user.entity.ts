import { Review } from "src/review/entities/review.entity";
import { Sight } from "src/sights/entities/sight.entity";
import { Tour } from "src/tour/entities/tour.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @OneToMany(() => Tour, (tour) => tour.user, {onDelete: 'CASCADE'})
    toures: Tour[]

    @OneToMany(() => Review, (review) => review.user, {onDelete: 'CASCADE'})
    reviews: Review[]

    @OneToMany(() => Sight, (sight) => sight.user, {onDelete: 'CASCADE'})
    sights: Sight[]
}
