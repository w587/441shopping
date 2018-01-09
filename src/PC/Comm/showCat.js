import React from 'react';

import { Menu, Dropdown, Icon, message,Input} from 'antd';

const Search = Input.Search;

const menu = (
  <Menu style={{width:250}}>
    <Menu.Item style={{textAlign:'center'}} key="1">暂无商品</Menu.Item>
  </Menu>
);


export default class showCat extends React.Component{
	render(){
		return (
		<Dropdown overlay={menu}>
  		  <a className="ant-dropdown-link show_cat" href="#">
  		   <Icon type="shopping-cart" /> 购物车 (0)
  		  </a>
  		</Dropdown>
		);
	}
}