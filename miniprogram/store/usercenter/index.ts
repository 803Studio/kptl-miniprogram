import {userLogin} from "../../api/user/index";
import {userLocalStore} from "../comm/user";

const wxLogin = () => new Promise<any>((success, fail) => {
  wx.login({success, fail})
})

export const refreshToken = async () => {
  const {code} = await wxLogin()
  const {token} = await userLogin({code, method: 0})
  await userLocalStore.set('token', token)
}

export const getLoginStatus = () => userLocalStore.get('token') !== ''
export const logout = () => userLocalStore.set('token', '')
