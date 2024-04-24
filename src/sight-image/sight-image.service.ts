import { Injectable } from '@nestjs/common';
import { CreateSightImageDto } from './dto/create-sight-image.dto';
import { UpdateSightImageDto } from './dto/update-sight-image.dto';

@Injectable()
export class SightImageService {
  create(createSightImageDto: CreateSightImageDto) {
    return 'This action adds a new sightImage';
  }

  findAll() {
    return `This action returns all sightImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sightImage`;
  }

  update(id: number, updateSightImageDto: UpdateSightImageDto) {
    return `This action updates a #${id} sightImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} sightImage`;
  }
}
