import React from 'react';
import { Carousel,Icon } from 'antd';

import MenuItemBox from './MenuItemBox.js';

require('../../styless/PC/Cont/MenuLeft.css')

var menus=[{"name":"游戏笔记本"},
		   {"name":"游戏台式机"},
		   {"name":"游戏键鼠/耳机"},
		   {"name":"电竞箱包"},
		   {"name":"至潮服饰"},
		   {"name":"VR专区"},
		   {"name":"游戏专区"},
		   {"name":"龙谷商城"},
		   {"name":"免费试用"}]

export default class BannerBox extends React.Component{
	constructor(){
			super();
			this.state = {
				index:0,
				isOver:false
			}
		}

	render(){

		var Menu=menus.map((item,index)=>{
			return (
					<li onMouseOver={this.Over(index).bind(this)} key={index}><span>{item.name}</span><Icon type="right" /></li>
				)
		})

		var IsOver=this.state.isOver?<MenuItemBox indexs={this.state.index}/>:""
		return (
			<div className='MenuBox' onMouseLeave={this.Leave()} style={{width:700,
				height:500,
				position:'absolute',
				top:270}}>

				{/*左侧菜单*/}
				<ul className='MenuLeft' 
				style={{width:200,
				height:500,
				backgroundColor:'rgba(55,55,55,0.3)'}}>
					{Menu}
				</ul>

				{/*菜单项*/}
				{IsOver}
			</div>
			
		);
	}

	Over(index){
		var that=this;
		return ()=>{
			this.setState({
				index:index,
				isOver:true
			})
		}
	}
	
	Leave(){
		var that=this;
		return ()=>{
			this.setState({
				isOver:false
			})
		}
	}
}