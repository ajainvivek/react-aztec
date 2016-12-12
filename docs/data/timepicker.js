const mui = [
  {
    id: '12hr-format',
    type: 'timepicker',
    props: {
      id: '12hr-format',
      hintText: '12hr Format'
    }
  },
  {
    id: '12hr-format-ok',
    type: 'timepicker',
    props: {
      id: '12hr-format-ok',
      hintText: '12hr Format with auto ok',
      autoOk: true
    }
  },
  {
    id: '24hr-format',
    type: 'timepicker',
    props: {
      id: '24hr-format',
      hintText: '24hr Format',
      format: '24hr'
    }
  },
  {
    id: 'disabled',
    type: 'timepicker',
    props: {
      id: 'disabled',
      hintText: 'Disabled Timepicker',
      format: '24hr',
      disabled: true
    }
  }
];

export default mui;
