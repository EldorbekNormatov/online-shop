import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, html: string) {
    await this.mailerService.sendMail({
      from: 'nasirullayevo7@gmail.com',
      to: email,
      subject: 'New password',
      context: { name: 'Your verification code' },
      html: html,
    });
  }
}
