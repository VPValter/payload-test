const MONTH_ABBRS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

/** Parse YYYY-MM-DD from an ISO-8601 string (e.g. 2023-06-16T22:00:00.000Z). No Date() — stable for SSR/hydration. */
export const formatDateTime = (timestamp: string): string => {
  // const now = new Date()
  // let date = now
  // if (timestamp) date = new Date(timestamp)
  // const months = date.getMonth()
  // const days = date.getDate()

  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  // const MM = months + 1 < 10 ? `0${months + 1}` : months + 1
  // const MM = months + 1
  // const DD = days < 10 ? `0${days}` : days
  // const DD = days
  // const YYYY = date.getFullYear()
  // const AMPM = hours < 12 ? 'AM' : 'PM';
  // const HH = hours > 12 ? hours - 12 : hours;
  // const MinMin = (minutes < 10) ? `0${minutes}` : minutes;
  // const SS = (seconds < 10) ? `0${seconds}` : seconds;

  // return `${MM}/${DD}/${YYYY}`

  const [YYYY, mm, DD] = timestamp.split('T')[0].split('-')
  const monthAbbrev = MONTH_ABBRS[Number(mm) - 1]
  return `${DD} ${monthAbbrev} ${YYYY}`
}
