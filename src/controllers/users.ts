import { Router } from 'express';
import { createUserService } from '../services/users';

const users = Router();

users.post('/', async (req, res) => {
  try {
    const { username, vocation, level, password } = req.body;

    return res.status(201).json(
      { token: await createUserService({ username, vocation, level, password }) },
    );
  } catch (error: any) {
    return res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
    });
  }
});

export default users;
