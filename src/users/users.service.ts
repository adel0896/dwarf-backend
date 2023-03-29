import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardMemberEntity } from 'src/authentication/entities/boardmember';
import { TenantEntity } from 'src/authentication/entities/tenant';
import { UserEntity } from 'src/authentication/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(TenantEntity)
    private tenantRepository: Repository<TenantEntity>,
    @InjectRepository(BoardMemberEntity)
    private boardMemberRepository: Repository<BoardMemberEntity>,
  ) {}

  async findOne(username: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ username });
  }
  async findOneById(userId: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id: userId });
  }
  async findTenants(): Promise<TenantEntity[]> {
    const tenants = await this.tenantRepository.find({
      relations: {
        user: true,
      },
    });
    return tenants;
  }
  async findBoardMembers(): Promise<BoardMemberEntity[]> {
    const boardMembers = await this.boardMemberRepository.find({
      relations: {
        user: true,
      },
    });
    return boardMembers;
  }

  async createTenant(
    username: string,
    password: string,
    name: string,
    email: string,
  ): Promise<TenantEntity> {
    const user = await this.userRepository.save({ username, password });
    const tenant = this.tenantRepository.save({ name, email, userId: user.id });
    return tenant;
  }
  async createBoardMember(
    username: string,
    password: string,
    name: string,
    phone: string,
  ): Promise<BoardMemberEntity> {
    const user = await this.userRepository.save({ username, password });
    const boardMember = this.boardMemberRepository.save({
      name,
      phone,
      userId: user.id,
    });
    return boardMember;
  }
}
