import React from 'react';

import { Input,Button,Icon } from 'antd';
const Search = Input.Search;

export default class showCat extends React.Component{
	render(){
		return (
		<Button style={{
			width:150,
			cssFloat:'right',
			marginTop:20,
			height:40}} 
			size='large' 
			type="primary">
			<Icon type="shopping-cart" />
			购物车
		</Button>	
		);
	}
}