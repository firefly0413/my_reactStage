import * as types from '../constants/index'

const initialState = {
    num:1,
}

const page2 = (state = initialState,action) => {
    let {type,data} = action;
    switch(type){
        case types.ADD_NUMBER:
            return {...state,...data};
        default:
            return state;
    }
}

export default page2;