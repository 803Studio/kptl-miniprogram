import {userLocalStore} from "../store/comm/user";
import * as userStore from "../store/usercenter/index";

const apiServer = 'https://api.cdl.zone/kptl'

type GetQuery = Record<string, string | number>
const getHeader = () => {
  return {
    'Access-Token': userLocalStore.get('token')
  }
}

const fmtUrl = (path: string, q?: GetQuery): string => {
  if (q === undefined) return apiServer + path

  const temp: string[] = []
  const keys = Object.keys(q)
  for (const key of keys) {
    const value = q[key]
    if (value !== undefined) {
      temp.push(`${key}${value === '' ? '' : '='}${value}`)
    }
  }
  return `${apiServer}${path}?${temp.join('&')}`
}

export const createGetApi = <T>(path: string) => {
  return (query?: GetQuery) => {
    const url = fmtUrl(path, query)
    return new Promise<T>((res, fail) => {
      wx.request({
        url,
        method: "GET",
        header: getHeader(),
        timeout: 20000,
        fail,
        success: response => {
          res(response.data as T)
        }
      })
    })
  }
}

export const createPostApi = <T>(path: string) => {
  return (body: string | object) => new Promise<T>((res, fail) => {
    wx.request({
      url: fmtUrl(path),
      method: "POST",
      header: getHeader(),
      fail,
      data: body,
      success: (response) => {
        res(response.data as T)
      }
    })
  })
}
