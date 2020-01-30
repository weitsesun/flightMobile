export const fakeData = [
  {
    tripName: 'trip1',
    flights: [
      {
        id: 1,
        date: {
          year: 2020,
          month: 2,
          day: 1,
        },
        from: 'TWN',
        to: 'SFO',
        kind: 'departure',
        terminal: 'D',
        Gate: 'A13',
        flightNumber: 'BR28',
        scheduled: {
          hour: 23,
          min: 30,
        }
      }  
    ]
  },
  {
    tripName: 'trip2',
    flights: [
      {
        id: 2,
        date: {
          year: 2020,
          month: 3,
          day: 10,
        },
        from: 'TWN',
        to: 'SFO',
        kind: 'departure',
        terminal: 'D',
        Gate: 'A13',
        flightNumber: 'BR28',
        scheduled: {
          hour: 13,
          min: 30,
        }
      }  
    ]
  },
]