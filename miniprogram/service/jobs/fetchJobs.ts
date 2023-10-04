import * as jobApi from "../../api/job/index";
import {jobMap} from "../../store/jobs/index";


export async function fetchJobsList(index: number, size: number) {
  const result = await jobApi.recommendJob({index, size})
  for (const info of result) {
    jobMap.set(info.id, info)
  }
  return result
}
