export function getAuthToken () {
  return JSON.parse(window.localStorage.getItem('codinghousetoken'))
}

export function setAuthToken (token) {
  window.localStorage.setItem('codinghousetoken', JSON.stringify(token))
}

export function removeAuthToken () {
  window.localStorage.removeItem('codinghousetoken')
}
