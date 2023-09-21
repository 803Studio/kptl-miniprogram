export interface JobSummaryRaw {
  jobId: number;
  jobName: string;
  jobLocation: string;
  companyName: string;
  jobTags: string;
  companyId: number;
  openTime: number;
  jobMoney: JobMoney;
  jobType: JobType;
}

export interface JobSummaryToShow {
  raw: JobSummaryRaw
  tags: string[]
  time: string
  payNum: string
  payType: string
}

export enum JobMoneyType {
  F2F = 0,
  DAY = 1,
  MON = 2,
  TIME = 3,
  HOUR = 4
}

export interface JobMoney {
  type: JobMoneyType;
  low: number;
  high: number;
}

export enum JobType {
  LONG = 0,
  SHORT = 1,
  PARTTIMEJOB = 2
}

export interface JobDetailRaw extends JobSummaryRaw {
  jobReq: string
  jobNeed: number
  industry: string
  recruiterName: string
  recruiterPhone: string
  recruiterId: number
  updateTime: number
}
