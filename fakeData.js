export const fakeData = [
  {
    tripName: 'trip1',
    flights: [
      {
        id: 1,
        scheduled: new Date(2020, 1, 1, 23),
        from: 'TWN',
        to: 'SFO',
        kind: 'departure',
        terminal: 'D',
        Gate: 'A13',
        flightNumber: 'BR28',
      },
    ]
  },
  {
    tripName: 'trip2',
    flights: [
      {
        id: 1,
        scheduled: new Date(2020, 3, 16, 5, 30),
        from: 'SFO',
        to: 'BOS',
        kind: 'departure',
        terminal: 'Int',
        Gate: 'k',
        flightNumber: 'AR28',
      },
    ]
  },
]