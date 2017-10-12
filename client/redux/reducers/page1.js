import * as types from '../constants/index'

const initialState = {
    results:[
        {serialNum:1,name:"张三",age:22,sex:"男",height:180,weight:80,enable:true},
        {serialNum:2,name:"李四",age:22,sex:"男",height:175,weight:85,enable:true},
        {serialNum:3,name:"王五",age:22,sex:"女",height:168,weight:60,enable:true},
        {serialNum:4,name:"赵六",age:22,sex:"女",height:156,weight:70,enable:true},
        {serialNum:5,name:"田七",age:22,sex:"男",height:174,weight:72,enable:true},
        {serialNum:6,name:"小明",age:22,sex:"男",height:175,weight:68,enable:true},
        {serialNum:7,name:"陈二狗",age:22,sex:"男",height:183,weight:74,enable:true}
    ],
    url:''
}

const page1 = (state = initialState,action) => {
    let {type,data} = action;
    switch(type){
        case types.DO_UPDATE:
            console.log(data);
            return {...state,...data};
        default:
            return state;
    }
}

export default page1;