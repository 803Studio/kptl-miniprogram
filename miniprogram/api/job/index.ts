import {createGetApi} from "../util";
import {JobInfo} from "../../types/JobInfo";

const url = {
  recommendJob: '/jobs/recommend',
  openJobs: '/dev/jobs'
}

export const recommendJob = createGetApi<JobInfo[]>(url.openJobs)
