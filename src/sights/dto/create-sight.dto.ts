import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsNotEmpty, IsOptional } from 'class-validator';
import { SightImage } from 'src/sight-image/entities/sight-image.entity';
import { Tour } from 'src/tour/entities/tour.entity';

export class CreateSightDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  img: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  imgList?: SightImage;

  @ApiProperty()
  @IsNotEmpty()
  tour: Tour
}
