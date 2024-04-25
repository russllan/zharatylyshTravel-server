import { Module } from '@nestjs/common';
import { BookedTourService } from './booked-tour.service';
import { BookedTourController } from './booked-tour.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookedTour } from './entities/booked-tour.entity';
import { TourModule } from 'src/tour/tour.module';
import { Tour } from 'src/tour/entities/tour.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookedTour, Tour]), TourModule],
  controllers: [BookedTourController],
  providers: [BookedTourService],
})
export class BookedTourModule {}
