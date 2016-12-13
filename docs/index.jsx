/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'purecss/build/pure.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Aztec } from './../src';
import './jsoneditor.min.css';
import '../style.css';
import './main.css';
import demoMUI from './pages/demo-mui';
import textfield from './pages/textfield';
import selectfield from './pages/selectfield';
import checkbox from './pages/checkbox';
import radio from './pages/radio';
import toggle from './pages/toggle';
import datepicker from './pages/datepicker';
import timepicker from './pages/timepicker';
import autocomplete from './pages/autocomplete';
import layout from './pages/layout';
import validation from './pages/validation';
import playground from './pages/playground';

// Needed for onTouchTap
injectTapEventPlugin();

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {
  ReactDOM
};
const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
const project = `${USER}/${NAME}`; // eslint-disable-line no-undef
const pages = [
  {
    path: '/',
    title: 'Introduction',
    component: require('../README.md')
  },
  {
    path: '/simpleform',
    title: 'Simple Form',
    component: demoMUI
  },
  {
    path: '/textfield',
    title: 'Textfield',
    component: textfield
  },
  {
    path: '/selectfield',
    title: 'Selectfield',
    component: selectfield
  },
  {
    path: '/checkbox',
    title: 'Checkbox',
    component: checkbox
  },
  {
    path: '/radio',
    title: 'Radio',
    component: radio
  },
  {
    path: '/toggle',
    title: 'Toggle',
    component: toggle
  },
  {
    path: '/datepicker',
    title: 'Datepicker',
    component: datepicker
  },
  {
    path: '/timepicker',
    title: 'Timepicker',
    component: timepicker
  },
  {
    path: '/autocomplete',
    title: 'Autocomplete',
    component: autocomplete
  },
  {
    path: '/layout',
    title: 'Layout',
    component: layout
  },
  {
    path: '/validation',
    title: 'Validation',
    component: validation
  },
  {
    path: '/playground',
    title: 'Playground',
    component: playground
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <GithubCorner
        href={`https://github.com/${project}`}
        bannerColor="#1F2532"
        octoColor="#f36"
        width={80}
        height={80}
        direction="right"
      />
      <Catalog
        imports={documentationImports}
        pages={pages}
        specimens={{
          javascript: props => <CodeSpecimen {...props} lang="javascript" />,
          js: props => <CodeSpecimen {...props} lang="javascript" />,
          jsx: props => <ReactSpecimen {...props} />
        }}
        title={title}
      />
    </div>
  </MuiThemeProvider>,
  document.getElementById('app')
);
