"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _IUserService = require("../../Domain/Interfaces/Services/IUserService");

var _UserService = require("../../Domain/Services/UserService");

var _IUserController = require("../Interfaces/Controllers/IUserController");

var _User = require("../../Domain/Entities/User");

class UserController {
  constructor() {
    this._userService = void 0;

    this.index = async (req, res) => {
      const users = await this._userService.getAll();
      const response = users.map(u => ({
        username: u.username,
        email: u.email
      }));
      res.json(response);
    };

    this.create = async (req, res) => {
      const request = req.body;
      const user = await this._userService.create(request);
      const response = {
        username: user.username,
        email: user.email
      };
      res.json(response);
    };

    this._userService = new _UserService.UserService();
  }

}

exports.UserController = UserController;