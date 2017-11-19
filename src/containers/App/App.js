import React,{Component} from 'react';
import './App.less';
import Tab from '../../components/Tab/Tab';
export default class App extends Component{
    render(){
        return (
            <div className='app'>
                <Tab/>
            </div>
        )
    }
}
