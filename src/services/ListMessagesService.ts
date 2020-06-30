import { inject, injectable } from 'tsyringe';

import Message from '../infra/schemas/Message';
import IMessagesRepository from '../repositories/IMessagesRepository';

@injectable()
class ListMessagesService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute(): Promise<Message[]> {
    return this.messagesRepository.find();
  }
}

export default ListMessagesService;
