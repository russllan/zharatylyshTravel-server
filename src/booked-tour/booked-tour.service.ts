import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookedTourDto } from './dto/create-booked-tour.dto';
import { UpdateBookedTourDto } from './dto/update-booked-tour.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookedTour } from './entities/booked-tour.entity';
import { Repository } from 'typeorm';
import { Tour } from 'src/tour/entities/tour.entity';

@Injectable()
export class BookedTourService {
  constructor(
    @InjectRepository(BookedTour)
    private readonly bookedTourRepository: Repository<BookedTour>,
    @InjectRepository(Tour) private readonly mytourRepository: Repository<Tour>,
  ) {}
  async create(createBookedTourDto: CreateBookedTourDto) {
    const tourData = await this.mytourRepository.findBy({
      id: +createBookedTourDto.tour,
    });
    if (!tourData.length)
      throw new BadRequestException('Такого тура не существует для брони!');

    const isExist = await this.bookedTourRepository.findBy({
      tour: { id: +createBookedTourDto.tour },
      user: { id: +createBookedTourDto.user },
    });
    if (isExist.length)
      throw new BadRequestException('Такой тур уже забронирован!');

    const selectedTour = tourData[0];
    if (selectedTour.amount < createBookedTourDto.amount) {
      throw new BadRequestException('Недостаточно мест для бронирования!');
    }

    tourData[0].amount -= createBookedTourDto.amount;
    await this.mytourRepository.save(tourData);

    const newBookedTour = {
      sum: createBookedTourDto.sum,
      amount: createBookedTourDto.amount,
      tour: createBookedTourDto.tour,
      user: createBookedTourDto.user,
    };
    return await this.bookedTourRepository.save(newBookedTour);
  }

  async findAll() {
    const bookedTour = await this.bookedTourRepository.find({
      relations: { tour: true, user: true },
    });
    if (!bookedTour) throw new NotFoundException('Такой тур не заброинрован!');
    return bookedTour;
  }

  async findOne(id: number) {
    const bookedTour = await this.bookedTourRepository.findOne({
      where: { id },
    });
    if (!bookedTour) throw new NotFoundException('Такой тур не заброинрован!');
    return bookedTour;
  }

  async update(id: number, updateBookedTourDto: UpdateBookedTourDto) {
    const bookedTour = await this.bookedTourRepository.findOne({
      where: { id },
    });
    if (!bookedTour) throw new NotFoundException('Такой тур не заброинрован!');
    return await this.bookedTourRepository.update(id, updateBookedTourDto);
  }

  async remove(id: number) {
    const bookedTour = await this.bookedTourRepository.findOne({
      where: { id },
    });
    if (!bookedTour) throw new NotFoundException('Такой тур не заброинрован!');
    return await this.bookedTourRepository.delete(id);
  }
}
