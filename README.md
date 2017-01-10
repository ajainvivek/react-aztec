<h1 align="center">
  <img src="http://i.imgur.com/cNIJLXW.png" alt="react-aztec" width="200">
  <br>
  <br>
</h1>

[![GitHub issues](https://img.shields.io/github/issues/ajainvivek/react-aztec.svg)](https://github.com/ajainvivek/react-aztec/issues)
[![npm version](https://img.shields.io/npm/v/react-aztec.svg?style=flat)](https://www.npmjs.com/package/react-aztec)

Build dynamic forms using Material UI

> Check demo & detail docs [Documentation](http://ajainvivek.github.io/react-aztec/#/simpleform)

> Build dynamic forms using interactive editor [Playground](http://ajainvivek.github.io/react-aztec/#/playground)

## Installation

`npm install material-ui --save`
`npm install react-aztec --save`

### Basic Usage

Refer [Material-UI](http://www.material-ui.com/) documentation for components props

```javascript
import { TextField } as MUI from 'material-ui';
import { Aztec } from 'react-aztec';

const formData = [
  {
    id: "name",
    type: 'textfield',
    props: {
      id: 'name',
      floatingLabelText: 'Hello, Whats your name?',
      hintText: 'Name is required'
    }
  }  
];

class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <Aztec data={formData} library={MUI} />
      </div>
    )
  }
}
```

### Usage with form validation

```javascript
import * as MUI from 'material-ui';
import { Aztec } from 'react-aztec';

const formData = [
  {
    id: "name",
    type: 'textfield',
    props: {
      id: 'name',
      floatingLabelText: 'Hello, Whats your name?',
      hintText: 'Name is required'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory', //email, lowercase, mobile
          message: 'Name is required!!' // on error message to be displayed
        }
      ]
    }
  }  
];

class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <Aztec data={formData} library={MUI} />
      </div>
    )
  }
}
```

### Usage with form layout

Aztec uses bootstrap 24 column grid layout

```javascript
import * as MUI from 'material-ui';
import { Aztec } from 'react-aztec';

const formData = [
  {
    id: "name",
    type: 'textfield',
    props: {
      id: 'name',
      floatingLabelText: 'Hello, Whats your name?',
      hintText: 'Name is required'
    },
    layout: {
      row: 1,
      xs: {
        col:24
      },
      sm: {
        col:24
      },
      md: {
        col:12
      },
      lg: {
        col:8
      }
    }
  }  
];

class SimpleForm extends React.Component {
  render() {
    return (
      <div>
        <Aztec data={formData} library={MUI} />
      </div>
    )
  }
}
```


## License

MIT
