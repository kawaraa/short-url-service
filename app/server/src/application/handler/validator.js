class Validator {
  static isString(str, minLength, maxLength) {
    let valid = true;
    if (!str || typeof str !== "string") return false;
    if (!Number.isNaN(Number.parseInt(minLength))) valid = str.length >= minLength;
    if (!Number.isNaN(Number.parseInt(maxLength))) valid = str.length <= maxLength;
    return valid;
  }
  static isNumber(num, min, max) {
    const N = Number.parseFloat(num);
    if (!Number.isNaN(N) && !max) return true;
    return !Number.isNaN(N) && N >= min && N <= max ? true : false;
  }
  static isUrl(url) {
    try {
      const origin = new URL(url).origin;
      const urlValidator = /^(?:http(s)?:\/\/)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(\.\w[a-zA-Z]{1,5})$/;
      return urlValidator.test(new URL(url).origin);
    } catch (error) {
      return false;
    }
  }
}
module.exports = Validator;
