const mui = [
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
        defaultChecked: false
      },
      {
        label: 'Dancing',
        defaultChecked: true
      },
      {
        label: 'Cycling',
        defaultChecked: false
      },
      {
        label: 'Skiing',
        defaultChecked: false,
        disabled: true
      },
      {
        label: 'Reading',
        defaultChecked: true,
        disabled: true
      }
    ]
  }
];

export default mui;
