import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import 'highlight.js/styles/zenburn.css';
import * as MUI from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { Aztec } from './../../src';
import FormData from './../data/mui';


/** Demo Component */
class Demo extends React.Component {
  componentDidMount() {
  }
  render() {
    const sourceCode = `
import * as MUI from 'material-ui';
// Refer JSON data on the right side column
import FormData from 'src/path';

class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <Aztec data={FormData} library={MUI}/>
      </div>
    )
  }
}
    `
    return (
      <Page>
        <h2>Hey stranger, I wanna get to know you better!</h2>

        <hr />

        <div className="full-width codedemo row">
          <div className="col-md-24">
            <Aztec data={FormData} library={MUI} />
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
                  <JSONTree data={FormData} />
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
