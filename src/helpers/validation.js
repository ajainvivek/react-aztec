import validator from 'validator';

const validation = {
  email(value) {
    return validator.isEmail(value);
  },
  equals(value, comparison) {
    return validator.equals(value, comparison);
  },
  mandatory(value) {
    return !validator.isEmpty(value);
  }
};

module.exports = validation;
