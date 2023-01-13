class Storage {
  getStorage(key) {
    return window.localStorage.getItem(key)
  }
  setStorage(key, value) {
    if (typeof value === 'string') {
      window.localStorage.setItem(key, value)
    } else if (typeof value === 'object') {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  removeStorage(key) {
    window.localStorage.removeItem(key)
  }
  clearAllStorage() {
    window.localStorage.clear()
  }
}
export default new Storage()
