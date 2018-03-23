import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
import Style from './Home.module.scss'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {appRefush} from '../../store/actions/App'

@connect(
  state => {
    return {state: state.App}
  },
  dispatch => bindActionCreators({appRefush}, dispatch)
)
export default class Home extends Component {
  static defaultProps = {}
  static propTypes = {}

  constructor(props) {
    super(props)
    this.props.appRefush()
  }

  render() {
    return (
      <div className={Style['home']}>
        <div className={Style['banner']}>
          <img src="/static/img/Ft5j4LqaisT7NJgdNzV6YJ51ZW1a.jpeg" alt=""/>
        </div>
        <div className={Style['introduce']}>
          <div className={Style['img-wrapper']}>
            <img className={Style['zzxk']} src="/static/img/ifushion_homepage_01zzxk.svg" alt=""/>
            <span>自助选款</span>
          </div>
          <div className={Style['img-wrapper']}>
            <img className={Style['zjtk']} src="/static/img/ifushion_homepage-02zjtk.svg" alt=""/>
            <span>精准推款</span>
          </div>
          <div className={Style['img-wrapper']}>
            <img className={Style['yyky']} src="/static/img/ifushion_homepage-03yyky.svg" alt=""/>
            <span>预约看样</span>
          </div>
          <div className={Style['img-wrapper']}>
            <img className={Style['ddfw']} src="/static/img/ifushion_homepage-04ddfw.svg" alt=""/>
            <span>订单跟踪</span>
          </div>
        </div>
        <div>
          <div className={Style['season-title']}>
            <span className={Style['season-back']}></span>
            <span className={Style['text']}>四季风尚</span>
            <span className={Style['season-back']}></span>
          </div>
          <div className={Style['season-img']}>
            <img src="/static/img/Fp4UhUfKASs-BlFIZT5AkZOkfBvY.jpeg" alt=""/>
            <img src="/static/img/Fh7c6X46eP2clA07rBvyc9NjTESR.jpeg" alt=""/>
          </div>
        </div>
        <div className={Style['theme']}>
          <img src="/static/img/banner_perweek2.jpg" alt=""/>
          <div className={Style['theme-wrapper']}>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <span className={Style['name']}>测试</span>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <span className={Style['name']}>测试测试测试测试测试测试测试测试测试</span>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <span className={Style['name']}>测试</span>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <span className={Style['name']}>测试</span>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <span className={Style['name']}>测试</span>
            </div>
          </div>
        </div>
        <div className={Style['choice']}>
          <div className={Style['season-title']}>
            <span className={Style['choice-back']}></span>
            <span className={Style['text']}>极致精选</span>
            <span className={Style['choice-back']}></span>
          </div>
          <div className={Style['img-container']}>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <p className={Style['text-wrapper']}>
                <span className={Style['tag']}>[精选]</span>
                <span className={Style['name']}>测试</span>
              </p>
              <p className={Style['code']}>100222</p>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <p className={Style['text-wrapper']}>
                <span className={Style['tag']}>[精选]</span>
                <span className={Style['name']}>测试</span>
              </p>
              <p className={Style['code']}>100222</p>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <p className={Style['text-wrapper']}>
                <span className={Style['tag']}>[精选]</span>
                <span className={Style['name']}>测试测试测试测试测试测试测试测试</span>
              </p>
              <p className={Style['code']}>100222</p>
            </div>
          </div>
        </div>
        <div className={Style['ranking-list']}>
          <div className={Style['season-title']}>
            <span className={Style['ranking-back']}></span>
            <span className={Style['text']}>人气排行榜</span>
            <span className={Style['ranking-back']}></span>
          </div>
          <div className={Style['list-wrapper']}>
            <div className={Style['list']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <div className={Style['name-wrapper']}>
                <p className={Style['name']}>测试</p>
                <p className={Style['code']}>100233</p>
              </div>
              <button>马上抢</button>
            </div>
            <div className={Style['list']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <div className={Style['name-wrapper']}>
                <p className={Style['name']}>测试</p>
                <p className={Style['code']}>100233</p>
              </div>
              <button>马上抢</button>
            </div>
            <div className={Style['list']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <div className={Style['name-wrapper']}>
                <p className={Style['name']}>测试</p>
                <p className={Style['code']}>100233</p>
              </div>
              <button>马上抢</button>
            </div>
            <div className={Style['list']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <div className={Style['name-wrapper']}>
                <p className={Style['name']}>测试测试测试测试测试测试测试测试</p>
                <p className={Style['code']}>100233</p>
              </div>
              <button>马上抢</button>
            </div>
          </div>
        </div>
        <div className={Style['new']}>
          <div className={Style['season-title']}>
            <span className={Style['new-back']}></span>
            <span className={Style['text']}>新品速递</span>
            <span className={Style['new-back']}></span>
          </div>
          <div className={Style['img-container']}>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <p className={Style['text-wrapper']}>
                <span className={Style['tag']}>[新品]</span>
                <span className={Style['name']}>测试</span>
              </p>
              <p className={Style['code']}>100222</p>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <p className={Style['text-wrapper']}>
                <span className={Style['tag']}>[新品]</span>
                <span className={Style['name']}>测试</span>
              </p>
              <p className={Style['code']}>100222</p>
            </div>
            <div className={Style['img-wrapper']}>
              <img src="/static/img/FurMCjo51W7u3R27vPKIpHF-XR1j.jpg" alt=""/>
              <p className={Style['text-wrapper']}>
                <span className={Style['tag']}>[新品]</span>
                <span className={Style['name']}>测试测试测试测试测试测试测试测试</span>
              </p>
              <p className={Style['code']}>100222</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
