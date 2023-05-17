import { IUser } from '../interfaces';
import { hashPassword } from '../utils';

export const userSeed: IUser[] = [
  {
    name: 'Renato',
    lastName: 'Soca',
    email: 'renato@renato.com',
    password: hashPassword('renato'),
    hasVerifiedEmail: true,
    status: 'active',
    token: '',
    expiredToken: new Date(),
  }
]