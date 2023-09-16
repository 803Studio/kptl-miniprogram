interface TabInfo {
  value: string,
  icon: string,
  text: string,
  url: string
}

const tabList: TabInfo[] = [
  {
    value: 'index',
    icon: 'home',
    text: '首页',
    url: 'pages/home/home'
  },
  {
    value: 'jobs',
    icon: 'app',
    text: '职位',
    url: 'pages/jobs/index'
  },
  {
    value: 'chat',
    icon: 'chat',
    text: '消息',
    url: 'pages/chat/index'
  },
  {
    value: 'usercenter',
    icon: 'user',
    text: '我的',
    url: 'pages/usercenter/index'
  }
]

const tabMap: Map<string, TabInfo> = new Map

for (const info of tabList) {
  tabMap.set(info.value, info)
}

export {
  tabMap
}
