import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ type: 'datetime' })
  createAt: string;

  @Column({ type: 'timestamp', default: null })
  updatedAt: string;

  @Column({ type: 'timestamp', default: null })
  deletedAt: string;
}
