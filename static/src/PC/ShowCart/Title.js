import React from 'react';

export default class Title extends React.Component{
	render(){
		return (
			<div style={{width:'100%',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between',borderBottom:'red solid 3px'}}>
				<div style={{width:'40%',height:'100px'}}>
					<img style={{width:'50%',height:'100px'}} src='./src/imges/logo.jpg' />
					<span style={{fontSize:25,fontWeight:'bold'}}>我的购物车</span>
				</div>
				
				<div style={{marginRight:75}}>
					<span style={{fontSize:15,color:'gray'}}>登录</span>
					<span style={{marginLeft:10,marginRight:10}}>|</span>
					<span style={{fontSize:15,color:'gray'}}>注册</span>
				</div>
			</div>
		);
	}
}