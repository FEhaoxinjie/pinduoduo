import React,{Component} from 'react';
import HomeGoods from "../../components/HomeGoods/HomeGoods";
export default class Home extends Component{
    render(){
        return (
            <div>
                <ul>
                    <HomeGoods/>
                </ul>
            </div>
        )
    }
}
