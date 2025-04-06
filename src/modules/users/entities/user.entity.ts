import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';
import { UserType } from '../enum/user-type.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  @Index({ unique: true }) // ← aqui
  email: string;

  @Column({ unique: true })
  cpfCnpj: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserType })
  type: UserType;
}
