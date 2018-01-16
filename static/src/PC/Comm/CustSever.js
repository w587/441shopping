import React from 'react';

require('../../styless/PC/Footer/CustSever.css')

import { Icon,Divider  } from 'antd';

export default class CustSever extends React.Component{
	render(){

		return (
			<div style={{marginTop:40}}>
				{/*顾客服务*/}
				<div className='CustSever'>
					<div className='SeverItemBox'>
						<div className='SeverItem'>
							<Icon style={{fontSize:130,marginTop:50,color:'red'}} type="customer-service" />
							<span style={{marginTop:20,backgroundColor:"red",width:'50%',height:50,fontSize:20,lineHeight:2.5,fontWeight:'bold',color:'white'}}>7X9小时人工客服</span>
						</div>
						<div style={{width:1,height:250,borderLeft:'solid 1px rgba(10,10,10,0.3)',marginTop:30}}></div>
						<div className='SeverItem'>
							<Icon style={{fontSize:130,marginTop:50,color:'red'}} type="rocket" />
							<span style={{marginTop:20,backgroundColor:"red",width:'50%',height:50,fontSize:20,lineHeight:2.5,fontWeight:'bold',color:'white'}}>7天内极速退货</span>
						</div>
						<div style={{width:1,height:250,borderLeft:'solid 1px rgba(10,10,10,0.3)',marginTop:30}}></div>
						<div className='SeverItem'>
							<img style={{marginTop:55}} src='http://res.wx.qq.com/a/wx_fed/weixin_portal/res/static/img/5_8wy9W.png' />
							<span style={{marginTop:20,backgroundColor:"red",width:'50%',height:50,fontSize:20,lineHeight:2.5,fontWeight:'bold',color:'white'}}>加入我们</span>
						</div>
					</div>
					
					<div className='miniSever'>
						<span>关于441</span>
						|
						<span>新手指南</span>
						|
						<span>配送范围及时间</span>
						|
						<span>支付方式</span>
						|
						<span>售后服务</span>
						|
						<span>帮助中心</span>
					</div>
				</div>
			</div>
		);
	}
}