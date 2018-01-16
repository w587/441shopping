import React from 'react';
import { Carousel } from 'antd';

require('../../styless/PC/Cont/banner.css')

var datas=require('../../data/banner.json')
export default class Banner extends React.Component{
	render(){

		var items=datas.map((item,index)=>{
			return (<img key={index} src={item.imgsrc} />)
		})

		return (
			<Carousel autoplay>
  			  {items}
  			</Carousel>
		)
	}
}