import { TOKEN_DATA } from '@helper'
export const getToken = () => {
  return sessionStorage.getItem(TOKEN_DATA.access_token);
}
export const setToken = (token: string) => {
  sessionStorage.setItem(TOKEN_DATA.access_token, token);
}
export const removeToken = () => {
  sessionStorage.removeItem(TOKEN_DATA.access_token);
}
