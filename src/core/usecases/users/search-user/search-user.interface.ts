import { UserEntity } from "../../../entities/user.entity";

export class SearchUserUseCaseParams {
  id: string;
}

export interface SearchUserInterface {
  execute(model: SearchUserUseCaseParams): Promise<UserEntity>;
}
