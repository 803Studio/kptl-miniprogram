import * as wxp from '../../utils/wx'
import {fetchJobsList} from "../../service/jobs/fetchJobs";
import {JobSummaryToShow} from "../../types/JobInfo";

Page({
  data: {
    isLoading: false,
    jobList: [] as JobSummaryToShow[]
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
    await this.loadJobsList()
    this.setData({
      isLoading: false
    })
  },
  async loadJobsList(fresh = false) {
    if (fresh) {
      await wxp.pageScrollTo({scrollTop: 0})
    }
    this.setData({
      jobList: await fetchJobsList()
    })
  },
  navToSearchPage() {
    wx.navigateTo({
      url: '/pages/jobs/search/index',
    })
  }
})