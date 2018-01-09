import React from 'react';

import { Input,Button,Icon,Menu, Dropdown, message } from 'antd';
const Search = Input.Search;

require('../../styless/PC/Cont/Nav.css')

var navData=require('../../data/nav.json')

export default class Nav extends React.Component{
	render(){

		var Drop=navData.map((item,index)=>{
			return (
  				  <a key={index} style={{color:'black',fontSize:15,fontWeight:'bold'}} className="ant-dropdown-link" href="#">
  				   {item.name}
  				  </a>
				)
		})

		return (
			<div style={{width:'100%',
			display: 'flex',
			flexDirection: 'row',
			alignItems:'center'}}>
					
					<div className='nav'>
						<span style={{
							height:30,
							backgroundColor:'IndianRed',
							color:'white',
							width:200,
							lineHeight:'30px',
							paddingLeft:20,
							paddingRight:20}}><span>全部分类</span><Icon style={{cssFloat:'right',lineHeight:'30px'}} type="caret-down" /></span>
						{Drop}
					</div>
			</div>
		);
	}
}