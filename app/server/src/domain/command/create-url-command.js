const CustomError = require("../model/custom-error");
const uuid = require("uuid/v4");

class CreateClientCommand {
  constructor(url) {
    this._url = url;
    this.id = uuid();
  }
  set _url(value) {
    this.url = value;
  }
}

module.exports = CreateClientCommand;
