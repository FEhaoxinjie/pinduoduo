import React,{Component} from 'react';
import './Cart.less';
export default class Cart extends Component{
    render(){
        return (
            <div>
                <div className="header">
                    <div class="head-back-box">
                        <i className="iconfont icon-fanhui">

                        </i>
                    </div>
                    <div class="head-title">购物车</div>
                    <i className="iconfont icon-zhuye">

                    </i>
                </div>
                <div className="time">
                    <i className="iconfont icon-shijian"></i>
                    <div class="timer-text">18:40.2</div>
                    <div class="clock-msg">结算时间结束后，商品可能被抢空，请尽快结算</div>
                </div>
                <div className="commodity">
                    <div className="commodity-top">
                        <div class="check-box-un-checked"></div>
                        <div class="group-title">第三方国际发货</div>
                    </div>
                    <div className="commodity-content">
                        <div className="choice">

                        </div>
                        <div className="box-content">
                            <img src="" alt=""/>
                            <span>COACH 蔻驰 红色女士手提包</span>
                            <span className="two">粉红配红色 33*13*23cm</span>
                            <span className="third">x1</span>
                            <span className="four">¥1399</span>
                            <span className="fifth">编辑</span>
                        </div>

                        <div className="commodity-bottom">
                            <i className="iconfont icon-mian"></i>
                            <p>已享商家包邮</p>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    <div className="choice">
                    </div>
                    <span className="select">全选</span>
                    <span className="total">合计</span>
                    <span className="money">1399</span>
                    <div className="settlement">去结算(1)</div>
                </div>
            </div>
        )
    }
}
