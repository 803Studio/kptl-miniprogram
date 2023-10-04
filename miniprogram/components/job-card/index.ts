import {JobInfo} from "../../types/JobInfo";

// time is a unix timestamp
// return a string like '1小时前'
const fmtTime = (time: number) => {
  const now = Date.now()
  const delta = now - time

  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour

  if (delta < minute) {
    return '刚刚'
  } else if (delta < hour) {
    return `${Math.floor(delta / minute)}分钟前`
  } else if (delta < day) {
    return `${Math.floor(delta / hour)}小时前`
  } else {
    return `${Math.floor(delta / day)}天前`
  }
}

Component({
  properties: {
    info: {
      type: Object,
      value: {} as JobInfo
    }
  },
  observers: {

  },
  lifetimes: {
    attached() {
      let [low, high, method] = this.properties.info.benefits.salary
      if (low > high) {
        [low, high] = [high, low]
      }
      const items = this.properties.info.benefits.items.slice(0, 4)

      this.setData({
        salary: [low, high].join(' - '),
        payMethod: method,
        time: fmtTime(this.properties.info.timestamp),
        items
      })
    }
  },
  data: {
    salary: '',
    payMethod: '',
    time: '',
    items: [] as string[]
  },
  methods: {
    handleClick() {
      this.triggerEvent('click', {id: this.properties.info.id})
    }
  }
})
