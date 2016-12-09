const mui = [
  {
    id: 1,
    type: 'textfield',
    props: {
      id: 'name',
      floatingLabelText: 'Hello, Whats your name?',
      hintText: 'Name is required'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          message: 'Name is required!!'
        }
      ]
    }
  }, {
    id: 2,
    type: 'textfield',
    props: {
      id: 'mobile',
      hintText: 'eg. 0411111111',
      defaultValue: '',
      floatingLabelText: 'Whats your mobile number?'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          message: 'Please fill the field'
        },
        {
          rule: 'mobile',
          message: 'Should be Australian number',
          value: 'en-AU'
        }
      ]
    }
  }, {
    id: 3,
    type: 'radio',
    props: {
      name: 'gender',
      defaultSelected: 'male',
      title: 'Whats your gender?',
      titleStyle: {
        color: 'rgb(175, 175, 175)'
      },
      style: {
        marginTop: '30px'
      }
    },
    options: [
      {
        value: 'male',
        label: 'Male'
      },
      {
        value: 'female',
        label: 'Female'
      },
      {
        value: 'other',
        label: 'Other'
      }
    ]
  }, {
    id: 5,
    type: 'textfield',
    props: {
      id: 'email',
      hintText: 'eg. abc@xyz.com',
      floatingLabelText: 'Whats your personal email?',
      type: 'email'
    },
    rules: {
      isDisplayText: true,
      validation: [
        {
          rule: 'email',
          message: 'Please enter valid email!!'
        }
      ]
    }
  }, {
    id: 6,
    type: 'selectfield',
    props: {
      id: 'locations',
      floatingLabelText: 'Which of these places is capital of Australia?',
      selected: 'Sydney',
      style: {
        width: '400px'
      }
    },
    options: [
      {
        value: 'Sydney',
        primaryText: 'Sydney'
      },
      {
        value: 'Melbourne',
        primaryText: 'Melbourne'
      },
      {
        value: 'Adelaide',
        primaryText: 'Adelaide'
      },
      {
        value: 'Canberra',
        primaryText: 'Canberra'
      }
    ],
    rules: {
      validation: [
        {
          rule: 'equals',
          value: 'Sydney',
          message: 'Your answer is incorrect. Try again!!!'
        }
      ]
    }
  },
  {
    id: 7,
    type: 'checkbox',
    props: {
      id: 'hobbies',
      title: 'What are your hobbies?',
      titleStyle: {
        color: 'rgb(175, 175, 175)'
      },
      style: {
        marginTop: '30px'
      }
    },
    options: [
      {
        label: 'Singing',
        defaultChecked: true
      },
      {
        label: 'Dancing',
        defaultChecked: false
      },
      {
        label: 'Cycling',
        defaultChecked: false
      }
    ]
  },
  {
    id: 7,
    type: 'toggle',
    props: {
      id: 'aztec',
      style: {
        marginTop: '30px'
      }
    },
    options: [
      {
        label: 'Are you loving react-aztec?',
        defaultToggled: true
      },
      {
        label: 'Do you love react?',
        defaultToggled: false
      }
    ]
  },
  {
    id: 8,
    type: 'datepicker',
    props: {
      id: 'dob',
      hintText: 'Hey Lucky, What is your date of birth?',
      style: {
        marginTop: '30px',
        width: '100%'
      }
    }
  },
  {
    id: 9,
    type: 'timepicker',
    props: {
      id: 'wakeup',
      hintText: 'When do you wake up in the morning?',
      style: {
        marginTop: '30px',
        width: '100%'
      }
    }
  },
  {
    id: 10,
    type: 'autocomplete',
    props: {
      id: 'color',
      floatingLabelText: 'What is your favorite color?',
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
      filter: 'caseInsensitiveFilter',
      style: {
        marginBottom: '30px'
      }
    }
  }
];

export default mui;
