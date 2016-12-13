import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import JSONTree from 'react-json-tree';
import Highlight from 'react-highlight';
import 'highlight.js/styles/zenburn.css';
import * as MUI from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SplitPane from 'react-split-pane';
import { Aztec } from './../../src';
import JSONEditor from './../jsoneditor.min';
import JSONData from './../data/sample';

let editor = null;
let container = null;

const styles = {
  imageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
};

/** Demo Component */
class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      mode: 'tree',
      editor: null,
      data: JSONData,
      preview: false
    };
    this.switchMode = this.switchMode.bind(this);
    this.onSave = this.onSave.bind(this);
    this.importJSON = this.importJSON.bind(this);
    this.exportJSON = this.exportJSON.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }
  componentDidMount() {
    // create the editor
    container = document.getElementById('jsoneditor');
    const options = {
      onChange: () => {
        this.updateData();
      }
    };
    editor = new JSONEditor(container, options);

    editor.set(this.state.data);
  }
  updateData() {
    const data = editor.get();
    this.setState({
      data
    });
  }
  importJSON(event) {
    if (event.target.files && event.target.files[0]) {
      const fileTypes = ['json'];  // acceptable file types
      const extension = event.target.files[0].name.split('.').pop().toLowerCase();  // file extension from input file
      const isSuccess = fileTypes.indexOf(extension) > -1;  // is extension in acceptable types

      if (isSuccess) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const obj = JSON.parse(evt.target.result);
          editor.set(obj);
          this.setState({
            data: obj
          });
        };
        reader.readAsText(event.target.files[0]);
      } else {
        alert('unsuported file format!!!');
      }
    }
  }
  exportJSON(){
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    const data = editor.get();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], {
      type: 'application/json'
    });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'schema.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  switchMode() {
    const mode = editor.getMode();
    if (mode === 'tree') {
      editor.setMode('text');
      this.setState({
        mode: 'text'
      });
    } else {
      editor.setMode('tree');
      this.setState({
        mode: 'tree'
      });
    }
  }
  onSave() {
    alert('not yet implemented!!!');
  }
  toggleView() {
    this.setState({
      preview: !this.state.preview
    });
  }
  renderSplitPane() {
    return (
      <SplitPane defaultSize={400}>
        <div className="jsoneditor">
          <div id="jsoneditor" className="pull-left">{}</div>
          <div className="btn-wrapper">
            <FlatButton
              label="Import JSON"
              labelPosition="before"
              className="export"
              primary
            >
              <input type="file" style={styles.imageInput} onChange={this.importJSON} />
            </FlatButton>
            <FlatButton
              label="Export JSON"
              className="export"
              primary
              onTouchTap={this.exportJSON}
            />
            <FlatButton
              label={`Switch to ${(this.state.mode === 'tree') ? 'text' : 'tree'}`}
              primary
              onTouchTap={this.switchMode}
            />
          </div>
        </div>
        <div className="aztec-wrapper">
          <AppBar
            title="React Aztec Playground"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementLeft={<IconButton>{}</IconButton>}
            iconElementRight={<FlatButton label="Preview" onTouchTap={this.toggleView} />}
          />
          <div className="aztec-container">
            <Aztec data={this.state.data} library={MUI} />
          </div>
        </div>
      </SplitPane>
    )
  }
  renderPreviewMode() {
    return (
      <div className="aztec-wrapper">
        <AppBar
          title="React Aztec Playground"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementLeft={<IconButton>{}</IconButton>}
          iconElementRight={<FlatButton label="Switch to Edit Mode" onTouchTap={this.toggleView} />}
        />
        <div className="aztec-container">
          <Aztec data={this.state.data} library={MUI} />
        </div>
      </div>
    )
  }
  render() {
    return (
      <Page>
        <Drawer open={this.state.open} containerStyle={{
          width: '100%',
          display: 'table'
        }}>
          <div className={`${this.state.preview ? 'show':'hide'}`}>
            {this.renderPreviewMode()}
          </div>
          <div className={`${this.state.preview ? 'hide':'show'}`}>
            {this.renderSplitPane()}
          </div>
        </Drawer>
      </Page>
    );
  }
}

export default Playground;
