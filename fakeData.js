const uuidv4 = require('uuid/v4')

export const fakeData = [
  {
    tripName: 'Example1',
    flights: [
      {
        id: uuidv4(),
        scheduled: new Date(2020, 1, 1, 23),
        from: 'TWN',
        to: 'SFO',
        kind: 'departure',
        terminal: 'D',
        gate: 'A13',
        flightNumber: 'BR28',
      },
      {
        id: uuidv4(),
        scheduled: new Date(2020, 3, 16, 10),
        from: 'SFO',
        to: 'BOS',
        kind: 'departure',
        terminal: 'D',
        gate: 'A13',
        flightNumber: 'BR28',
      },
    ]
  },
  {
    tripName: 'Example2',
    flights: [
      {
        id: uuidv4(),
        scheduled: new Date(2020, 3, 16, 5, 30),
        from: 'BOS',
        to: 'ENG',
        kind: 'departure',
        terminal: 'Int',
        gate: 'k',
        flightNumber: 'AR28',
      },
    ]
  },
]