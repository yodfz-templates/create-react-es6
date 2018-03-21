import {fromJS, List} from 'immutable'
import {INIT_APP_BANNERS_DATA} from '../actionTypes'

const defaultState = fromJS({
  /* 轮播图数据 */banners: [],
  /* 每周上新 */lastWeekNews: [],
  /* 是否正在请求数据 */isFetch: false
})

//  List, Stack, Map, OrderedMap, Set, OrderedSet and Record.
export default (state = defaultState, action) => {
  let actionFn = {}
  actionFn[INIT_APP_BANNERS_DATA] = ($actionData) => {
    state.set('banners', List($actionData.payLoad))
  }
  return actionFn(action.type) || state
}

