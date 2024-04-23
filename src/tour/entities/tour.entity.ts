import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tour')
export class Tour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  img: string;

  @Column()
  description: string;

  @Column()
  location: string;

  // relation
}
