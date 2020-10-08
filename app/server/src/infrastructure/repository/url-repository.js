const CustomError = require("../../domain/model/custom-error");

class UrlRepository {
  constructor(mySqlProvider) {
    this.mySqlProvider = mySqlProvider;
  }

  async createUrl(command) {}
}

module.exports = UrlRepository;
