import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);
/**
 * A função desse decorator é bem simples: ele irá receber como parâmetro um perfil de usuário armazenar ele nos metadados.
 */
