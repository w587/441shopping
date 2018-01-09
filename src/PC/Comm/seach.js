import React from 'react';

import { Input,Button,Icon } from 'antd';
const Search = Input.Search;

export default class seach extends React.Component{
	render(){
		return (
			<div className='seach' style={{
				width:'30%',
				height:50,
				marginTop:20,
				marginRight:20}}>
				 <Search
				 	size="large"
				 	style={{color:'black'}}
     				placeholder="input search text"
     				onSearch={value => console.log(value)}
     				enterButton/>
			</div>	
		);
	}
}