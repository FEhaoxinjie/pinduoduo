import React, {Component} from 'react';
import './index.less'
import getTuan from '../../api/tuan';
export default class Yiqituan extends Component {
    componentDidMount(){
        getTuan('/api/tuan?offset=0&limit=5').then(res=>{
            this.setState({
                list:[...res.data.list]
            })
        })
    }
    constructor() {
        super();
        this.state = {list:[]};

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
