"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRoutes = void 0;

var _express = _interopRequireWildcard(require("express"));

var _UserController = require("../Controllers/UserController");

var _IUserController = require("../Interfaces/Controllers/IUserController");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class UserRoutes extends _express.Router {
  constructor() {
    super();
    this._userController = void 0;
    this._userController = new _UserController.UserController();
    this.get("/", this._userController.index);
    this.post("/", this._userController.create);
  }

}

exports.UserRoutes = UserRoutes;