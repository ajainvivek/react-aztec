const mui = [
  {
    id: 'simple',
    type: 'textfield',
    props: {
      id: 'simple',
      floatingLabelText: 'Simple Textfield',
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
  },
  {
    id: 'email',
    type: 'textfield',
    props: {
      id: 'email',
      floatingLabelText: 'Email with validation',
      hintText: 'Enter valid email'
    },
    rules: {
      validation: [
        {
          rule: 'mandatory',
          message: 'Email is required!!'
        },
        {
          rule: 'email',
          message: 'Invalid email'
        }
      ]
    }
  },
  {
    id: 'mobile',
    type: 'textfield',
    props: {
      id: 'mobile',
      floatingLabelText: 'AUS - Mobile Number',
      hintText: 'eg. 0412345678'
    },
    rules: {
      validation: [
        {
          rule: 'mobile',
          message: 'Invalid Australian mobile number!!',
          value: 'en-AU'
        }
      ]
    }
  },
  {
    id: 'currency',
    type: 'textfield',
    props: {
      id: 'currency',
      floatingLabelText: 'Currency',
      hintText: 'eg. $423'
    },
    rules: {
      validation: [
        {
          rule: 'currency',
          message: 'Invalid Currency!!',
          value: {
            symbol: '$',
            require_symbol: true
          }
        }
      ]
    }
  }
];

export default mui;
