import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Sight } from 'src/sights/entities/sight.entity';

@Entity()
export class SightImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img: string;

  // relation
  @ManyToOne(() => Sight, sight => sight.imgList, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'sight_id'})
  sight: Sight;

}
