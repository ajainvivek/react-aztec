const mui = [
  {
    id: 'radio',
    type: 'radio',
    props: {
      name: 'gender',
      defaultSelected: 'vikings',
      title: 'What is your favorite series?',
      titleStyle: {
        color: 'rgb(175, 175, 175)'
      },
      style: {
        marginTop: '30px'
      }
    },
    options: [
      {
        value: 'got',
        label: 'Game of thrones'
      },
      {
        value: 'vikings',
        label: 'Vikings'
      },
      {
        value: 'bbt',
        label: 'Big bang theory'
      },
      {
        value: 'friends',
        label: 'Friends',
        disabled: true
      },
      {
        value: 'lk',
        label: 'Last kingdom'
      }
    ]
  }
];

export default mui;
