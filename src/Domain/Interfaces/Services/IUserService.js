import { User } from "../../Entities/User";
import type { UserRequest } from "../../Arguments/User/UserRequest";

export interface IUserService {
  getAll(): Promise<User[]>;
  create(request: UserRequest): Promise<User>;
}
