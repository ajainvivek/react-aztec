const mdl = [
  {
    id: 1,
    name: 'title',
    type: 'textfield',
    props: {
      label: 'Text'
    },
    layout: {
      row: 1,
      xs: {
        hide: true
      },
      sm: {
        col: 12
      },
      md: {
        col: 6
      },
      lg: {
        col: 4
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
    name: 'title',
    type: 'textfield',
    props: {
      label: 'Hello World!!'
    },
    layout: {
      row: 1,
      xs: {
        hide: true
      },
      sm: {
        col: 12
      },
      md: {
        col: 6
      },
      lg: {
        col: 4
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
    name: 'title',
    type: 'radio',
    options: [{
      id: 1,
      value: 'Male'
    }, {
      id: 2,
      value: 'Female'
    }],
    props: {
      name: 'gender',
      container: 'ul',
      childContainer: 'li',
      value: 'Female'
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

export default mdl;
