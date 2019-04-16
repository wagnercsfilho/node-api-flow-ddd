import type { $Request, $Response } from "express";
import { IUserService } from "../../Domain/Interfaces/Services/IUserService";
import { UserService } from "../../Domain/Services/UserService";
import { IUserController } from "../Interfaces/Controllers/IUserController";
import type { UserResponse } from "../../Domain/Arguments/User/UserResponse";
import type { UserRequest } from "../../Domain/Arguments/User/UserRequest";
import { User } from "../../Domain/Entities/User";

export class UserController implements IUserController {
  _userService: IUserService;

  constructor() {
    this._userService = new UserService();
  }

  index = async (req: $Request, res: $Response) => {
    const users: User[] = await this._userService.getAll();
    const response: UserResponse[] = users.map(u => ({
      username: u.username,
      email: u.email
    }));
    res.json(response);
  };

  create = async (req: $Request, res: $Response) => {
    const request: UserRequest = req.body;
    const user: User = await this._userService.create(request);
    const response: UserResponse = {
      username: user.username,
      email: user.email
    };
    res.json(response);
  };
}
