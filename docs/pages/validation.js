import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import 'highlight.js/styles/zenburn.css';
import * as MUI from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

/* eslint-disable */
class Validation extends React.Component {
  constructor(props) {
    super(props);
  }
  onUpdate(...args) {
  }
  render() {
    return (
      <Page>
        <p>List of validation rules available</p>

        <hr />

        <div className="codeblock">
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Rule</TableHeaderColumn>
                <TableHeaderColumn>JSON Input</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  mandatory
                </TableRowColumn>
                <TableRowColumn>
                {`{
                  rule: 'mandatory',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the field is empty
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  email
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'email',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is an email
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  equals
                </TableRowColumn>
                <TableRowColumn style={{ 'white-space': 'normal' }}>
                  {`{
                    rule: 'equals',
                    message: 'error message',
                    value: 'comparsion value'
                  }` }
                </TableRowColumn>
                <TableRowColumn>
                  check if the string matches the comparison
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  mobile
                </TableRowColumn>
                <TableRowColumn style={{ 'white-space': 'normal' }}>
                  {`{
                    rule: 'mobile',
                    message: 'error message',
                    value: 'locale'
                  }`}
                </TableRowColumn>
                <TableRowColumn style={{ 'white-space': 'normal' }}>
                  {`check if the string is a mobile phone number, (locale is one of ['ar-DZ', 'ar-SA', 'ar-SY', 'cs-CZ', 'de-DE', 'da-DK', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-CA', 'en-ZA', 'en-ZM', 'es-ES', 'fi-FI', 'fr-FR', 'hu-HU', 'it-IT', 'ja-JP', 'ms-MY', 'nb-NO', 'nn-NO', 'pl-PL', 'pt-PT', 'ru-RU', 'sr-RS', 'tr-TR', 'vi-VN', 'zh-CN', 'zh-TW'])`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  lowercase
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'lowercase',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is lowercase
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  uppercase
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'uppercase',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is uppercase
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  length
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'length',
                  message: 'error message',
                  value: {min: 4, max: 10}
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string's length falls in a range. options is an object which defaults to {min:0, max: undefined}`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  url
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'url',
                  message: 'error message',
                  value: 'options'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string is an URL. options is an object which defaults to { protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, require_host: true, require_valid_protocol: true, allow_underscores: false, host_whitelist: false, host_blacklist: false, allow_trailing_dot: false, allow_protocol_relative_urls: false }`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  creditcard
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'creditcard',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a credit card
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  currency
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'currency',
                  message: 'error message',
                  value: 'options'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string is a valid currency amount. options is an object which defaults to {symbol: '$', require_symbol: false, allow_space_after_symbol: false, symbol_after_digits: false, allow_negatives: true, parens_for_negatives: false, negative_sign_before_digits: false, negative_sign_after_digits: false, allow_negative_sign_placeholder: false, thousands_separator: ',', decimal_separator: '.', allow_space_after_digits: false }`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  date
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'date',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a date
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  boolean
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'boolean',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if a string is a boolean
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  alphanumeric
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'alphanumeric',
                  message: 'error message',
                  value: 'locale'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string contains only letters and numbers. Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fr-BE', 'hu-HU', 'nl-BE', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sr-RS', 'sr-RS@latin', 'tr-TR', 'uk-UA']) and defaults to en-US`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  contains
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'contains',
                  message: 'error message',
                  value: 'seed'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string contains the seed
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  FQDN
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'FQDN',
                  message: 'error message',
                  value: 'options'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string is a fully qualified domain name (e.g. domain.com). options is an object which defaults to { require_tld: true, allow_underscores: false, allow_trailing_dot: false }`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  float
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'float',
                  message: 'error message',
                  value: 'options'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string is a float. options is an object which can contain the keys min, max, gt, and/or lt to validate the float is within boundaries (e.g. { min: 7.22, max: 9.55 }). min and max are equivalent to 'greater or equal' and 'less or equal', respectively while gt and lt are their strict counterparts.`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  ip
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'ip',
                  message: 'error message',
                  value: 'version'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is an IP (version 4 or 6)
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  MACAddress
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'MACAddress',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a MAC address.
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  MD5
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'MD5',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a MD5 hash.
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  numeric
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'numeric',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string contains only numbers
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  negative
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'negative',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a negative number
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  UUID
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'UUID',
                  message: 'error message',
                  value: 'version'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a UUID (version 3, 4 or 5)
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  matches
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'matches',
                  message: 'error message',
                  value: 'pattern'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  {`check if string matches the pattern (eg. /foo/i)`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  int
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'int',
                  message: 'error message',
                  value: 'options'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string is an integer. options is an object which can contain the keys min and/or max to check the integer is within boundaries (e.g. { min: 10, max: 99 }). options can also contain the key allow_leading_zeroes, which when set to false will disallow integer values with leading zeroes (e.g. { allow_leading_zeroes: false }). Finally, options can contain the keys gt and/or lt which will enforce integers being greater than or less than, respectively, the value provided (e.g. {gt: 1, lt: 4} for a number between 1 and 4)`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  hexcolor
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'hexcolor',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a hexadecimal color
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  dataURI
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'dataURI',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn>
                  check if the string is a data uri format.
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  decimal
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'decimal',
                  message: 'error message'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string represents a decimal number, such as 0.1, .3, 1.1, 1.00003, 4.0, etc.`}
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  alpha
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                {`{
                  rule: 'alpha',
                  message: 'error message',
                  value: 'locale'
                }`}
                </TableRowColumn>
                <TableRowColumn style={{'white-space': 'normal'}}>
                  {`check if the string contains only letters (a-zA-Z). Locale is one of ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'cs-CZ', 'da-DK', 'de-DE', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'hu-HU', 'nl-NL', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sr-RS', 'sr-RS@latin', 'tr-TR', 'uk-UA']) and defaults to en-US.`}
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Page>
    );
  }
}

export default Validation;
