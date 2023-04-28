import User from '../types/user';
import connection from './connection';

const MAIN_DATABASE = process.env.MAIN_DATABASE || 'Trybesmith';

export const createUser = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;

  const [userCreated] = await (connection.execute(
    `INSERT INTO ${MAIN_DATABASE}.users (username, vocation, level, password) VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  ) as unknown) as [User];

  return userCreated;
};

export const getUser = async () => {};
