import { createParamDecorator } from '@nestjs/common';
import { User } from 'src/users/user.entity';

export const GetUser = createParamDecorator((data, req): User => {
  const user = req.args[0].user;
  return user;
});

/*
Em ambos os casos o decorator nada mais faz do que retornar o objeto do usuário de dentro da requisição.
 */
