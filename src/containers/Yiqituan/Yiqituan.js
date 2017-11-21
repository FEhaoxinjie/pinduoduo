import React, {Component} from 'react';
import './index.less'
export default class Yiqituan extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    url: 'http://mp5.jmstatic.com/product/003/961/3961054_std/3961054_1000_1000.jpg?v=1509955630&imageView2/2/w/440/q/90',
                    comments: 345,
                    title: '【手机专享】40片装暖贴暖宝宝贴暖身贴发热贴',
                    price: {
                        prezhe: 45.00,
                        afterzhe: 42.00,
                        tuan: 35.00
                    },

                }
            ]
        };

    }

    componentDidMount() {

    }

    render() {
        return (
            <section className="product-items">
                <ul className="product-con">
                    {
                        this.state.list.map((item, index) => (
                            <li key={index} className="product">
                                <a href="">
                                    <div className="people-number">{item.comments}万条评论</div>
                                    {/*图片*/}
                                    <div className="goods-topsmall">
                                        <img
                                            src={item.url}/>
                                    </div>
                                    {/*两人团*/}
                                    <div className="goods-middle">
                                <span className="goods-num">
                                    [2人团]
                                </span>
                                        【手机专享】500支装一次性双头棉签 家用清洁
                                    </div>
                                    {/*去开团*/}
                                    <div className="goods-foot">
                                        <div className="price-left">
                                            <span className="ct-price">¥{item.price.afterzhe}</span>
                                            <span className="sc-price">¥{item.price.prezhe}</span>
                                            <span className="jm-price">单买价¥{item.price.tuan}</span>
                                        </div>
                                        <div className="time-right timer">
                                            <span className="goods-btn">去开团</span>
                                        </div>

                                    </div>


                                </a>

                            </li>
                        ))
                    }

                </ul>

            </section>
        )
    }
}
