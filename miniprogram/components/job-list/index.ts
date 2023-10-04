import {JobInfo} from "../../types/JobInfo";

Component({
  properties: {
    jobSummaryList: {
      // @ts-ignore
      type: Array,
      value: [] as JobInfo[]
    }
  },
  data: {

  },
  lifetimes: {
    ready() {

    }
  },
  methods: {
    onJobCardClick(ev: any) {
      this.triggerEvent('click', {id: ev.detail.id})
    }
  }
})