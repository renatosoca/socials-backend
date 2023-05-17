import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import { userModel } from '../models';
import { hashPassword, sendEmailRegister } from '../utils';

export const userCreate = async ({ body }: Request, res: Response) => {
  const { name, lastName, email, password } = body;

  try {
    const userExists = await userModel.findOne({ where: { email } });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const newUser: IUser = {
      ...body,
      token: Math.random().toString(36).substring(2),
      password: hashPassword(password)
    }

    const user = await userModel.create(newUser);

    const emailMail = await sendEmailRegister(email, name, lastName, user.token);
    console.log(!!emailMail, 'Example')
    return res.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error creating user',
      error,
    });
  }
}