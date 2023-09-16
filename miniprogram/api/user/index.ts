import { createGetApi } from "../util";

const url = {
  userLogin: '/user/login'
}

export const userLogin = createGetApi(url.userLogin)