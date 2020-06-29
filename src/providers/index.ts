import { container } from 'tsyringe';

import IMessagesRepository from '../repositories/IMessagesRepository';
import MessagesRepository from '../repositories/MessagesRepository';

container.registerSingleton<IMessagesRepository>(
  'MessagesRepository',
  MessagesRepository,
);
