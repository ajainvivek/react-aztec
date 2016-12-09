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
  },
  length(value, options) {
    return validator.isLength(options);
  },
  url(value) {
    return validator.isURL(value);
  },
  creditcard(value) {
    return validator.isCreditCard(value);
  },
  currency(value, options) {
    return validator.isCurrency(value, options);
  },
  date(value) {
    return validator.isDate(value);
  },
  boolean(value) {
    return validator.isBoolean(value);
  },
  alphanumeric(value) {
    validator.isAlphanumeric(value);
  },
  contains(value, seed) {
    return validator.contains(value, seed);
  },
  FQDN(value, options) {
    return validator.isFQDN(value, options);
  },
  float(value) {
    return validator.isFloat(value);
  },
  ip(value) {
    return validator.isIP(value);
  },
  ISBN(value) {
    return validator.isISBN(value);
  },
  MACAddress(value) {
    return validator.isMACAddress(value);
  },
  MD5(value) {
    return validator.isMD5(value);
  },
  numeric(value) {
    return validator.isNumeric(value);
  },
  UUID(value, version) {
    return validator.isUUID(value, version);
  },
  matches(value, pattern) {
    return validator.matches(value, pattern);
  },
  int(value, options) {
    return validator.isInt(value, options);
  },
  hexcolor(value) {
    return validator.isHexColor(value);
  },
  dataURI(value) {
    return validator.isDataURI(value);
  },
  decimal(value) {
    return validator.isDecimal(value);
  },
  alpha(value) {
    return validator.isAlpha(value);
  }
};

module.exports = validation;
