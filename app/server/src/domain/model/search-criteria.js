const Validator = require("../../application/handler/validator");

class SearchCriteria {
  constructor(criteria) {
    this._offset = criteria.offset;
    this._limit = criteria.limit;
  }
  set _offset(value) {
    this.offset = Validator.isNumber(value) ? Number.parseInt(value) : 0;
  }
  set _limit(value) {
    this.limit = Validator.isNumber(value) ? Number.parseInt(value) : 20;
  }
}
module.exports = SearchCriteria;
