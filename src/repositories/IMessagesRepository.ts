import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import Message from '../schemas/Message';

export default interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
}
