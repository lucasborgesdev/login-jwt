import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'; 


import * as path from 'path';

export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, '..', '..', 'templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
    },
  },
  //transport: `smtps://lucasborgesbr924@gmail.com:Luc@s1992`,
  transport: {
    host: 'smtp.gmail.com',
    service: 'Gmail',      
    auth: {
      user: 'lucas',
      pass: 'pass'
    },
  },
};