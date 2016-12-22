const mui = [
  {
    id: 1,
    type: 'toggle',
    props: {
      id: 'simple',
      label: 'Simple',
      style: {
        marginTop: '30px'
      }
    }
  },
  {
    id: 2,
    type: 'toggle',
    props: {
      id: 'disabled',
      label: 'Disabled',
      defaultToggled: true,
      disabled: true,
      style: {
        marginTop: '30px'
      }
    }
  },
  {
    id: 3,
    type: 'toggle',
    props: {
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
      },
      style: {
        marginTop: '30px'
      }
    }
  }
];

export default mui;
