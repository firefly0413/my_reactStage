import {hashHistory} from 'react-router'
import React, { Component } from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import PaInput from 'components/PaInput';
import Title from '../components/Title'
import * as actions from '../redux/actions/index'
import '../styles/pages/test.scss'
import styled from 'styled-components'

//算rem的值
const r = (px) => {
	return px?px/parseFloat(document.documentElement.style.fontSize)+'rem':0;
}

const Footer = styled.div`
	width:100%;
	height:${r(45)};
	display:flex;
	position:fixed;
	bottom:0;
	border-top:1px solid #ddd;
`;
const Btn = styled.div`
	width:50%;
	height:100%;
	background:${props=>props.primary?'#09f':'#fff'};
	color:${props=>props.primary?'#fff':'#333'};
	text-align:center;
	line-height:${r(45)};
`;

class Test extends Component {
	componentDidMount(){
        console.log(this.props);
    }
	render() {
        const {data:{results,url}} = this.props;
        let query = this.props.location.query;
        return (
			<div className="index-page">
				<h3>测试页面</h3>
				<Title>hello world</Title>
				<p>id:<span>{query.id}</span></p>
				<p>orderNum:<span>{query.orderNum}</span></p>

				<PaInput title="input测试" regExp={/^\d+$/} warnMsg="请输入数字" required={false} value="123" />

				<div className="btn" onClick={()=>{this.doSearch()}}>测试请求</div>
				<div className="response">返回code：{url}</div>
				<h2 onClick={()=>{this.toSimple()}}>去 simple</h2>

				<Footer>
					<Btn>左边</Btn>
					<Btn primary>右边</Btn>
				</Footer>
			</div>
		);
	}
    toSimple(){
        hashHistory.push('simple');
	}
    doLink(){
        hashHistory.push('index');
    }
    doSearch(){
    	//在props上找到合并后的action，直接调用即可
    	let {doSearch } = this.props.actions;
        doSearch({a:1,b:2});
    }
}


const mapState = (state) => ({data:state.root.page1});

const mapDispatch = (dispatch) => ({
    //bindActionCreators:把 actionCreator 转成拥有同名 keys 的对象，但使用 dispatch 把每个 actionCreator 包围起来，这样可以直接调用它们
    actions:bindActionCreators(actions,dispatch)
})

export default connect(mapState,mapDispatch)(Test);