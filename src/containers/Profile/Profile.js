import React,{Component} from 'react';
import './profile.less'
export default class Profile extends Component{
    render(){
        return (
            <div className="profile">
                <div className="head-title">
                    <a className="link-back">
                        <i className="iconfont icon-houtui back"/>
                    </a>
                    <span>我的聚美</span>
                    <i className="iconfont icon-shouye home "/>
                </div>
                <div className="wrapper">
                    <div className="user-unlogin">
                        <div className="userImg">
                        </div>
                        <div className="operation">
                            <div className="operationItem">
                                <a href="" className="signUp">注册</a>
                                <span>|</span>
                                <a href="" className="login">登录</a>
                            </div>
                        </div>
                    </div>
                    <div className="fill"/>
                    <div className="order-block">
                        <div className="block-title">
                            <i className="iconfont icon-dingdan ghBook"/>
                            <span>我的订单</span>
                            <a href="">查看全部订单
                                <i className="iconfont icon-jiantou ghArrow "/>
                            </a>

                        </div>
                    </div>
                    <div className="block-content">
                        <a href="" className="block-item">
                            <i className="iconfont icon-daifukuan"/>
                            <span>代付款</span>
                        </a>
                        <a href="" className="block-item">
                            <i className="iconfont icon-daishouhuo"/>
                            <span>代收货</span>
                        </a>
                        <a href="" className="block-item">
                            <i className="iconfont icon-daipingjia"/>
                            <span>待评价</span>
                        </a>
                        <a href="" className="block-item">
                            <i className="iconfont icon-refund"/>
                            <span>退货/退款</span>
                        </a>
                    </div>
                    <div className="fill"/>
                    <div className="block-fond">
                        <div className="font-title">
                            <i className="iconfont icon-wodezichan "/>
                            <span>我的资产</span>
                        </div>
                        <div className="fond-content">
                            <a href="">
                                <span>现金券</span>
                            </a>
                            <a href="">
                                <span>红包</span>
                            </a>
                            <a href="">
                                <span>聚美余额</span>
                            </a>
                            <a href="">
                                <span>礼品卡</span>
                            </a>
                        </div>
                    </div>
                    <div className="fill"/>
                    <div className="block-list">
                        <ul>
                            <li>
                                <i className="iconfont icon-shouhoufuwu"/>
                                <span>售后服务</span>
                                <i className="iconfont icon-jiantou rightArrow"/>
                            </li>
                            <li>
                                <i className="iconfont icon-yijianfankui "/>
                                <span>意见反馈</span>
                                <i className="iconfont icon-jiantou  rightArrow"/>
                            </li>
                            <li>
                                <i className="iconfont icon-shouhuodizhi"/>
                                <span>收货地址</span>
                                <i className="iconfont icon-jiantou
                            rightArrow"/>
                            </li>
                            <li>
                                <i className="iconfont icon-tuichudenglu"/>
                                <span>退出登录</span>
                                <i className="iconfont icon-jiantou rightArrow"/>
                            </li>
                            <li>
                                <i className="iconfont icon-rexiandianhua"/>
                                <span>400-123-8888</span>
                                <i className="iconfont icon-jiantou rightArrow"/>
                            </li>
                        </ul>
                    </div>
                    <div className="hint">
                        活动期间24小时服务热线400-123-8888（免长途费)
                        拨打前请记录您的UID 0
                    </div>
                </div>
            </div>

        )
    }
}
