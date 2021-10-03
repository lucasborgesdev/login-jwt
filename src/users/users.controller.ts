import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dtos/return-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UseGuards(AuthGuard())
  async createAdminUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto);
    return {
      user,
      message: 'Administrador cadastrado com sucesso',
    };
  }
}

/**
 * Primeiro nós adicionamos o módulo do Passport ao nosso módulo users adicionando o import do módulo no nosso users.module.ts.
 * Feito isso adicionamos o decorator @UseGuards() no endpoint de criação de usuários administradores,
 * passando o guard AuthGuard()
 * como parâmetro. Vamos agora tentar criar um administrador sem estarmos autenticados
 */

/**
 * Recebemos um erro com código 401, que é o código padrão para informar que o usuário não está autenticado.
 *  Mudando o tipo de autenticação para “Bearer Token” e incluindo o token
 */
