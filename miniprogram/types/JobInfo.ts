export enum JobSalaryPaymentMethod {
  HOURLY = '小时',
  MONTHLY = '月',
  DAILY = '天',
  WEEKLY = '周',
  YEARLY = '年',
  NEGOTIABLE = '面议',
  OTHER = '其他'
}

export enum JobForm {
  FULL_TIME = '全职',
  PART_TIME = '兼职',
  CONTRACT = '合同工',
  INTERNSHIP = '实习',
  TEMPORARY = '临时工',
  VOLUNTEER = '志愿者',
  OTHER = '其他'
}

export interface JobBenefits {
  salary: [number, number, JobSalaryPaymentMethod]
  items: string[]
}

export interface JobRequirements {
  age: [number, number]
  experience: [number, number]
  education: string
}

export interface JobInfo {
  // basic info
  name: string
  benefits: JobBenefits
  requirements: JobRequirements
  recruitmentNumber: number
  type: string
  form: JobForm
  description: string

  // addition info
  timestamp: number
  id: number
  companyId: number
  companyName: string
  recruiterId: number
  recruiterName: string
}
