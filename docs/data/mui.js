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
          message: 'Name is required!!'
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
          message: 'Please fill the field'
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
      defaultSelected: 'not_light',
      style: {
        marginTop: '10px'
      }
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
  }, {
    id: 6,
    type: 'selectfield',
    props: {
      id: 'select-field',
      floatingLabelText: 'Frequency',
      selected: 'Never',
      style: {
        width: '100%'
      }
    },
    options: [
      {
        value: 'Never',
        primaryText: 'Never'
      },
      {
        value: 'Every Night',
        primaryText: 'Every Night'
      }
    ],
    layout: {
      row: 4,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 24
      },
      lg: {
        col: 24
      }
    },
    rules: {
      validation: [
        {
          rule: 'equals',
          value: 'Never',
          message: 'Frequency should be equal to Never'
        }
      ],
      bot: {}
    }
  },
  {
    id: 7,
    type: 'checkbox',
    props: {
      id: 'checkbox-field',
      style: {
        width: '100%'
      }
    },
    options: [
      {
        label: 'Science',
        defaultChecked: true
      },
      {
        label: 'Maths',
        defaultChecked: false
      }
    ],
    layout: {
      row: 5,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 24
      },
      lg: {
        col: 24
      }
    },
    rules: {
      validation: [
      ],
      bot: {}
    }
  },
  {
    id: 7,
    type: 'toggle',
    props: {
      id: 'toggle-field',
      style: {
        width: '100%'
      }
    },
    options: [
      {
        label: 'Gender',
        defaultToggled: true
      },
      {
        label: 'Private',
        defaultToggled: false
      }
    ],
    layout: {
      row: 6,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 24
      },
      lg: {
        col: 24
      }
    },
    rules: {
      validation: [
      ],
      bot: {}
    }
  },
  {
    id: 8,
    type: 'datepicker',
    props: {
      id: 'datepicker-field',
      hintText: 'Portrait Dialog'
    },
    layout: {
      row: 6,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 24
      },
      lg: {
        col: 24
      }
    },
    rules: {
      validation: [
      ],
      bot: {}
    }
  },
  {
    id: 9,
    type: 'timepicker',
    props: {
      id: 'timepicker-field',
      hintText: '12hr Format'
    },
    layout: {
      row: 6,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 24
      },
      lg: {
        col: 24
      }
    },
    rules: {
      validation: [
      ],
      bot: {}
    }
  },
  {
    id: 10,
    type: 'autocomplete',
    props: {
      id: 'autocomplete-field',
      floatingLabelText: 'Type "r", case insensitive',
      dataSource: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple',
        'Black',
        'White'
      ],
      filter: 'caseInsensitiveFilter'
    },
    layout: {
      row: 6,
      xs: {
        col: 24,
        hide: true
      },
      sm: {
        col: 24
      },
      md: {
        col: 24
      },
      lg: {
        col: 24
      }
    },
    rules: {
      validation: [
      ],
      bot: {}
    }
  }
];

export default mui;
