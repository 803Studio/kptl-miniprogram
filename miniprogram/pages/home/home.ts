import * as wxp from '../../utils/wx'
import {fetchJobsList} from "../../service/jobs/fetchJobs";
import {JobInfo} from "../../types/JobInfo";

Page({
  data: {
    isLoading: false,
    jobListLoadStatus: 0,
    jobList: [] as JobInfo[],
    swiperList: [
      'https://tdesign.gtimg.com/miniprogram/images/swiper1.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper2.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper1.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper2.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper1.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper2.png',
    ]
  },
  privateData: {

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
    if (this.data.jobListLoadStatus === 0) {
      this.loadJobsList(false)
    }
  },
  onShareAppMessage() {

  },
  init() {
    this.loadHomePage()
  },
  async loadHomePage() {
    await wxp.stopPullDownRefresh()
    this.setData({
      isLoading: true
    })
    await this.loadJobsList(true)
    this.setData({
      isLoading: false
    })
  },
  async loadJobsList(fresh = false) {
    if (fresh) {
      await wxp.pageScrollTo({scrollTop: 0})
    }

    this.setData({jobListLoadStatus: 1})

    const index = fresh ? 0 : this.data.jobList.length

    await fetchJobsList(index, index + 10)
      .then(res => {
        this.setData({
          jobList: fresh ? res : this.data.jobList.concat(res),
          jobListLoadStatus: 0
        })
      })
      .catch(reason => {
        this.setData({
          jobListLoadStatus: 3
        })
        console.log(reason)
      })
  },
  handleJobListClick(ev: any) {
    wx.navigateTo({
      url: `/pages/jobs/detail/detail?id=${ev.detail.id}`,
    })
  },
  navToSearchPage() {
    wx.navigateTo({
      url: '/pages/jobs/search/index',
    })
  },
  onReTry() {
    this.loadJobsList(false)
  }
})