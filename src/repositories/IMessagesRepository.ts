import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import Message from '../infra/schemas/Message';

export default interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
  find(): Promise<Message[]>;
}
