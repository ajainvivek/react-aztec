import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import 'highlight.js/styles/zenburn.css';
import * as MUI from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import { Aztec } from './../../src';
import JSONEditor from './../jsoneditor.min';
import JSONData from './../data/simpleform';

let editor = null;
let container = null;

/** Demo Component */
class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      mode: 'tree',
      editor: null
    };
    this.switchMode = this.switchMode.bind(this)
  }
  componentDidMount() {
    // create the editor
    container = document.getElementById('jsoneditor');
    const options = {
      onChange: () => {
        console.log('tet')
      }
    };
    editor = new JSONEditor(container, options);

    editor.set(JSONData);
  }
  switchMode() {
    let options = {};
    const mode = this.state.mode;
    if (mode === 'tree') {
      editor.destroy();
      options = {
        mode: 'text',
        indentation: 2
      };
      editor = new JSONEditor(container, options);
      editor.set(JSONData);
      this.setState({
        mode: 'text'
      });
    } else {
      editor.destroy();
      options = {
        mode: 'tree',
        search: true
      };
      editor = new JSONEditor(container, options);
      editor.set(JSONData);
      this.setState({
        mode: 'tree'
      });
    }
  }
  render() {
    return (
      <Page>
        <Drawer open={this.state.open} containerStyle={{
          width: '100%',
          display: 'table'
        }}>
          <div className="playground-container">
            <div id="jsoneditor" className="pull-left">{}</div>
            <div className="aztec-container">
              <Aztec data={JSONData} library={MUI} />
            </div>
          </div>
          <FlatButton
            label="Import JSON"
            className="export"
            primary
          />
          <FlatButton
            label="Export JSON"
            className="export"
            primary
          />
          <FlatButton
            label={`Switch mode`}
            primary
            onTouchTap={this.switchMode}
          />
        </Drawer>
      </Page>
    );
  }
}

export default Playground;
