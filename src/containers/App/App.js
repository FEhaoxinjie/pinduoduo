import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.less';
import Tab from '../../components/Tab/Tab';
import Home from "../Home/Home";
import Demo from "../Demo/Demo";
import Cart from "../Cart/Cart";
import Yiqituan from "../Yiqituan/Yiqituan";
import Profile from "../Profile/Profile";

export default class App extends Component {
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
