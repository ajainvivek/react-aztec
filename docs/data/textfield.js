const mui = [
  {
    id: 'simple',
    type: 'textfield',
    props: {
      id: 'simple',
      floatingLabelText: 'Simple Textfield',
      hintText: 'Name is required',
      value: ''
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          message: 'Name is required!!'
        }
      ]
    }
  },
  {
    id: 'multiline',
    type: 'textfield',
    props: {
      id: 'multiline',
      hintText: 'MultiLine with rows: 2 and rowsMax: 4',
      multiLine: true,
      rows: 2,
      rowsMax: 4
    }
  },
  {
    id: 'disabled',
    type: 'textfield',
    props: {
      id: 'disabled',
      hintText: 'Disabled Value',
      disabled: true
    }
  },
  {
    id: 'fullwidth',
    type: 'textfield',
    props: {
      id: 'fullwidth',
      hintText: 'Full width',
      fullWidth: true
    }
  },
  {
    id: 'email',
    type: 'textfield',
    props: {
      id: 'email',
      floatingLabelText: 'Email with validation',
      hintText: 'Enter valid email'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          message: 'Email is required!!'
        },
        {
          rule: 'email',
          message: 'Invalid email'
        }
      ]
    }
  },
  {
    id: 'mobile',
    type: 'textfield',
    props: {
      id: 'mobile',
      floatingLabelText: 'AUS - Mobile Number',
      hintText: 'eg. 0412345678'
    },
    rules: {
      validation: [
        {
          rule: 'mobile',
          message: 'Invalid Australian mobile number!!',
          value: 'en-AU'
        }
      ]
    }
  },
  {
    id: 'currency',
    type: 'textfield',
    props: {
      id: 'currency',
      floatingLabelText: 'Currency',
      hintText: 'eg. $423'
    },
    formatter: {
      type: 'number',
      expression: '$0,0.00'
    },
    rules: {
      validation: [
        {
          rule: 'negative',
          message: 'Currency cannot be negative!!'
        }
      ]
    }
  },
  {
    id: 'percentage',
    type: 'textfield',
    props: {
      id: 'percentage',
      floatingLabelText: 'Percentage',
      hintText: 'eg. 10%',
      value: 100
    },
    formatter: {
      type: 'number',
      expression: '0%',
      func: {
        unformat: {
          name: 'multiply', // add || multiply || divide || subtract
          value: 100
        },
        format: {
          name: 'divide',
          value: 100
        }
      }
    }
  }
];

export default mui;
