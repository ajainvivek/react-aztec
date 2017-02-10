import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import 'highlight.js/styles/zenburn.css';
import * as MUI from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { Aztec } from './../../src';
import JSONData from './../data/simpleform';


/** Demo Component */
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: JSONData,
      response: '',
      errors: '',
      displayFormErrors: false
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.triggerSubmit = this.triggerSubmit.bind(this);
  }
  onUpdate(...args) {
    console.log(...args);
  }
  onSubmit(response, errors, formData) {
    this.setState({
      response: JSON.stringify(response, null, 2),
      errors: JSON.stringify(errors, null, 2),
      formData,
      displayFormErrors: true
    });
  }
  triggerSubmit(data) {
    this.formRef.click();
  }
  render() {
    const sourceCode = `
import { Aztec } from 'react-aztec';
import * as MUI from 'material-ui';
// Refer JSON data on the right side column
import JSONData from 'src/path';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: JSONData,
      displayFormErrors: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.triggerSubmit = this.triggerSubmit.bind(this);
  }
  onSubmit(response, errors, formData) {
    this.setState({
      formData, //!important to reset the formData to retain the updated form values on UI
      displayFormErrors: true //To display field errors
    });
  }
  triggerSubmit(data) {
    this.formRef.click();
  }
  render() {
    return (
      <div>
        <Aztec
          guid="simple-form" //mandatory unique id
          data={this.state.formData}
          displayErrors={this.state.displayFormErrors} //Displays only mandatory field errors
          library={MUI}
          forceUpdate={false} //Default(false) -> Force update the form data
          patch={{ 1 : 'Patched Name' }} //pass patch to update the data partially {"1": "Name"}
          onChange={this.onUpdate}
          formRef={
            (form) => {
              this.formRef = form;
            }
          }
          onSubmit={this.onSubmit}
        />
        <button onClick={this.triggerSubmit}>Submit</button>
      </div>
    )
  }
}
    `
    return (
      <Page>
        <p>Hey stranger, I wanna get to know you better!</p>

        <hr />

        <div className="full-width codedemo row">
          <div className="col-md-12">
            <Aztec
              data={this.state.formData}
              guid="simple-form"
              library={MUI}
              onChange={this.onUpdate}
              patch={{ 1: 'Patched Name' }}
              displayErrors={this.state.displayFormErrors}
              formRef={
                (form) => {
                  this.formRef = form;
                }
              }
              onSubmit={this.onSubmit}
            />
            <RaisedButton label="Complete Survey" primary onClick={this.triggerSubmit} />
          </div>
          <div className="col-md-12">
            <h4>Refer the response on submit</h4>
            <h4 style={{ color: 'green' }}>Response Form Data</h4>
            <div style={{ fontSize: '14px', color: '#7f7d7d' }}>
              <pre>
                {this.state.response || '<>'}
              </pre>
            </div>
            <h4 style={{ color: 'red' }}>Errors</h4>
            <div style={{ fontSize: '14px', color: '#7f7d7d' }}>
              <pre>
                {this.state.errors || '<>'}
              </pre>
            </div>
          </div>
        </div>

        <div className="codeblock">
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Source Code</TableHeaderColumn>
                <TableHeaderColumn>JSON Schema</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>
                  <div className="syntax">
                    <Highlight className="javascript">
                      {sourceCode}
                    </Highlight>
                  </div>
                </TableRowColumn>
                <TableRowColumn>
                  <JSONTree data={JSONData} />
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Page>
    );
  }
}

export default Demo;
