import { inject, injectable } from 'tsyringe';

import Message from '../infra/schemas/Message';
import IMessagesRepository from '../repositories/IMessagesRepository';

interface Request {
  content: string;
  username: string;
  avatar_url: string;
}

@injectable()
class CreateMessageService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute({
    content, username, avatar_url
  }: Request): Promise<Message> {
    const message = await this.messagesRepository.create({ content, username, avatar_url });
    return message;
  }
}

export default CreateMessageService;
