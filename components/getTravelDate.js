export const getTravelDate = (timeObject) => {
  const monthTable = {
    0: 'Jan', 1: 'Feb', 2: 'Mar',
    3: 'Apr', 4: 'May', 5: 'Jun',
    6: 'Jul', 7: 'Aug', 8: 'Sep',
    9: 'Oct', 10: 'Nov', 11: 'Dec'
  }

  let month, day, year
  month = monthTable[timeObject.getMonth()]
  day = timeObject.getDate()
  year = timeObject.getFullYear()
  return [month, day, year]
}