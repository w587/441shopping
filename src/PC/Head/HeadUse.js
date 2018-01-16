import React from 'react';
import 'antd/dist/antd.css';
import ShowCat from '../comm/ShowCat.js';

import { Menu, Dropdown, Icon, message,Input  } from 'antd';

require('../../styless/PC/comm/HeadUse.css')


export default class Use extends React.Component{
	render(){
		return (
			<div style={{width:'100%',height:40,backgroundColor:'rgb(30,30,30)',borderBottom:'1px solid gray'}}>
				<div className='HeadUseBox'>
					<span style={{marginLeft:20,color:'rgb(180,180,180)',lineHeight:"40px"}}>您好，欢迎光临441商城</span>
					<span style={{marginLeft:20,marginRight:20,color:'rgb(180,180,180)',lineHeight:"40px"}}>登陆</span>
					<span style={{color:'rgb(180,180,180)',lineHeight:"40px"}}>|</span>
					<span style={{marginLeft:20,color:'rgb(180,180,180)',lineHeight:"40px"}}>注册</span>
					<ShowCat />
				</div>
			</div>
		)
		
	}
}