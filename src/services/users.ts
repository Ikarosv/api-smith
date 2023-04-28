import { sign } from 'jsonwebtoken';
import { createUser } from '../models/users';
import errorGenerator from '../utils/errorFunction';
import User from '../types/user';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const createUserService = async (user: User): Promise<string> => {
  const userCreated = await createUser(user);

  if (!userCreated) errorGenerator(500, 'Internal Server Error');

  return sign(userCreated, JWT_SECRET);
};

export const getUserService = async () => {};
