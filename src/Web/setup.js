import type { $Request, $Response, $Application } from "express";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { UserRoutes } from "./Routes/UserRoutes";

export class StartUp {
  express: $Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.listen();
  }

  middleware() {
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use("/users", new UserRoutes());
  }

  listen() {
    this.express.listen(3000, () =>
      console.log("Example app listening on port 3000!")
    );
  }
}

export default new StartUp();
