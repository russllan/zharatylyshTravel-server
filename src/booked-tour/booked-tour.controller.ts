import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookedTourService } from './booked-tour.service';
import { CreateBookedTourDto } from './dto/create-booked-tour.dto';
import { UpdateBookedTourDto } from './dto/update-booked-tour.dto';

@Controller('booked-tour')
export class BookedTourController {
  constructor(private readonly bookedTourService: BookedTourService) {}

  @Post()
  create(@Body() createBookedTourDto: CreateBookedTourDto) {
    return this.bookedTourService.create(createBookedTourDto);
  }

  @Get()
  findAll() {
    return this.bookedTourService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookedTourService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookedTourDto: UpdateBookedTourDto) {
    return this.bookedTourService.update(+id, updateBookedTourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookedTourService.remove(+id);
  }
}
