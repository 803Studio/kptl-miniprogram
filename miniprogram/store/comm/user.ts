import {createLocalStore} from "./helper";

interface UserLocalStore {
  token: string
}

export const userLocalStore = createLocalStore<UserLocalStore>(
  'user',
  {
    token: ''
  }
)
