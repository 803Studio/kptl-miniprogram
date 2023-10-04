import './user'

import { allLocalStore } from './helper'

export const initLocalStore = async () => {
  for (const store of allLocalStore) {
    await store.init()
  }
}
