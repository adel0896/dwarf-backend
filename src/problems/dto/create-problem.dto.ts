import { UserEntity } from 'src/authentication/entities/user';

export class CreateProblemDto {
  constructor(
    public subject: string,
    public description: string,
    public user: UserEntity,
  ) {}
}
