import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import AppError from './errors/AppError';
import './infra/typeorm';
import routes from './routes';

import './providers';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
// Centralizando os erros da aplicação
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333);
