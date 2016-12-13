/* eslint-disable */
const mui = [
  {
    "id": "1",
    "type": "selectfield",
    "visible": true,
    "props": {
      "id": "NameTitle",
      "floatingLabelText": "Title",
      "fullWidth": true,
      "style": {
        "display": "table"
      }
    },
    "options": [
      {
        "value": null,
        "primaryText": ""
      },
      {
        "value": "Mr",
        "primaryText": "Mr"
      },
      {
        "value": "Mrs",
        "primaryText": "Mrs"
      },
      {
        "value": "Ms",
        "primaryText": "Ms"
      },
      {
        "value": "Miss",
        "primaryText": "Miss"
      }
    ],
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Please select a title."
        }
      ]
    },
    "layout": {
      "row": 1,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 3
      },
      "lg": {
        "col": 3
      }
    }
  },
  {
    "id": "2",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "FirstName",
      "floatingLabelText": "First Name",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Please enter your first name."
        }
      ]
    },
    "layout": {
      "row": 1,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 7
      },
      "lg": {
        "col": 7
      }
    }
  },
  {
    "id": "3",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "Surname",
      "floatingLabelText": "Surname",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Please enter your surname name."
        }
      ]
    },
    "layout": {
      "row": 1,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 7
      },
      "lg": {
        "col": 7
      }
    }
  },
  {
    "id": "4",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "Surname",
      "floatingLabelText": "Last Name",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Please enter your last name."
        }
      ]
    },
    "layout": {
      "row": 1,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 7
      },
      "lg": {
        "col": 7
      }
    }
  },
  {
    "id": "4.1",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "lookup-address",
      "floatingLabelText": "Lookup address",
      "fullWidth": true
    },
    "layout": {
      "row": 2,
      "xs": {
        "col": 24
      },
      "sm": {
        "col": 24
      },
      "md": {
        "col": 24
      },
      "lg": {
        "col": 24
      }
    }
  },
  {
    "id": "4.2",
    "type": "textfield",
    "visible": false,
    "props": {
      "id": "level",
      "floatingLabelText": "Level",
      "fullWidth": true
    },
    "layout": {
      "row": 3,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 4
      },
      "lg": {
        "col": 4
      }
    }
  },
  {
    "id": "4.6",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "Unit",
      "floatingLabelText": "Unit No",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Field is mandatory"
        }
      ]
    },
    "layout": {
      "row": 3,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 4
      },
      "lg": {
        "col": 4
      }
    }
  },
  {
    "id": "4.7",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "street-no",
      "floatingLabelText": "Street No",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Field is mandatory"
        }
      ]
    },
    "layout": {
      "row": 3,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 4
      },
      "lg": {
        "col": 4
      }
    }
  },
  {
    "id": "4.7",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "street-name",
      "floatingLabelText": "Street Name",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "Field is mandatory"
        }
      ]
    },
    "layout": {
      "row": 3,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 12
      },
      "lg": {
        "col": 12
      }
    }
  },
  {
    "id": "10",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "StreetType",
      "floatingLabelText": "Street Type",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "This value cannot be empty."
        }
      ]
    },
    "layout": {
      "row": 4,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 6
      },
      "lg": {
        "col": 6
      }
    }
  },
  {
    "id": "11",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "Suburb",
      "floatingLabelText": "Suburb",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "This value cannot be empty."
        }
      ]
    },
    "layout": {
      "row": 4,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 6
      },
      "lg": {
        "col": 6
      }
    }
  },
  {
    "id": "12",
    "type": "selectfield",
    "visible": true,
    "props": {
      "id": "AustralianState",
      "floatingLabelText": "State",
      "fullWidth": true,
      "style": {
        "display": "table"
      }
    },
    "options": [
      {
        "value": "NSW",
        "primaryText": "NSW"
      },
      {
        "value": "VIC",
        "primaryText": "VIC"
      },
      {
        "value": "QLD",
        "primaryText": "QLD"
      }
    ],
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "This value cannot be empty."
        }
      ]
    },
    "layout": {
      "row": 4,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 6
      },
      "lg": {
        "col": 6
      }
    }
  },
  {
    "id": "13",
    "type": "textfield",
    "visible": true,
    "props": {
      "id": "AustralianPostCode",
      "floatingLabelText": "Post Code",
      "fullWidth": true
    },
    "rules": {
      "validation": [
        {
          "rule": "mandatory",
          "message": "This value cannot be empty."
        },
        {
          "rule": "numeric",
          "message": "The value should be number"
        },
        {
          "rule": "length",
          "message": "The length should be 4 only",
          "value": {
            "min": 4,
            "max": 4
          }
        }
      ]
    },
    "layout": {
      "row": 4,
      "xs": {
        "col": 12
      },
      "sm": {
        "col": 12
      },
      "md": {
        "col": 6
      },
      "lg": {
        "col": 6
      }
    }
  }
];

export default mui;
