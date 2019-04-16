import { IRepository } from "./Base/IRepository";
import { User } from "../../Entities/User";

export interface IUserRepository extends IRepository<User> {}
