"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityBase = void 0;

class EntityBase {
  constructor() {
    this._validations = [];
  }

  addValidate(fn) {
    this._validations.push(fn);

    return this;
  }

}

exports.EntityBase = EntityBase;