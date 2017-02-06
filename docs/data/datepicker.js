const mui = [
  {
    id: 'portrait',
    type: 'datepicker',
    props: {
      id: 'portrait',
      hintText: 'Portrait Dialog',
      value: '01/26/2017'
    }
  },
  {
    id: 'landscape',
    type: 'datepicker',
    props: {
      id: 'landscape',
      hintText: 'Landscape Dialog with clear',
      mode: 'landscape',
      clear: true
    }
  },
  {
    id: 'disabled',
    type: 'datepicker',
    props: {
      id: 'disabled',
      hintText: 'Dialog Disabled',
      disabled: true
    }
  },
  {
    id: 'formatted',
    type: 'datepicker',
    props: {
      id: 'formatted',
      hintText: 'Moment Formatted Date',
      value: '01/26/2017'
    },
    format: 'll'
  },
  {
    id: 'daterange',
    type: 'datepicker',
    props: {
      id: 'formatted',
      hintText: 'Date Range',
      minDate: '01/01/2017',
      maxDate: '' // empty string refers to now
    }
  }
];

export default mui;
