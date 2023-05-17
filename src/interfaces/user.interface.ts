import { IAuth } from './';

export interface IUser extends IAuth {
  id?: number;
  name: string;
  lastName: string;
  image?: string;
  hasVerifiedEmail: boolean;
  status: TStatus;
  token: string;
  expiredToken: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TStatus = 'active' | 'inactive';