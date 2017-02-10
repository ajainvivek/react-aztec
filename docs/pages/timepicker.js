import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import 'highlight.js/styles/zenburn.css';
import * as MUI from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { Aztec } from './../../src';
import JSONData from './../data/timepicker';


/** Demo Component */
class Timepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
    this.onUpdate = this.onUpdate.bind(this);
  }
  onUpdate(...args) {
    const control = args[0];
    const formData = this.state.formData;
    console.log(args)
    if (control.type === 'textfield') {
      formData[control.id] = args[2];
    }
    this.setState({
      formData
    });
  }
  render() {
    const sourceCode = `
import { Aztec } from 'react-aztec';
import * as MUI from 'material-ui';
// Refer JSON data on the right side column
import JSONData from 'src/path';

class Timepicker extends React.Component {
  render() {
    return (
      <div>
        <Aztec
          guid="timepicker"
          data={JSONData}
          library={MUI}
        />
      </div>
    )
  }
}
    `
    return (
      <Page>
        <p>A time picker is used to input a time by displaying an interface the user can interact with.</p>
        <hr />

        <div className="full-width codedemo row">
          <div className="col-md-24">
            <Aztec
              guid="timepicker"
              data={JSONData}
              library={MUI}
              onChange={this.onUpdate}
            />
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

        <div>
          <h4>Notes</h4>
          <p><b>wrapperStyle & closeStyle</b> are additional props added to change the close & wrapper block style.</p>
        </div>
      </Page>
    );
  }
}

export default Timepicker;
