<h1 align="center">
  <img src="http://i.imgur.com/cNIJLXW.png" alt="react-aztec" width="200">
  <br>
  <br>
</h1>

Build dynamic forms using Material UI

> Check demo [React-Aztec](http://ajainvivek.github.io/react-aztec/#/simpleform)

## Installation

`npm install react-aztec --save`

### Basic Usage

Refer [Material-UI](http://www.material-ui.com/) documentation for components props

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
