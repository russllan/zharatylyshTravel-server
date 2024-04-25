import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateBookedTourDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  sum: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  user: User;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  tour: Tour;
}
