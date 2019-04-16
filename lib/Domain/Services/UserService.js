"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = void 0;

var _UserRepository = require("../../Data/Repositories/UserRepository");

var _IUserRepository = require("../Interfaces/Repositories/IUserRepository");

var _IUserService = require("../Interfaces/Services/IUserService");

var _User = require("../Entities/User");

class UserService {
  constructor() {
    this._userRepository = void 0;
    this._userRepository = new _UserRepository.UserRepository();
  }

  async getAll() {
    const users = await this._userRepository.getAll();
    return users;
  }

  async create(request) {
    const user = new _User.User(request.username, request.email);
    const users = await this._userRepository.create(user);
    return users;
  }

}

exports.UserService = UserService;