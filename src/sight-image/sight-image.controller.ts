import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SightImageService } from './sight-image.service';
import { CreateSightImageDto } from './dto/create-sight-image.dto';
import { UpdateSightImageDto } from './dto/update-sight-image.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sight-image')
@Controller('sight-image')
export class SightImageController {
  constructor(private readonly sightImageService: SightImageService) {}

  @Post()
  create(@Body() createSightImageDto: CreateSightImageDto) {
    return this.sightImageService.create(createSightImageDto);
  }

  @Get()
  findAll() {
    return this.sightImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sightImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSightImageDto: UpdateSightImageDto) {
    return this.sightImageService.update(+id, updateSightImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sightImageService.remove(+id);
  }
}
