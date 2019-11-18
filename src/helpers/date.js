export const stringToDate = string => new Date(string)

export const dateToString = date => date.toISOString()

export const secondsToNiceDuration = (totalSecs, includeSeconds = false) => {
  totalSecs = Math.round(totalSecs)
  const hours = Math.floor(totalSecs / (60 * 60))

  const divisor_for_minutes = totalSecs % (60 * 60)
  const minutes = Math.floor(divisor_for_minutes / 60)

  const divisor_for_seconds = divisor_for_minutes % 60
  const seconds = Math.ceil(divisor_for_seconds)

  let string = ''
  if (hours > 0) string += `${hours}h `
  if (minutes > 0) string += `${minutes}m`
  if (includeSeconds || string === '') string += ` ${seconds}s`

  return string
}

export const secondsToDate = (seconds = 0) => new Date(seconds * 1000)
