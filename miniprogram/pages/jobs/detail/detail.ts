import {jobMap} from "../../../store/jobs/index";
import {JobSalaryPaymentMethod} from "../../../types/JobInfo";

interface RequirementTag {
  icon: string
  text: string
  space?: string
}

Page({
  data: {
    name: '',
    salary: '',
    recruiterName: '',
    companyName: '',
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

    const job = jobMap.get(id)
    if (job === undefined) {
      return
    }

    const getSalary = () => {
      const salary = job.benefits.salary
      if (salary[2] === JobSalaryPaymentMethod.NEGOTIABLE) {
        return '面议'
      }
      return `${[salary[0], salary[1]].join('-')}元/${salary[2]}`
    }

    const requirementLines = (job.description ?? '').split('\n');

    this.setData({
      name: job.name,
      salary: getSalary(),
      recruiterName: job.recruiterName,
      companyName: job.companyName,
      form: job.form,
      recruitmentNum: job.recruitmentNumber,
      benefits: job.benefits.items,
      requirementTags: [
        {
          text: `${job.requirements.age.join('-')}岁`,
          icon: 'user',
        },
        {
          text: `${job.requirements.experience.join('-')}年经验`,
          icon: 'work'
        },
        {
          text: job.requirements.education,
          icon: 'education'
        },
      ],
      requirementLines
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