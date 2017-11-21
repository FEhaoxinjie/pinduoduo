import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.less';
import Tab from '../../components/Tab/Tab';
import Home from "../Home/Home";
import Demo from "../Demo/Demo";
import Cart from "../Cart/Cart";
import Yiqituan from "../Yiqituan/Yiqituan";
import Profile from "../Profile/Profile";
import test from '../../api/test';
export default class App extends Component {
    componentDidMount() {
        test('/api/cartlist', {
            tel: 13333333333,
            data: {title: '意大利款中空男鞋', style: '洒红色 40', count: 1, price: 35, initPrice: 35}
        }).then(res=>console.log(res))
    }

    render() {
        return (
            <Router>
                <div className='app'>
                    <Tab/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/demo' component={Demo}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/yiqituan' component={Yiqituan}/>
                    <Route path='/profile' component={Profile}/>
                </div>
            </Router>
        )
    }
}
