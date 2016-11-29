const mui = [
  {
    id: 1,
    type: 'textfield',
    props: {
      id: 'text-field-default',
      floatingLabelText: 'Username',
      hintText: 'Enter Userame...'
    },
    layout: {
      row: 1,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 12
      },
      lg: {
        col: 8
      }
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
    layout: {
      row: 1,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 12
      },
      lg: {
        col: 8
      }
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
    layout: {
      row: 2,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 12
      },
      lg: {
        col: 8
      }
    },
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
    id: 8,
    type: 'radio',
    props: {
      name: 'shipSpeed',
      defaultSelected: 'not_light'
    },
    layout: {
      row: 2,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 12
      },
      lg: {
        col: 8
      }
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
    layout: {
      row: 3,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 12
      },
      lg: {
        col: 8
      }
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
