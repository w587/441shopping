import React from 'react';


import ShowCat from '../Comm/showCat.js';
import Seach from '../Comm/seach.js';

import { Input,Button,Icon } from 'antd';


const Search = Input.Search;

export default class UseConv extends React.Component{
	render(){
		return (
			<div className='UseConv' style={{width:'100%',alignItems:'center'}}>
				<div style={{width:'20%',cssFloat:'left',}}>
					<img style={{width:'100%',height:'200px'}} src='./src/imges/logo.jpg' />
				</div>
				{/*搜索*/}
				<Seach />
			</div>
		);
	}
}