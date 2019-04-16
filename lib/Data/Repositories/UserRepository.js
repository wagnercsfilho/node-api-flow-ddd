"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _IUserRepository = require("../../Domain/Interfaces/Repositories/IUserRepository");

var _User = require("../../Domain/Entities/User");

const _users = [new _User.User("wagnercsfilho", "wagnercsfilho@gmail.com")];

class UserRepository {
  getAll() {
    return Promise.resolve(_users);
  }

  create(user) {
    _users.push(user);

    return Promise.resolve(user);
  }

}

exports.UserRepository = UserRepository;