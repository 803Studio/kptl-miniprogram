export const stopPullDownRefresh = () => {
  return new Promise<void>(res => {
    wx.stopPullDownRefresh({
      success: () => res()
    })
  })
}

export const pageScrollTo = (option: {
  scrollTop?: number,
  duration?: number
}) => new Promise<void>(resolve => {
  wx.pageScrollTo({
    success: () => resolve(),
    ...option
  })
})
