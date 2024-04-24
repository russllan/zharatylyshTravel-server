import { IsString,IsNotEmpty, IsOptional } from 'class-validator';
import { SightImage } from 'src/sight-image/entities/sight-image.entity';
import { Tour } from 'src/tour/entities/tour.entity';

export class CreateSightDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  img: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  imgList?: SightImage;

  @IsNotEmpty()
  tour: Tour
}
