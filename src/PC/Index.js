import React from 'react';

import Use from './Head/HeadUse.js';
import ShowCat from './Comm/showCat.js';
import Seach from './Comm/seach.js';
import Footer from './Comm/Footer.js';
import UseConv from './Cont/UseConve.js';
import Nav from './Cont/Nav.js';
import Banner from './Cont/banner.js';
import CustSever from './Comm/CustSever.js';


export default class PC extends React.Component{
	render(){
		return (
			<div id="PC">	
				{/*头部*/}
				<Use />
				{/*内容块*/}
				<div style={{width:'90%',margin:'0 auto',display: 'flex',flexDirection: 'column'}}>
					{/*用户工具*/}
					<UseConv />
					{/*导航栏*/}
					<Nav />
					{/*轮播图*/}
					<Banner />
					{/*服务*/}
					<CustSever />
				</div>
				{/*底部*/}
				<Footer />
				
			</div>
		);
	}
}