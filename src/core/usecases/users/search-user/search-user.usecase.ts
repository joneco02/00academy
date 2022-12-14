import "reflect-metadata";
import { inject, injectable } from "inversify";
import {
  SearchUserInterface,
  SearchUserUseCaseParams,
} from "./search-user.interface";
import { UsersRepositoryInterface } from "../../../providers/users.repository.interface";
import TYPES from "../../../../types";
import { UserEntity } from "@core/entities/user.entity";

//todo search by email

@injectable()
export class SearchUserUseCase implements SearchUserInterface {
  private _UserRepository: UsersRepositoryInterface;

  constructor(
    @inject(TYPES.UsersRepositoryInterface)
    UserRepository: UsersRepositoryInterface
  ) {
    this._UserRepository = UserRepository;
  }
  
  execute(model: SearchUserUseCaseParams): Promise<UserEntity> {

    const result = this._UserRepository.search(model);

  return result;
  }
}
