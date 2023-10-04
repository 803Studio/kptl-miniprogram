import * as userStore from "../../store/usercenter/index";
import * as wxp from "../../utils/wx";

Page({
  data: {
    isLogin: false,
  },
  onLoad() {
    this.init()
  },
  onReady() {

  },
  onShow() {
    this.getTabBar().init()
    wxp.pageScrollTo({scrollTop: 0})
  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {

  },
  async userCenterLogin() {
    await userStore.refreshToken()
    await this.init()
  },
  async init() {
    const isLogin = userStore.getLoginStatus()
    this.setData({isLogin})
    await wxp.pageScrollTo({scrollTop: 0})
  },
  async onLogout() {
    await userStore.logout()
    await this.init()
  }
})