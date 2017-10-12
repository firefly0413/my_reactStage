
import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import {connect } from 'react-redux'
import {update,addNumber,doSearch} from '../redux/actions/index'
import '../styles/pages/indexPage.scss'

import Switch from 'components/Swich'
import Mask from 'components/Mask'
import Toast from 'components/Toast'
let img = require('../images/react.jpeg');

import fetchApi from '../util/fetchApi'

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			visible:false
		}
	}
	componentDidMount(){
        // fetchApi({
			// url:'https://test-kitgp-dmzstg1.pingan.com.cn:1082/jkkit-gp/service',
			// method:'post',
			// data:{a:1,b:2},
			// success:(data)=>{
        //         console.log(data);
        //     },
			// error:(err)=>{
        //         console.log(err);
        //     }
        // })
    }
	render() {
        let {data} = this.props;
		const {visible} = this.state;
        return (
			<div className="index-page">
				<div className="logo">
					<img src={img} />
				</div>
				<div className="content">
					<div className="btn" onClick={()=>{this.doUpdate()}}>点击加一</div>
					<div>{data.num}</div>
					<div className="btn" onClick={()=>{this.doLink()}}>去测试页面</div>
				</div>
				<Switch active={false} onChange={(status)=>{this.showMask(status)}} />
				<Toast visible={visible} onMaskClick={()=>{this.setState({visible:false})}}>
					<p>lalala</p>
				</Toast>
				{/*<Mask type="light" visible={visible} onMaskClick={()=>{this.setState({visible:false})}} />*/}
			</div>
		);
	}
    showMask(status){
		status?this.setState({visible:true}):this.setState({visible:false})
	}
	doLink(){
		hashHistory.push({
			pathname:'test/8080',
			query:{
				id:'123',
				orderNum:'uiy897897'
			}
		})
	}
    doUpdate(){
        let {data} = this.props;
        this.props.dispatch(addNumber(data))
	}
}

function theState(state){
	return {
		data:state.root.page2
	}
}

export default connect(theState)(Index);