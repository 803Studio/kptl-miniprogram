import {tabMap} from './tabs'

Component({
  properties: {},
  data: {
    active: 'index',
    list: [...tabMap.values()]
  },
  methods: {
    onChange(ev: any) {
      const active = ev.detail.value
      const target = tabMap.get(active)
      if (target === undefined) return
      const url = `${target.url.startsWith('/') ? '': '/'}${target.url}`
      wx.switchTab({url})
    },
    init() {
      const pages = getCurrentPages()
      const cur = pages[pages.length - 1]
      if (cur === undefined) return

      const [route] = cur.route.split('?')
      if (route === undefined) return

      for (const tab of tabMap.values()) {
        if (tab.url === route) {
          this.setData({
            active: tab.value
          })
          return
        }
      }
    }
  }
})
