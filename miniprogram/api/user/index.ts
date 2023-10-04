import { createGetApi } from "../util";

const url = {
  userLogin: '/dev/login'
}

export const userLogin = createGetApi<{token: string}>(url.userLogin)