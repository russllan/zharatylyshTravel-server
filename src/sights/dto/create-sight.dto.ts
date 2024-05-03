import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';
// import { SightImage } from 'src/sight-image/entities/sight-image.entity';
import { Tour } from 'src/tour/entities/tour.entity';

export class CreateSightDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  img: string;

  @ApiProperty({type: [String]})
  @IsOptional()
  @IsArray()
  imgList: string[]

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ required: true, type: 'number' })
  @IsNotEmpty()
  tour: Tour;

  // @ApiProperty({ type: 'number' })
  // @IsOptional()
  // imgList?: SightImage;

}
