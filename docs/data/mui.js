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
      isDisplayText: true,
      validation: [
        {
          rule: 'mandatory',
          value: true
        }
      ],
      bot: {}
    }
  }, {
    id: 4,
    type: 'radio',
    props: {
      name: 'shipSpeed',
      defaultSelected: 'not_light'
    },
    options: [
      {
        value: 'light',
        label: 'Simple'
      },
      {
        value: 'not_light',
        label: 'Selected by default'
      }
    ],
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
    id: 5,
    type: 'textfield',
    props: {
      id: 'email-field',
      hintText: 'Enter email...',
      floatingLabelText: 'Email',
      type: 'email'
    },
    rules: {
      isDisplayText: true,
      validation: [
        {
          rule: 'email',
          message: 'Please enter valid email'
        }
      ],
      bot: {}
    }
  }
];

export default mui;
