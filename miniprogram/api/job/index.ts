import {createGetApi} from "../util";
import {JobSummaryRaw} from "../../types/JobInfo";

const url = {
  recommendJob: '/jobs/recommend',
}

export const recommendJob = createGetApi<JobSummaryRaw[]>(url.recommendJob)
