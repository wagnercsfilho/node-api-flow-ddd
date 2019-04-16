import express, { Router } from "express";
import { UserController } from "../Controllers/UserController";
import { IUserController } from "../Interfaces/Controllers/IUserController";

export class UserRoutes extends Router {
  _userController: IUserController;

  constructor() {
    super();
    this._userController = new UserController();

    this.get("/", this._userController.index);
    this.post("/", this._userController.create);
  }
}
