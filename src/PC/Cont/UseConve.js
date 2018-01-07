import React from 'react';


import ShowCat from '../Comm/showCat.js';
import Seach from '../Comm/seach.js';

import { Input,Button,Icon } from 'antd';
const Search = Input.Search;

export default class UseConv extends React.Component{
	render(){
		return (
			<div style={{width:'100%'}}>
				{/*购物车*/}
				<ShowCat />
				{/*搜索*/}
				<Seach />
			</div>
		);
	}
}