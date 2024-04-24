import { SightImage } from "src/sight-image/entities/sight-image.entity";
import { Tour } from "src/tour/entities/tour.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('sight')
export class Sight {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    img: string

    @Column()
    description: string

    // relation
    @ManyToOne(() => User, (user) => user.sights, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'user_id'})
    user: User

    @ManyToOne(() => Tour, (tour) => tour.sights, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'tour_id'})
    tour: Tour

    @OneToMany(() => SightImage, (sightImage) => sightImage.sight, {onDelete: 'CASCADE'})
    imgList: SightImage[]
}
