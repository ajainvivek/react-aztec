const mui = [
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
        label: 'Simple'
      },
      {
        label: 'Toggled by default',
        defaultToggled: true
      },
      {
        label: 'Disabled',
        defaultToggled: true,
        disabled: true
      },
      {
        label: 'Styling',
        thumbStyle: {
          backgroundColor: '#ffcccc'
        },
        trackStyle: {
          backgroundColor: '#ff9d9d'
        },
        thumbSwitchedStyle: {
          backgroundColor: 'red'
        },
        trackSwitchedStyle: {
          backgroundColor: '#ff9d9d'
        },
        labelStyle: {
          color: 'red'
        }
      }
    ]
  }
];

export default mui;
