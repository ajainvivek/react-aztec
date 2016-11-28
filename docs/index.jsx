/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen } from 'catalog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MDL from 'react-mdl';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import 'purecss/build/pure.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Aztec } from './../src';
import './main.css';
import '../style.css';
import demoMDL from './pages/demo-mdl';
import demoMUI from './pages/demo-mui';
import MDLData from './data/mdl';
import MUIData from './data/mui';


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
    path: '/mui',
    title: 'Demo using Material UI',
    imports: {
      Aztec,
      MUIData
    },
    component: demoMUI
  },
  {
    path: '/mdl',
    title: 'Demo using Material Design Lite',
    imports: {
      Aztec,
      MDLData
    },
    component: demoMDL
  }
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <GithubCorner
        href={`https://github.com/${project}`}
        bannerColor="#fff"
        octoColor="#000"
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
