const Validator = require("../../application/handler/validator");

class SearchCriteria {
  constructor(criteria) {
    this._text = criteria.searchText;
    this._limit = criteria.limit; // Limit per page
    this._offset = criteria.offset; // the start of the limit
  }

  set _text(value) {
    this.text = Validator.isString(value, 0, 20) ? value : "find-nothing";
  }

  set _offset(value) {
    this.offset = Validator.isNumber(value) ? Number.parseInt(number) : 0;
  }
  set _limit(value) {
    this.limit = Validator.isNumber(value) ? Number.parseInt(number) : 20;
  }
}
module.exports = SearchCriteria;
