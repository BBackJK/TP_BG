import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'userId',
  })
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'datetime' })
  lastLoginAt: string;

  @Column({ type: 'datetime' })
  createAt: string;

  @Column({ type: 'timestamp', default: null })
  updatedAt: string;

  @Column({ type: 'timestamp', default: null })
  deletedAt: string;
}
