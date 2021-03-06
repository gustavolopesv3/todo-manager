import { UserEntity } from '../../user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum StatusTask {
  TODO = 'TODO',
  DONE = 'DONE',
  DOING = 'DOING',
  CANCELED = 'CANCELED',
  PAUSED = 'PAUSED',
}

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'date',
    name: 'start_at',
    nullable: true,
  })
  startAt: string;

  @Column({
    type: 'date',
    name: 'end_at',
    nullable: true,
  })
  endAt: string;

  @Column({
    type: 'enum',
    enum: StatusTask,
    default: StatusTask.TODO,
  })
  status: StatusTask;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
