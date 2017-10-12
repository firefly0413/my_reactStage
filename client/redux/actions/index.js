import * as types from '../constants/index'
import fetchApi from '../../util/fetchApi'

export const update = (data)=>{
    return {
        type:types.DO_UPDATE,
        data:data
    }
}

export const addNumber = (data)=>{
    data.num++;
    return {
        type:types.ADD_NUMBER,
        data:data
    }
}

export const doSearch = (data) => dispatch => {

    fetchApi({
        url:'https://test-kitgp-dmzstg1.pingan.com.cn:1082/jkkit-gp/service',
        method:'post',
        data:{a:1,b:2},
        success:(data)=>{
            dispatch(update({url:data.responseCode}))
        }
    })
}