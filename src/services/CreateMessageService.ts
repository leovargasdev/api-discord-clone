import { inject, injectable } from 'tsyringe';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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

  public async execute({ content, username, avatar_url }: Request): Promise<Message> {
    const date = format(new Date(), "EEEE', 'dd 'de' MMMM 'de' yyyy", {locale: ptBR});
    const message = await this.messagesRepository.create({ content, username, avatar_url, date });
    return message;
  }
}

export default CreateMessageService;
