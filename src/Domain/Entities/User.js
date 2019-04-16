import { EntityBase } from "./Base/EntityBase";

export class User extends EntityBase<User> {
  username: string;
  email: string;

  constructor(username: string, email: string) {
    super();
    this.addValidate(x => x.username.length > 10);

    this.username = username;
    this.email = email;
  }
}
