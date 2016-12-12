const mui = [
  {
    id: 'caseinsensitive',
    type: 'autocomplete',
    props: {
      id: 'caseinsensitive',
      floatingLabelText: 'Type r, case insensitive',
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
    }
  }
];

export default mui;
