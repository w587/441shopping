import React from 'react';

import Use from '../Head/HeadUse.js';
import Footer from '../Comm/Footer.js';
import UseConv from '../Cont/UseConve.js';
import ConterL from './ConterL.js';
import ConterR from './ConterR.js';
require('../../styless/PC/Detail/detail.css')

export default class Detile extends React.Component{
	render(){
		return (
			<div>
				<Use />
				{/*内容块*/}
				<div style={{width:'90%',margin:'0 auto',display: 'flex',flexDirection: 'column'}}>
					{/*用户工具*/}
					<UseConv />
					<div className='DetailConter' >
						<ConterL />
						<ConterR />
					</div>
				</div>
				{/*底部*/}
				<Footer />
			</div>
		);
	}
}