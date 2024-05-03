// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { CreateSightImageDto } from './dto/create-sight-image.dto';
// import { UpdateSightImageDto } from './dto/update-sight-image.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { SightImage } from './entities/sight-image.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class SightImageService {
//   constructor(
//     @InjectRepository(SightImage)
//     private readonly sightImageRepository: Repository<SightImage>,
//   ) {}

//   async create(createSightImageDto: CreateSightImageDto) {
//     const isExist = await this.sightImageRepository.findBy({
//       img: createSightImageDto.img,
//       sight: createSightImageDto.sight,
//     });
//     if (isExist.length)
//       throw new BadRequestException('Такое изображение уже есть!');

//     const newSightImage = {
//       img: createSightImageDto.img,
//       img2: createSightImageDto.img2,
//       img3: createSightImageDto.img3,
//       img4: createSightImageDto.img4,
//       img5: createSightImageDto.img5,
//       img6: createSightImageDto.img6,
//     };
//     return await this.sightImageRepository.save(newSightImage);
//   }

//   async findAll() {
//     const sightImage = await this.sightImageRepository.find({
//       relations: { sight: true },
//     });
//     if (!sightImage)
//       throw new NotFoundException('Изображений достопримечательностей нет!');
//     return sightImage;
//   }

//   async findOne(id: number) {
//     const sightImage = await this.sightImageRepository.findOne({
//       where: { id: id },
//     });
//     if (!sightImage) throw new NotFoundException('Такого изображения нет!');
//     return sightImage;
//   }

//   async update(id: number, updateSightImageDto: UpdateSightImageDto) {
//     const sightImage = await this.sightImageRepository.findOne({
//       where: { id: id },
//     });
//     if (!sightImage) throw new NotFoundException('Такого изображения нет!');
//     return await this.sightImageRepository.update(id, updateSightImageDto);
//   }

//   async remove(id: number) {
//     const sightImage = await this.sightImageRepository.findOne({
//       where: { id: id },
//     });
//     if (!sightImage) throw new NotFoundException('Такого изображения нет!');
//     return await this.sightImageRepository.delete(id);
//   }
// }
