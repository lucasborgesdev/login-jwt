import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'; 
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import { configuration } from './ambiente.config';


const xx = ConfigService;



export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, '..', '..', 'templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutsDir: path.resolve(__dirname, '..', '..', 'templates'),
    },
  },
 
  transport: {
    host: host,
    service: service,      
    auth: {
      user: user,
      pass:  pass,
    },
  },
};