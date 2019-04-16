type ValidateFunction<T> = (fn: T) => boolean;

export class EntityBase<T> {
  _validations: Function[];

  constructor() {
    this._validations = [];
  }

  addValidate(fn: ValidateFunction<T>): this {
    this._validations.push(fn);
    return this;
  }
}
