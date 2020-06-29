import { getRepository } from 'typeorm';

import Message from '../schemas/Message';

interface Request {
  content: string;
  username: string;
  avatar_url: string;
}

class CreateMessageService {
  public async execute({
    content, username, avatar_url
  }: Request): Promise<any> {
    const messages = getRepository(Message);
    // Não está entrando no create
    const message = await messages.create({ content, username, avatar_url });
    console.log('CreateMessageService', message);

    return message;
  }
}

export default CreateMessageService;
