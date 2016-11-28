const mdl = [
  {
    id: 1,
    name: 'title',
    type: 'textfield',
    props: {
      label: 'Text'
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
      value: 'Male',
      selected: true
    }, {
      id: 2,
      value: 'Female',
      selected: false
    }],
    props: {
      name: 'gender',
      container: 'ul',
      childContainer: 'li'
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
