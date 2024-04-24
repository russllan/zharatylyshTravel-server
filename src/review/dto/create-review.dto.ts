import { IsNumber, IsString, IsNotEmpty, IsOptional, Max, Min } from 'class-validator';
import { Tour } from 'src/tour/entities/tour.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  comment: string;

  @IsOptional()
  @IsString()
  img: string;

  @IsNotEmpty()
  tourId: Tour;

  @IsOptional()
  userId: User;
}
