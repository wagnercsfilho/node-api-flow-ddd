import type { $Request, $Response } from "express";

export interface IUserController {
  index(req: $Request, res: $Response): Promise<void>;
  create(req: $Request, res: $Response): Promise<void>;
}
