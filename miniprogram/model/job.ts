
import {JobMoney, JobSummaryRaw, JobType} from "../types/JobInfo";

// there are some rules to generate a random JobSimplifyMessage
// 1. jobName should be a name of an internet job, like '前端开发', '后端开发', '产品经理', etc.
// 2. jobLocation should be a random string with length between 5 and 20
// 3. companyName should be a name of famous company in China
// 4. jobTags should be tags of the job, each tag should be a random string with length between 2 and 10, split by '#'
// 5. jobMoney.low should less than jobMoney.high
// 6. openTime should be a random unix timestamp
// create a function to generate a random JobSimplifyMessage

export function generateRandomJobSummary(): JobSummaryRaw {
  const jobLocationLength = Math.floor(Math.random() * 15) + 5;
  const jobTagsLength = Math.floor(Math.random() * 8) + 2;
  const generateRandomString = (length: number): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
  const generateRandomCompanyName = (): string => {
    const companyNames = [
      '阿里巴巴',
      '腾讯',
      '百度',
      '京东',
      '网易',
      '美团',
      '滴滴',
      '字节跳动',
      '拼多多',
      '小米',
      '华为',
      '360',
      '搜狐',
      '新浪',
      '携程',
      '快手',
      '饿了么',
      '搜狗',
      '58同城',
      '爱奇艺',
      '搜狐',
      '蘑菇街',
      '贝壳',
      '宜信',
      '去哪儿',
      '美团点评',
      '虎牙',
      '大疆',
      '有赞',
      '小红书',
      '唯品会',
      '链家',
      '蚂蚁金服',
      '蘑菇街',
      '贝壳',
      '宜信',
      '去哪儿',
      '美团点评',
      '虎牙',
      '大疆',
      '有赞',
      '小红书',
      '唯品会',
      '链家',
      '蚂蚁金服'
    ];
    const index = Math.floor(Math.random() * companyNames.length);
    return companyNames[index];
  }

  const generateRandomJobName = (): string => {
    const jobNames = [
      '前端开发',
      '后端开发',
      '产品经理',
      '运营',
      '市场',
      '销售',
      '客服',
      '行政',
      '人力资源',
      '财务',
      '法务',
      '投资',
      '风控',
      '数据',
      '设计',
      '测试',
      '运维',
      '硬件',
      '安全',
      '游戏',
      '汽车',
      '教育',
      '医疗',
      '金融',
      '电商',
      '社交',
      '旅游',
      '广告',
      '物流',
      '房产',
      '咨询',
      '文化',
      '体育',
      '媒体',
      '电子',
      '通信',
      '制造',
      '农业',
      '能源',
      '化工',
      '政府',
      '非盈利组织'
    ];
    const index = Math.floor(Math.random() * jobNames.length);
    return jobNames[index];
  }

  const jobName = generateRandomJobName();
  const jobLocation = generateRandomString(jobLocationLength);
  const companyName = generateRandomCompanyName();
  const generateRandomTags = (length: number): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += generateRandomString(Math.floor(Math.random() * 8) + 2);
      if (i !== length - 1) {
        result += '#';
      }
    }
    return result;
  }
  const generateRandomOpenTime = (): number => {
    const now = new Date();
    const nowTime = now.getTime();
    const randomTime = Math.floor(Math.random() * 1000000000);
    return nowTime - randomTime;
  }
  const jobTags = generateRandomTags(jobTagsLength);
  const jobId = Math.floor(Math.random() * 100000);
  const companyId = Math.floor(Math.random() * 100000);
  const openTime = generateRandomOpenTime();

  // low should less than high
  const generateRandomJobMoney = (): JobMoney => {
    const low = Math.floor(Math.random() * 100000);
    const high = Math.floor(Math.random() * 100000);
    return {
      type: Math.floor(Math.random() * 5),
      low: low,
      high: high > low ? high : low
    };
  }
  const jobMoney = generateRandomJobMoney();
  const generateRandomJobType = (): JobType => {
    return Math.floor(Math.random() * 3);
  }
  const jobType = generateRandomJobType();
  return {
    jobName,
    jobLocation,
    companyName,
    jobTags,
    jobId,
    companyId,
    openTime,
    jobMoney,
    jobType
  };
}
