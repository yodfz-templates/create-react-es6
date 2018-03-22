import {GET_APP_DATA} from '../actionTypes'

/**
 * 请求首页数据
 * @returns {{type}}
 */
const appRefush = () => {
  return {type: GET_APP_DATA}
}

export {
  appRefush
}
