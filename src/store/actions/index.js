import * as types from '../actionTypes';

export default {
    init(payload) {
        return {
            type: types.INIT,
            payload
        }
    }
}