import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { CreateMailerDto } from './dto/create-mailer.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send-email')
  async sendEmail() {
    const dto: CreateMailerDto = {
      from: {name: 'Lucy', address: 'lucy@example.com'},
      recipients: [{name: 'John', address: 'John@example.com'}],
      subject: 'Lucky Winner!',
      html: '<p>Hi, John, your lucky number 22 won you 10$</p>'
    }
    return await this.mailerService.sendEmail(dto)
  }

}
