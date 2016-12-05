import validator from 'validator';

const validation = {
  email(value) {
    return validator.isEmail(value);
  },
  equals(value, comparison) {
    return validator.equals(value, comparison);
  }
};

module.exports = validation;
