import {takeEvery} from 'redux-saga'
import {put, call, fork} from 'redux-saga/effects'
import * as actions from '../actionTypes';
import services from '../../services'

export function* watchGetAppData() {
  yield takeEvery(actions.GET_APP_BANNERS_DATA, function* (action) {
    try {
      // 请求前先修改 请求状态，防止多次请求
      yield put({type: actions.SET_APP_FETCH_STATUS, payLoad: actions.STATE.LOADING})
      // Fetch
      let data = yield call(services.middle_index, {})
      data = data.data
      // 数据传递
      if (data.status === 0) {
        yield put({type: Actions.INIT_APP_BANNERS_DATA, payLoad: data})
        yield put({type: actions.SET_APP_FETCH_STATUS, payLoad: actions.STATE.SUCCESS})
      }
    } catch (err) {
      yield put({type: actions.SET_APP_FETCH_STATUS, payLoad: actions.STATE.ERROR})
    }
  })
}
