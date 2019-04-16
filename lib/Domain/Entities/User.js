"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _EntityBase = require("./Base/EntityBase");

class User extends _EntityBase.EntityBase {
  constructor(username, email) {
    super();
    this.addValidate(x => x.username.length > 10);
    this.username = username;
    this.email = email;
  }

}

exports.User = User;