import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'userId',
  })
  id!: number;

  @Column()
  uuid!: string;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;

  @Column()
  phone!: string;

  @Column({ type: 'datetime', default: null })
  lastLoginAt!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: 'datetime', default: null })
  updatedAt!: Date;

  @Column({ type: 'datetime', default: null })
  deletedAt!: Date;
}
