// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   ManyToOne,
//   JoinColumn,
// } from 'typeorm';
// import { Sight } from 'src/sights/entities/sight.entity';
// import { IsOptional } from 'class-validator';

// @Entity()
// export class SightImage {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   img: string;

//   @Column({ nullable: true })
//   img2: string;

//   @Column({ nullable: true })
//   img3: string;

//   @Column({ nullable: true })
//   img4: string;

//   @Column({ nullable: true })
//   img5: string;

//   @Column({ nullable: true })
//   img6: string;

//   // relation
//   // @ManyToOne(() => Sight, (sight) => sight.imgList, { onDelete: 'CASCADE' })
//   // @JoinColumn({ name: 'sight_id' })
//   // sight: Sight;
// }
