import validator from 'validator';
import numeral from 'numeral';

const validation = {
  email(value, options) {
    return validator.isEmail(value, options);
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
    return validator.isLength(value, options);
  },
  url(value, options) {
    return validator.isURL(value, options);
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
  alphanumeric(value, locale) {
    validator.isAlphanumeric(value, locale);
  },
  contains(value, seed) {
    return validator.contains(value, seed);
  },
  FQDN(value, options) {
    return validator.isFQDN(value, options);
  },
  float(value, options) {
    return validator.isFloat(value, options);
  },
  ip(value, version) {
    return validator.isIP(value, version);
  },
  ISBN(value, version) {
    return validator.isISBN(value, version);
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
  alpha(value, locale) {
    return validator.isAlpha(value);
  },
  negative(value) {
    return numeral(value).value() > -1;
  }
};

module.exports = validation;
