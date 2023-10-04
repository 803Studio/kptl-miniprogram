import {initLocalStore} from "./store/comm/index";

App<IAppOption>({
  globalData: {},
  onLaunch: () => {
    initLocalStore().then(() => {
      console.log('initLocalStore success')
    })
  },
})