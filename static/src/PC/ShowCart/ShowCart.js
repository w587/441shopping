import React from 'react';

import {Link} from 'react-router-dom'

import Title from './Title.js';
import Tables from './Table.js';

import Footer from '../Comm/Footer.js';
require('../../styless/PC/Detail/detail.css')

export default class ShowCart extends React.Component{


	


	render(){
		return (
			<div>

				{/*标题*/}
				<Title />

				{/*列表*/}
				<Tables />
						
				{/*底部*/}
				<Footer />
			</div>
		);
	}


}