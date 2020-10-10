const CustomError = require("../model/custom-error");
const Validator = require("../../application/handler/validator");
const uuid = require("uuid/v4");

class CreateUrlCommand {
  constructor(url) {
    this._original = url;
    this.short = uuid();
    this.accessCount = 0;
  }
  set _original(value) {
    if (!Validator.isUrl(value)) throw new CustomError("Invalid input URL");
    this.original = value;
  }
}

module.exports = CreateUrlCommand;
