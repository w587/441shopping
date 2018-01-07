import React from 'react';

import { Input,Button,Icon } from 'antd';
const Search = Input.Search;

export default class seach extends React.Component{
	render(){
		return (
			<div style={{
				width:'30%',
				cssFloat:'right',
				marginTop:20,
				marginRight:20}}>
				<Search 
				placeholder="T恤" 
				enterButton="搜索" 
				size="large" />
			</div>	
		);
	}
}