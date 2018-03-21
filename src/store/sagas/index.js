
/**
 * 这个文件的作用是把自己目录下面所有的sagas配置文件加载出来
 * 需要一个个手动import进来
 * 然后加入importSaga中即可
 */

import * as App from './App';
// {watchGetArticleList, watchSaveArticle,wathcDeleteArticle}
// import * as photo from './photo';
// import * as system from './system';
import {fork} from 'redux-saga/effects'
// export default [watchGetArticleList, watchSaveArticle,wathcDeleteArticle];
let importSaga = [
  App
  // article, photo, system
]
let sagasList = []

importSaga.map(saga => {
  saga && Object.keys(saga).map(p => {
    sagasList.push(fork(saga[p]))
  })
})

export function* sagas() {
  yield sagasList
}
