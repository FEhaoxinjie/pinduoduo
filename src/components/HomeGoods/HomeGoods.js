import React,{Component} from 'react';
import './HomeGoods.less';
export default class HomeGoods extends Component{
    render(){
        return (
            <li className="home-goods">
                <a href="#">
                    <img src="http://mp5.jmstatic.com/product/002/960/2960170_std/2960170_dx_1154_400.jpg?_t=1502790941&imageView2/2/w/800/q/90" alt=""/>
                    <div className="goodsInfo">
                        <h3 className="goods-title">AGE20'S牛奶遮瑕气垫粉底膏，透亮嫩白到尖叫！</h3>
                        <p className="priceList">
                            <span className="current-price">￥<span>156</span></span>
                            <span className="init-price">￥<span>240</span></span>
                        </p>
                        <p className="commentNum">
                            9729条评论
                        </p>
                    </div>
                </a>
            </li>
        )
    }
}
