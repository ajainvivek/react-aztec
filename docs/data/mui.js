const mui = [
  {
    id: 1,
    type: 'textfield',
    props: {
      id: 'text-field-default',
      floatingLabelText: 'Username',
      hintText: 'Enter Userame...'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          value: true
        }
      ],
      bot: {}
    }
  }, {
    id: 2,
    type: 'textfield',
    props: {
      id: 'text-field-default-2',
      hintText: 'Enter Mobile Number...',
      defaultValue: 'XXX-XXX-XXXX',
      floatingLabelText: 'Mobile Number'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          value: true
        }
      ],
      bot: {}
    }
  }, {
    id: 3,
    type: 'textfield',
    props: {
      id: 'password-field',
      hintText: 'Enter Password...',
      floatingLabelText: 'Password',
      type: 'password'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          value: true
        }
      ],
      bot: {}
    }
  }
];

export default mui;
