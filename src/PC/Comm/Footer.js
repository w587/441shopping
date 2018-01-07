import React from 'react';

require('../../styless/PC/comm/Footer.css')

export default class Footer extends React.Component{
	render(){
		return (
			<div className='Footer' style={{width:"100%",marginTop:30,borderTop:'1px solid black'}}>
				<span>Copyright 2007 - 2016 v 京ICP证10xxxx号 京公网安备1101150200xxxx号 出版物经营许可证新出发京批字第直1xxxx8号</span>
				<span>441(软院)科技有限公司</span>
				<div className='FooterImg'>
					<img src='https://www.3658mall.com/themes/3658mall/images/t0.gif' />
					<img src='https://www.3658mall.com/themes/3658mall/images/t5.gif' />
					<img src='https://www.3658mall.com/themes/3658mall/images/t3.gif.png' />
					<img src='https://www.3658mall.com/themes/3658mall/images/t2.gif' />
				</div>
			</div>	
		);
	}
}