import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { Aztec } from './../../src';
import FormData from './../data/mui';


/** Demo Component */
class Demo extends React.Component {
  componentDidMount() {
  }
  render() {
    console.log(FormData)
    return (
      <Page>
        <h2>Dynamic Forms</h2>

        <hr />

        <div className="full-width codedemo row">
          <div className="col-md-24">
            <Aztec data={FormData} library="MUI" />
          </div>
        </div>

        <div className="codeblock">
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Component</TableHeaderColumn>
                <TableHeaderColumn>JSON Schema</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>
                  <div className="syntax">
                    <SyntaxHighlighter language="html" style={docco}>{`<Aztec data={FormData} library='MUI'/>`}</SyntaxHighlighter>
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
