import React from 'react';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class BigModule_Title extends React.Component{

	render(){

		var TabPanes=this.props.datas.map((item,index)=>{
			return (
					<TabPane
					tab={item.brand} 
					key={index} 
					></TabPane>
				)
		})

		return (
			<div className='title'>
				<span style={{fontSize:20,fontWeight:'bold',height:45}}>游戏笔记本</span>
				<Tabs style={{cssFloat:'right'}} defaultActiveKey="0" onChange={this.callback.bind(this)}>
  					{TabPanes}
  				</Tabs>
			</div>
		)
	}
	callback(key){
		this.props.changes(key)
	}
}