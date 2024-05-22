import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('bookedTour')
export class BookedTour {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @Column({ default: 0 })
  sum: number;

  @Column({ default: 1 })
  amount: number;

  // relation
  @ManyToOne(() => User, (user) => user.bookedTour, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Tour, (tour) => tour.bookedTour, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tour_id' })
  tour: Tour;
}
