import {combineReducers} from 'redux';
import * as types from '../actionTypes';
// 以下仅为demo，
let initState={};
function initStore(state=initState,action) {
    switch (action.type){
        case types.INIT:
            return {...action.payload};
        default:
            return state;
    }
}
export default combineReducers({initStore});
