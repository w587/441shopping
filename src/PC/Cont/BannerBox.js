import React from 'react';
import { Carousel,Icon } from 'antd';

import Banner from './banner.js';
import MenuBox from './MenuBox.js';

require('../../styless/PC/Cont/MenuLeft.css')


export default class BannerBox extends React.Component{
	render(){
		return (
			<div>

				<Banner />

				<MenuBox />
			</div>
			
		);
	}

}