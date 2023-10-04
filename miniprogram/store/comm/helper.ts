interface LocalStore<T> {
  name: string
  get: (key: keyof T) => T[keyof T]
  set: (key: keyof T, value: T[keyof T]) => Promise<void>
  init: () => Promise<void>
}

export const allLocalStore: LocalStore<any>[] = []

export const createLocalStore = <T extends object>(name: string, defaultValue: T): LocalStore<T> => {
  const cache = defaultValue
  const get = (key: keyof T) => {
    return cache[key]
  }

  const getFromStorage = (key: keyof T) => {
    return new Promise<any>((resolve, reject) => {
      wx.getStorage({
        // @ts-ignore
        key: `${name}#${key}`,
        success: res => {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  const set = (key: keyof T, value: T[keyof T]) => {
    return new Promise<void>(resolve => {
      wx.setStorage({
        // @ts-ignore
        key: `${name}#${key}`,
        data: value,
        success: () => {
          cache[key] = value
          resolve()
        }
      })
    })
  }

  const init = async () => {
    const keys = Object.keys(defaultValue) as (keyof T)[]
    for (const key of keys) {
      const value = await getFromStorage(key).catch(() => null)
      if (value !== null) {
        cache[key] = value
      }
    }
  }

  const result: LocalStore<T> = {
    name,
    get,
    set,
    init
  }

  allLocalStore.push(result)

  return result
}
