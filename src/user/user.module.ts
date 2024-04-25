import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MailerModule.forRoot({
      transport: {
        host: 'sandbox.smtp.mailtrap.io',
        port: 465,
        secure: false,
        auth: {
          user: '822b9bb355a752',
          pass: 'feb330e0cec2e5'
        }
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
