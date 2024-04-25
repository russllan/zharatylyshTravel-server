import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  // private transporter: nodemailer.Transporter;

  // constructor() {
  //   this.transporter = nodemailer.createTransport({
  //     host: process.env.MAIL_HOST as string,
  //     port: process.env.MAIL_PORT,
  //     secure: false,
  //     auth: {
  //       user: process.env.MAIL_USER,
  //       pass: process.env.MAIL_PASSWORD,
  //     },
  //   });
  // }

  // async sendActivatMail(to: string, link: string) {
  //   await this.transporter.sendMail({
  //       from: process.env.MAIL_USER,
  //       to,
  //       subject: "Activation link",
  //       text: `Your activation link is: ${link}`,
  //       html: `<a href="${link}"> Your activation link </a>`,
  //   })
  // }
}
