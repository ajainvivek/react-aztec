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
  },
  mobile(value, locale) {
    return validator.isMobilePhone(value, locale);
  },
  lowercase(value) {
    return validator.isLowercase(value);
  },
  uppercase(value) {
    return validator.isUppercase(value);
  }
};

module.exports = validation;
