"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StartUp = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _UserRoutes = require("./Routes/UserRoutes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class StartUp {
  constructor() {
    this.express = (0, _express.default)();
    this.middleware();
    this.routes();
    this.listen();
  }

  middleware() {
    this.express.use((0, _morgan.default)("dev"));
    this.express.use(_bodyParser.default.json());
    this.express.use(_bodyParser.default.urlencoded({
      extended: false
    }));
  }

  routes() {
    this.express.use("/users", new _UserRoutes.UserRoutes());
  }

  listen() {
    this.express.listen(3000, () => console.log("Example app listening on port 3000!"));
  }

}

exports.StartUp = StartUp;

var _default = new StartUp();

exports.default = _default;