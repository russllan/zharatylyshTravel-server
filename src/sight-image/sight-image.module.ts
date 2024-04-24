import { Module } from '@nestjs/common';
import { SightImageService } from './sight-image.service';
import { SightImageController } from './sight-image.controller';

@Module({
  controllers: [SightImageController],
  providers: [SightImageService]
})
export class SightImageModule {}
