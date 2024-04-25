import { IsBoolean, IsNumber, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateBookedTourDto {
  @IsNotEmpty()
  @IsNumber()
  sum: number;

  @IsOptional()
  @IsNumber()
  user: User;

  @IsNotEmpty()
  @IsNumber()
  tour: Tour;
}
