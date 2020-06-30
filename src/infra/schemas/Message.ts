import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('messages')
class Message {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  content: string;

  @Column()
  date: string;

  @Column()
  username: string;

  @Column()
  avatar_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Message;
