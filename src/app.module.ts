import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TourModule } from './tour/tour.module';
import { MailerModule } from './mailer/mailer.module';
import { SightsModule } from './sights/sights.module';
import { ReviewModule } from './review/review.module';
import { SightImageModule } from './sight-image/sight-image.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    UserModule,
    TourModule,
    MailerModule,
    SightsModule,
    ReviewModule,
    SightImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
