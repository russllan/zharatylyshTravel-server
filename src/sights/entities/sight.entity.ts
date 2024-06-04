import { Tour } from "src/tour/entities/tour.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('sight')
export class Sight {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    img: string

    @Column({type: 'jsonb', nullable: true})
    imgList: string[]

    @Column()
    description: string

    // relation
    @ManyToOne(() => User, (user) => user.sights, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: User

    @ManyToMany(() => Tour, (tour) => tour.sights, {onDelete: 'CASCADE'})
    tour: Tour
}
