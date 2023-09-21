import { appConfig } from "../../config/index";
import {fmtLastTime, sleep} from "../../utils/time";
import {generateRandomJobSummary} from "../../model/job";
import * as jobApi from "../../api/job/index";
import {JobSummaryRaw, JobSummaryToShow} from "../../types/JobInfo";

async function mockFetchJobsList() {
  await sleep(1000)
  return Array.from({length: 10}, generateRandomJobSummary)
}

async function realFetchJobsList() {
  try {
    return await jobApi.recommendJob();
  } catch (reason) {
    console.log(reason);
    return [];
  }
}

const fmtJobSummary = (raw: JobSummaryRaw): JobSummaryToShow => {
  return {
    raw,
    tags: raw.jobTags.split('#'),
    time: fmtLastTime(raw.openTime),
    payNum: raw.jobMoney.low + ' - ' + raw.jobMoney.high,
    payType: raw.jobMoney.type === 0 ? '面议' : '元/' + ['小时', '天', '月', '次', '小时'][raw.jobMoney.type - 1]
  }
}

export async function fetchJobsList() {
  return (await(
    appConfig.useMock ?
      mockFetchJobsList :
      realFetchJobsList
  )()).map(fmtJobSummary)
}
