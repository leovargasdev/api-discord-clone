import { Router } from 'express';
import { container } from 'tsyringe';
import CreateMessageService from '../services/CreateMessageService';
import ListMessagesService from '../services/ListMessagesService';

const routes = Router();

routes.post('/new-message', async (request, response) => {
  const { content, username, avatar_url } = request.body;

  const createMessage = container.resolve(CreateMessageService);

  const message = await createMessage.execute({content, username, avatar_url});

  return response.json(message);
});

routes.get('/messages', async (request, response) => {
  const listMessages = container.resolve(ListMessagesService);

  const messages = await listMessages.execute();

  return response.json(messages);
});

export default routes;
