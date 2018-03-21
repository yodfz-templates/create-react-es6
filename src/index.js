import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import appStore from './store'
import {sagas} from './store/sagas'
import registerServiceWorker from './registerServiceWorker'

import 'amfe-flexible'
import 'normalize.css'

// redux&&saga载入
const sagaMiddleware = createSagaMiddleware()
let store = createStore(appStore, applyMiddleware(sagaMiddleware))
let run = function () {
  try {
    sagaMiddleware.run(sagas)
  } catch (err) {
    run()
  }
}

// 客户端配置文件,一般来说，服务端配置到server/entry.js中
ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'))
// create react app 标配，注册后台服务
registerServiceWorker()


// 让webpack可以进行HMR，如果出现动作，就重新填充root
if (module.hot) {
  module.hot.accept('./router', () => {
    ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'))
  })
}
