/* ------------ Start Data ----------------*/
const introData = [{
  x: 10,
  y: 35,
  text: 'I recently started a bullet journal to keep track of the one million to-do lists and ramblings that'
}, {
  x: 10,
  y: 52,
  text: 'float around my mind on a daily basis. While most people use their bullet journals to keep track'
}, {
  x: 10,
  y: 69,
  text: 'of their daily activities and tasks, I use it more as a way to visualize my thoughts on paper. After'
}, {
  x: 10,
  y: 86,
  text: 'hearing about D3.js, I thought it would be fun to test it out and draw something that resembles'
}, {
  x: 10,
  y: 103,
  text: 'what I would put on a page in my bullet journal. Below is an interactive visualization of all my'
}, {
  x: 10,
  y: 120,
  text: 'travels from 2015 - 2017.'
}];
const descriptionData = [{
  x: 10,
  y: 95,
  text: "For every place I've traveled to, I put down my mood, the city of departure, the city of arrival,"
}, {
  x: 10,
  y: 112,
  text: 'the purpose of my travel (career vs. fun), and my travel companions (mom, dad, significant other,'
}, {
  x: 10,
  y: 129,
  text: "and friends). Hover over the months below to see all the places I've visited. Happy decoding! :)"
}];
const moodData = [{
  mood: 'happy',
  color: '#f5e6b5'
}, {
  mood: 'good',
  color: '#e9d9bb'
}, {
  mood: 'meh',
  color: '#ddc7b7'
}, {
  mood: 'sad',
  color: '#d2b5b2'
}];
const departureData = [{
  city: 'Ann Arbor',
  color: '#fc6a64'
}, {
  city: 'Chicago',
  color: '#F5C59D'
}, {
  city: 'New York',
  color: '#cfd673'
}];
const arrivalData = [{
  city: 'Ann Arbor',
  state: 'Michigan',
  country: 'United States',
  color: '#fc6a64'
}, {
  city: 'Cancún',
  state: 'Quintana Roo',
  country: 'Mexico',
  color: '#36BCBB'
}, {
  city: 'Chicago',
  state: 'Illinois',
  country: 'United States',
  color: '#F5C59D'
}, {
  city: 'Cincinnati',
  state: 'Ohio',
  country: 'United States',
  color: '#AD7E9B'
}, {
  city: 'Denver',
  state: 'Colorado',
  country: 'United States',
  color: '#7BADAF'
}, {
  city: 'Houston',
  state: 'Texas',
  country: 'United States',
  color: '#EFC4D1'
}, {
  city: 'Los Angeles',
  state: 'California',
  country: 'United States',
  color: '#F0AC47'
}, {
  city: 'New York',
  state: 'New York',
  country: 'United States',
  color: '#cfd673'
}, {
  city: 'Oranjestad',
  country: 'Aruba',
  color: '#B7AF70'
}, {
  city: 'Playa Del Carmen',
  state: 'Quintana Roo',
  country: 'Mexico',
  color: '#F5E4A1'
}, {
  city: 'Portland',
  state: 'Oregon',
  country: 'United States',
  color: '#96806C'
}, {
  city: 'Punta Cana',
  country: 'Dominican Republic',
  color: '#FC955E'
}, {
  city: 'San Francisco',
  state: 'California',
  country: 'United States',
  color: '#c7e0cd'
}, {
  city: 'Seattle',
  state: 'Washington',
  country: 'United States',
  color: '#DDDDDD'
}, {
  city: 'Seoul',
  country: 'Korea',
  color: '#8585B3'
}];
const timelineData = [{
  text: '2015'
}, {
  text: 'FEB MAR'
}, {
  text: 'APR MAY'
}, {
  text: 'JUN JUL'
}, {
  text: 'AUG SEP'
}, {
  text: 'OCT NOV'
}, {
  text: '2016'
}, {
  text: 'FEB MAR '
}, {
  text: 'APR MAY '
}, {
  text: 'JUN JUL '
}, {
  text: 'AUG SEP '
}, {
  text: 'OCT NOV '
}, {
  text: '2017'
}, {
  text: 'FEB MAR  '
}, {
  text: 'APR MAY  '
}, {
  text: 'JUN JUL  '
}, {
  text: 'AUG SEP  '
}, {
  text: 'OCT NOV  '
}, {
  text: '2018'
}];
// path points
const pathData = [{},
  [{
    x: 77,
    y: 440
  }, {
    x: 77,
    y: 410
  }, {
    x: 87,
    y: 410
  }, {
    x: 87,
    y: 383
  }],
  [{
    x: 135,
    y: 525
  }, {
    x: 135,
    y: 555
  }, {
    x: 145,
    y: 555
  }, {
    x: 145,
    y: 582
  }],
  [{
    x: 160,
    y: 440
  }, {
    x: 160,
    y: 400
  }, {
    x: 170,
    y: 400
  }, {
    x: 170,
    y: 350
  }],
  {}, {}, {},
  [{
    x: 370,
    y: 440
  }, {
    x: 370,
    y: 400
  }, {
    x: 380,
    y: 400
  }, {
    x: 380,
    y: 350
  }],
  [{
    x: 435,
    y: 525
  }, {
    x: 435,
    y: 555
  }, {
    x: 425,
    y: 555
  }, {
    x: 425,
    y: 582
  }],
  [{
    x: 472,
    y: 440
  }, {
    x: 472,
    y: 410
  }, {
    x: 482,
    y: 410
  }, {
    x: 482,
    y: 383
  }],
  [{
    x: 517,
    y: 525
  }, {
    x: 517,
    y: 565
  }, {
    x: 507,
    y: 565
  }, {
    x: 507,
    y: 615
  }],
  [{
    x: 568,
    y: 440
  }, {
    x: 568,
    y: 400
  }, {
    x: 578,
    y: 400
  }, {
    x: 578,
    y: 350
  }],
  [{
    x: 626,
    y: 525
  }, {
    x: 626,
    y: 565
  }, {
    x: 636,
    y: 565
  }, {
    x: 636,
    y: 615
  }],
  [{
    x: 675,
    y: 440
  }, {
    x: 675,
    y: 400
  }, {
    x: 685,
    y: 400
  }, {
    x: 685,
    y: 350
  }],
  [{
    x: 697,
    y: 525
  }, {
    x: 697,
    y: 565
  }, {
    x: 707,
    y: 565
  }, {
    x: 707,
    y: 615
  }],
  [{
    x: 756,
    y: 440
  }, {
    x: 756,
    y: 400
  }, {
    x: 766,
    y: 400
  }, {
    x: 766,
    y: 350
  }], {},
  [{
    x: 870,
    y: 440
  }, {
    x: 870,
    y: 410
  }, {
    x: 860,
    y: 410
  }, {
    x: 860,
    y: 383
  }], {}
];
const morePathData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  [{
    x: 550,
    y: 525
  }, {
    x: 550,
    y: 555
  }, {
    x: 560,
    y: 555
  }, {
    x: 560,
    y: 582
  }],
  {}, {}, {},
  [{
    x: 770,
    y: 525
  }, {
    x: 770,
    y: 565
  }, {
    x: 780,
    y: 565
  }, {
    x: 780,
    y: 615
  }], {}, {}, {}, {}
];
const pathColors = [{}, {
    color: '#fb8370'
  }, {
    color: '#fb8370'
  }, {
    color: '#fb8370'
  }, {}, {}, {}, {
    color: '#FCB9A4'
  }, {
    color: '#FDC9B2'
  }, {
    color: '#ECD0BB'
  }, {
    color: '#D1D1BE'
  }, {
    color: '#C0D1BF'
  },
  {
    color: '#9FD2C2'
  }, {
    color: '#87D2C4'
  }, {
    color: '#7CD1C4'
  }, {
    color: '#78C4BA'
  }, {}, {
    color: '#70A9A6'
  }, {}
];

const rectAreaWidth = 940;
const rectangleHeight = 85;

let xMin = 2,
  xMax = 16,
  pos = 0;
/* ------------ End Data ----------------*/
