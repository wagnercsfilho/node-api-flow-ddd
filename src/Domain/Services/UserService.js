import { UserRepository } from "../../Data/Repositories/UserRepository";
import { IUserRepository } from "../Interfaces/Repositories/IUserRepository";
import { IUserService } from "../Interfaces/Services/IUserService";
import type { UserRequest } from "../Arguments/User/UserRequest";
import { User } from "../Entities/User";

export class UserService implements IUserService {
  _userRepository: IUserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async getAll(): Promise<User[]> {
    const users = await this._userRepository.getAll();
    return users;
  }

  async create(request: UserRequest): Promise<User> {
    const user = new User(request.username, request.email);
    const users = await this._userRepository.create(user);
    return users;
  }
}
