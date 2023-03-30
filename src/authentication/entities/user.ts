import { Problem } from 'src/problems/entities/problem.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { TenantEntity } from './tenant';
import { Role } from '../roles/role.enum';
import { BoardMemberEntity } from './boardmember';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne((type) => TenantEntity, (tenant) => tenant.user)
  tenant: TenantEntity | null;

  @OneToOne((type) => BoardMemberEntity, (board) => board.user)
  board: BoardMemberEntity | null;

  @OneToMany(() => Problem, (problem) => problem.user)
  problems: Problem[];

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;
}
