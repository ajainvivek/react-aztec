import validator from 'validator';

const validation = {
  email(value) {
    return validator.isEmail(value);
  }
};

module.exports = validation;
