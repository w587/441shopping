import React from 'react';

import Use from '../Head/HeadUse.js';
import Footer from '../Comm/Footer.js';
import UseConv from '../Cont/UseConve.js';
import Nav from '../Cont/Nav.js';
import StarItem from '../Cont/StarItem.js';
import BannerBox from '../Cont/BannerBox.js';
import BigModule from '../Cont/BigModule.js';
import CustSever from '../Comm/CustSever.js';

var datas=require('../../data/SItem.json')

export default class Index extends React.Component{
	componentWillMount(){
		var than=this
      	console.log('componentWillMount');

      	fetch(`http://127.0.0.1:3000/PC?name=1`).then((response)=>{
		  return response.json();
		}).then((data)=>{
		 	console.log(data)
		})

  	}
  	 //组件是否要被重新渲染
	  shouldComponentUpdate(){
	      console.log('shouldComponentUpdate');
	      return true;
	  }
	  //组件将要被重新渲染
	  componentWillUpdate(){
	      console.log('componentWillUpdate');
	  }
	   //组件已经被重新渲染
	   componentDidUpdate(){
	       console.log('componentDidUpdate');
	   }
	  //组件将要接收到新属性
	  componnentWillReceiveProps(){
	      console.log('componnentWillReceiveProps');
	  }
	render(){
		
		return (
			<div>
				<Use />
				{/*内容块*/}
				<div style={{width:'90%',margin:'0 auto',display: 'flex',flexDirection: 'column'}}>
					{/*用户工具*/}
					<UseConv />
					{/*导航栏*/}
					<Nav />
					{/*轮播图*/}
					<BannerBox />
					{/*明星单品*/}
					<StarItem datas={datas[0]} index={1}/>
					{/*文化周边*/}
					<BigModule />
					{/*游戏台式机*/}
					<StarItem datas={datas[1]} index={4}/>
					{/*为您精选*/}
					<StarItem datas={datas[2]} index={1}/>
					{/*服务*/}
					<CustSever />
				</div>
				{/*底部*/}
				<Footer />
			</div>
		);
	}
}