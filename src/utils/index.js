export function countScore(questions) {
  let score = 0
  questions.forEach(({ answers, userAnswer }) => {
    if (answers[userAnswer]?.correct) {
      score++
    }
  })
  return score
}
export function secondsToHHMMSS(seconds) {
  const HH = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const MM = String(Math.floor(seconds / 60) % 60).padStart(2, '0')
  const SS = String(Math.floor(seconds % 60)).padStart(2, '0')

  return HH == '00' ? `${MM}:${SS}` : `${HH}:${MM}:${SS}`
}

export function calculateFutureTime(startDate, seconds) {
  const currentDate = new Date(startDate)
  const futureDate = new Date(currentDate.getTime() + seconds * 1000)
  return futureDate
}

export function futureDateToSeconds(futureDate) {
  return (futureDate.getTime() - new Date().getTime()) / 1000
}
