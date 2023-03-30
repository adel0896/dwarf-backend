import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/authentication/auth.service';
import { BoardMemberEntity } from 'src/authentication/entities/boardmember';
import { TenantEntity } from 'src/authentication/entities/tenant';
import { UserEntity } from 'src/authentication/entities/user';
import { UsersService } from './users.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, TenantEntity, BoardMemberEntity]),
  ],
  providers: [UsersService],
  exports: [
    UsersService,
    TypeOrmModule.forFeature([UserEntity, TenantEntity, BoardMemberEntity]),
  ],
})
export class UsersModule {}
