// this is a util function to make the program sleep for a while
// n is the time in ms
export const sleep = (n: number) => new Promise(resolve => {
  setTimeout(resolve, n)
})

// lastTime is the unix timestamp
// return a string like '1小时前'
export const fmtLastTime = (lastTime: number): string => {
  const now = Date.now()
  const delta = now - lastTime
  const deltaInHour = delta / 1000 / 60 / 60
  if (deltaInHour < 1) {
    return Math.floor(deltaInHour * 60) + '分钟前'
  } else if (deltaInHour < 24) {
    return Math.floor(deltaInHour) + '小时前'
  } else {
    return Math.floor(deltaInHour / 24) + '天前'
  }
}
