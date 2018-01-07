import React from 'react';
import 'antd/dist/antd.css';

import { Icon } from 'antd';
export default class Use extends React.Component{
	render(){
		return (
			<div style={{width:'100%',height:30,backgroundColor:'rgb(247, 247, 247)',borderBottom:'1px solid gray'}}>
				<div style={{cssFloat:'right',marginRight:20}}>
					<span style={{marginLeft:20}}>您好，欢迎光临441商城</span>
					<span style={{marginLeft:20,marginRight:20}}>登陆</span>|
					<span style={{marginLeft:20}}>注册</span>
					<span style={{marginLeft:20}}>我的订单</span>
					<span style={{marginLeft:20}}><Icon style={{color:'red'}} type="sound" />网站通知</span>
				</div>
			</div>
		);
	}
}