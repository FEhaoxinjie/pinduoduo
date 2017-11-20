import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Tab.less'

export default class Tab extends Component {
    render() {
        return (
            <ul className='footerTab'>
                <Link to='/'><img src="http://p12.jmstatic.com/mcms/5e9e00537e4a635e36e84db81f2cc17a.png" alt=""/>
                    <span>首页</span></Link>
                <Link to='/yiqituan'><img src="http://p12.jmstatic.com/mcms/b51a66ca3ddb31ec0edbd67ea68f7589.png"
                                          alt=""/>
                    <span>拼团</span>
                </Link>
                <Link to='/cart'><img src="http://p12.jmstatic.com/mcms/77b9454e8dd41a060510a445010ac934.png" alt=""/>
                    <span>购物车</span>
                </Link>
                <Link to='/profile'><img src="http://p12.jmstatic.com/mcms/829aa091062366a9f7b93cfffaa0e681.png"
                                         alt=""/>
                    <span>个人</span>
                </Link>
            </ul>
        )
    }
}