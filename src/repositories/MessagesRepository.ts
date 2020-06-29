import { getMongoRepository, MongoRepository } from 'typeorm';

import Message from '../infra/schemas/Message';
import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import IMessagesRepository from '../repositories/IMessagesRepository';

class MessagesRepository implements IMessagesRepository{
  private ormRepository: MongoRepository<Message>;

  constructor() {
    this.ormRepository = getMongoRepository(Message);
  }

  public async create({ content, username, avatar_url }: ICreateMessageDTO): Promise<Message> {
    const message = await this.ormRepository.create({content, username, avatar_url})
    await this.ormRepository.save(message);
    return message;
  }
}

export default MessagesRepository;
