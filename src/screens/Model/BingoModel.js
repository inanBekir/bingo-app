export const data = [
    {
        id: 0,
        item:'Lets do it!',
        selected:false
    },
    {
        id: 1,
        item:'Cover Me!',
        selected:false
    },
    {
        id: 2,
        item:'You Take the Point',
        selected:false
    },
    {
        id: 3,
        item:'Hold This Position!',
        selected:false
    },
    {
        id: 4,
        item:'Follow Me!',
        selected:false
    },
    {
        id: 5,
        item:'Regroup, Team!',
        selected:false
    },
    {
        id: 6,
        item:'Taking Fire, Need Assistance!',
        selected:false
    },
    {
        id: 7,
        item:'GO!',
        selected:false
    },
    {
        id: 8,
        item:'Team, Fall Back!',
        selected:false
    },
    {
        id: 9,
        item:'Hold This Position!',
        selected:false
    },
    {
        id: 10,
        item:'Stick Together, Team',
        selected:false
    },
    {
        id: 11,
        item:'Get in Position',
        selected:false
    },
    {
        id: 12,
        item:'Storm the Front',
        selected:true
    },
    {
        id: 13,
        item:'Cheer',
        selected:false
    },
    {
        id: 14,
        item:'Enemy Down',
        selected:false
    },
    {
        id: 15,
        item:'Reporting In',
        selected:false
    },
    {
        id: 16,
        item:'Negative',
        selected:false
    },
    {
        id: 17,
        item:'Im in Position',
        selected:false
    },
    {
        id: 18,
        item:'Sector Clear',
        selected:false
    },
    {
        id: 19,
        item:'Need Backup',
        selected:false
    },
    {
        id: 20,
        item:'Enemy Spotted',
        selected:false
    },
    {
        id: 21,
        item:'Affirmative, Roger',
        selected:false
    },
    {
        id: 22,
        item:'Thanks',
        selected:false
    },
    {
        id: 23,
        item:'Compliment, Nice',
        selected:false
    },
    {
        id: 24,
        item:'Storm the Front',
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