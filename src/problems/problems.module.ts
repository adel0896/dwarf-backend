import { Module } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { ProblemsController } from './problems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problem } from './entities/problem.entity';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { BoardMemberEntity } from 'src/authentication/entities/boardmember';
import { TenantEntity } from 'src/authentication/entities/tenant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Problem, BoardMemberEntity, TenantEntity]),
    UsersModule,
  ],
  controllers: [ProblemsController],
  providers: [ProblemsService, UsersService],
})
export class ProblemsModule {}
