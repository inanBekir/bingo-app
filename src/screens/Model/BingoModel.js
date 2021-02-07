const topics = 
[
    {
        index:0,
        topicTitle:'Lets do it!',
    }, 
    {
        index:1,
        topicTitle:'Cover Me!',
    }, 
    {
        index:2,
        topicTitle:'You Take the Point',
    }, 
    {
        index:3,
        topicTitle:'Hold This Position!',
    }, 
    {
        index:4,
        topicTitle:'Follow Me!',
    }, 
    {
        index:5,
        topicTitle:'Regroup, Team!',
    }, 
    {
        index:6,
        topicTitle:'Taking Fire, Need Assistance!',
    }, 
    {
        index:7,
        topicTitle: 'GO!',
    }, 
    {
        index:8,
        topicTitle: 'Team, Fall Back!',
    }, 
    {
        index:9,
        topicTitle: 'Hold This Position!',
    }, 
    {
        index:10,
        topicTitle: 'Stick Together, Team',
    }, 
    {
        index:11,
        topicTitle: 'Storm the Front',
    }, 
    {
        index:12,
        topicTitle: 'Get in Position',
    }, 
    {
        index:13,
        topicTitle: 'Fire in the hole',
    }, 
    {
        index:14,
        topicTitle: 'Cheer',
    }, 
    {
        index:15,
        topicTitle: 'Enemy Down',
    }, 
    {
        index:16,
        topicTitle: 'Reporting In',
    }, 
    {
        index:17,
        topicTitle:  'Negative',
    }, 
    {
        index:18,
        topicTitle: 'Im in Position',
    }, 
    {
        index:19,
        topicTitle: 'Need Backup',
    }, 
    {
        index:20,
        topicTitle: 'Enemy Spotted',
    },
    {
        index:21,
        topicTitle: 'Affirmative, Roger',
    },
    {
        index:22,
        topicTitle: 'Thanks',
    },
    {
        index:23,
        topicTitle: 'Compliment, Nice'
    },
    {
        index:24,
        topicTitle: 'Sector Clear',
    },
]
function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
}
shuffleArray(topics)
export const data = [
    {
        id: 0,
        index: topics[0].index,
        item: topics[0].topicTitle,
        selected: false
    },
    {
        id: 1,
        index: topics[1].index,
        item: topics[1].topicTitle,
        selected:false
    },
    {
        id: 2,
        index: topics[2].index,
        item: topics[2].topicTitle,
        selected:false
    },
    {
        id: 3,
        index: topics[3].index,
        item: topics[3].topicTitle,
        selected:false
    },
    {
        id: 4,
        index: topics[4].index,
        item: topics[4].topicTitle,
        selected:false
    },
    {
        id: 5,
        index: topics[5].index,
        item: topics[5].topicTitle,
        selected:false
    },
    {
        id: 6,
        index: topics[6].index,
        item: topics[6].topicTitle,
        selected:false
    },
    {
        id: 7,
        index: topics[7].index,
        item: topics[7].topicTitle,
        selected:false
    },
    {
        id: 8,
        index: topics[8].index,
        item: topics[8].topicTitle,
        selected:false
    },
    {
        id: 9,
        index: topics[9].index,
        item: topics[9].topicTitle,
        selected:false
    },
    {
        id: 10,
        index: topics[10].index,
        item: topics[10].topicTitle,
        selected:false
    },
    {
        id: 11,
        index: topics[11].index,
        item: topics[11].topicTitle,
        selected:false
    },
    {
        id: 12,
        index: topics[12].index,
        item: topics[12].topicTitle,
        selected:true
    },
    {
        id: 13,
        index: topics[13].index,
        item: topics[13].topicTitle,
        selected:false
    },
    {
        id: 14,
        index: topics[14].index,
        item: topics[14].topicTitle,
        selected:false
    },
    {
        id: 15,
        index: topics[15].index,
        item: topics[15].topicTitle,
        selected:false
    },
    {
        id: 16,
        index: topics[16].index,
        item: topics[16].topicTitle,
        selected:false
    },
    {
        id: 17,
        index: topics[17].index,
        item: topics[17].topicTitle,
        selected:false
    },
    {
        id: 18,
        index: topics[18].index,
        item: topics[18].topicTitle,
        selected:false
    },
    {
        id: 19,
        index: topics[19].index,
        item: topics[19].topicTitle,
        selected:false
    },
    {
        id: 20,
        index: topics[20].index,
        item: topics[20].topicTitle,
        selected:false
    },
    {
        id: 21,
        index: topics[21].index,
        item: topics[21].topicTitle,
        selected:false
    },
    {
        id: 22,
        index: topics[22].index,
        item: topics[22].topicTitle,
        selected:false
    },
    {
        id: 23,
        index: topics[23].index,
        item: topics[23].topicTitle,
        selected:false
    },
    {
        id: 24,
        index: topics[24].index,
        item: topics[24].topicTitle,
        selected:false
    },
  ];

  export const bingoPossibilityRowData = 
  [
    {checkArray:[0,1,2,3,4], isBingo:false},
    {checkArray:[5,6,7,8,9], isBingo:false},
    {checkArray:[10,11,12,13,14], isBingo:false},
    {checkArray:[15,16,17,18,19], isBingo:false},
    {checkArray:[20,21,22,23,24], isBingo:false}
  ];
  export const bingoPossibilityColData = 
  [
    {checkArray:[0,5,10,15,20], isBingo:false},
    {checkArray:[1,6,11,16,21], isBingo:false},
    {checkArray:[2,7,12,17,22], isBingo:false},
    {checkArray:[3,8,13,18,23], isBingo:false},
    {checkArray:[4,9,14,19,24], isBingo:false}
  ];
  export const bingoPossibilityDiagData = 
  [
    {checkArray:[0,6,12,18,24], isBingo:false},
    {checkArray:[4,8,12,16,20], isBingo:false}
  ];