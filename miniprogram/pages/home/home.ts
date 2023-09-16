// pages/home/home.ts
Page({
  data: {
    isLoading: false
  },
  onLoad() {
    this.init()
  },
  onReady() {

  },
  onShow() {
    this.getTabBar().init()
  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {
    this.init()
  },
  onReachBottom() {

  },
  onShareAppMessage() {

  },
  init() {
    wx.stopPullDownRefresh()
    console.log('init')
    this.setData({
      isLoading: true
    })
    new Promise(res => {
      setTimeout(res, 2000)
    }).then(() => {
      this.setData({
        isLoading: false
      })
    })
  },
  navToSearchPage() {
    wx.navigateTo({
      url: '/pages/jobs/search/index',
    })
  }
})