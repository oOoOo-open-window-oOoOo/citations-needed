export const stringToDate = string => new Date(string)

export const toDate = x => {
  if (typeof x.toDate === 'function') {
    return x.toDate()
  }

  return stringToDate(x)
}

export const dateToString = date => date.toISOString()
