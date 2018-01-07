import React from 'react';

import { Input,Button,Icon,Menu, Dropdown, message } from 'antd';
const Search = Input.Search;

require('../../styless/PC/Cont/Nav.css')

var navData=require('../../data/nav.json')

export default class Nav extends React.Component{
	render(){

		var Drop=navData.map((item,index)=>{
			var Drop=item.item.map((it,id)=>{
  				 return <Menu.Item key={id} style={{textAlign:'center'}}>{it}</Menu.Item>
			})

			var menu=(<Menu>{Drop}</Menu>)

			return (
				<Dropdown key={index} style={{width:50}} overlay={menu}>
  				  <a  className="ant-dropdown-link" href="#">
  				   {item.name}
  				  </a>
  				</Dropdown>
				)
		})

		return (
			<div style={{width:'100%',display: 'flex',flexDirection: 'row',alignItems:'center'}}>
					<div style={{width:'20%'}}>
						<img style={{width:'100%',height:'100px'}} src='./src/imges/logo.jpg' />
					</div>
					<div className='nav'>
						<a className="ant-dropdown-link" href="#">
  					    首页
  					  	</a>
						{Drop}
						<a className="ant-dropdown-link" href="#">
  						    私人定制
  						</a>
					</div>
			</div>
		);
	}
}