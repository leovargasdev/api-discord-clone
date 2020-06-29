import { Router } from 'express';
import CreateMessageService from '../services/CreateMessageService'
const routes = Router();

routes.post('/new-message', async (request, response) => {
  const { content, username, avatar_url } = request.body;

  const createMessage = new CreateMessageService();

  const message = await createMessage.execute({content, username, avatar_url});

  return response.json(message);
});

routes.get('/messages', async (request, response) => {


  return response.json({ ok: true });
});

export default routes;
