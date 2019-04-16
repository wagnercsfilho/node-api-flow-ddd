import { IUserRepository } from "../../Domain/Interfaces/Repositories/IUserRepository";
import { User } from "../../Domain/Entities/User";

const _users: User[] = [new User("wagnercsfilho", "wagnercsfilho@gmail.com")];

export class UserRepository implements IUserRepository {
  getAll(): Promise<User[]> {
    return Promise.resolve(_users);
  }

  create(user: User): Promise<User> {
    _users.push(user);
    return Promise.resolve(user);
  }
}
