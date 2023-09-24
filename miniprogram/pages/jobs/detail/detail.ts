interface RequirementTag {
  icon: string
  text: string
  space?: string
}

Page({
  data: {
    benefits: [] as string[],
    image: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    requirementTags: [] as RequirementTag[],
    requirementLines: [] as string[]
  },
  onLoad(query) {
    const id = +(query.id ?? 'e')
    if (Number.isNaN(id)) {
      return
    }

    this.setData({
      benefits: [
        '交通补助',
        '话补',
        '节日福利',
        '晋升空间',
        '绩效奖励',
        '工龄奖',
        '生日福利',
        '社保补助',
        '社保',
        '高温补贴'
      ],
      requirementTags: [
        {
          text: '31-49岁',
          icon: 'user',
        },
        {
          text: '两年经验',
          icon: 'work'
        },
        {
          text: '中专/技校',
          icon: 'education'
        }
      ],
      requirementLines: [
        '1. 熟悉管家婆系统',
        '2. 应收应付',
        '3. 对账 凭证',
        '4. 数据统筹',
        '5. 办公软件运用',
        '6. 品德优秀 勤奋 做事仔细认真'
      ]
    })
  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },
  onShareAppMessage() {

  },
  handleBack() {
    wx.navigateBack()
  }
})