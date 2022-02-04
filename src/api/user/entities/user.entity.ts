import { TaskEntity } from '../../tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    name: 'username',
  })
  userName: string;

  @Column({
    type: 'boolean',
    name: 'is_active',
  })
  isActive: boolean;

  @Column({
    type: 'varchar',
  })
  email: string;

  @OneToMany(() => TaskEntity, (task) => task.user)
  tasks: TaskEntity[];
}
