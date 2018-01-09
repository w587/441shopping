import React from 'react';
import { Carousel,Icon } from 'antd';


var datas=require('../../data/LeftMenu.json')

export default class MenuItemBox extends React.Component{
	render(){
		var MenuItem=datas[this.props.indexs].title.map((item,index)=>{
			var Items=item.items.map((it,id)=>{
				return (
						<div key={id} style={{width:230,height:60,padding:'0 10px'}}>
							<img style={{width:50,height:50}} src={it.imgsrc} />
							<span style={{fontSize:15,marginLeft:10}}>{it.name}</span>
						</div>
					)
			})

			return (
					<div key={index} className='MenuItem'>
						<p style={{width:'100%',backgroundColor:'white',height:30}}>
							<span style={{fontWeight:'bold',lineHeight:'30px'}}>{item.name}</span>
							<Icon style={{cssFloat:'right',lineHeight:'30px'}} type="right" />
						</p>
						{Items}
					</div>
				)
		})
		
		return (
			<div className='MenuItemBox' 
			style={{width:480,
			height:500,
			backgroundColor:'white',
			marginLeft:3}}>
				{MenuItem}
			</div>
		);
	}
	Over(index){
		var that=this;
		return ()=>{
			this.setState({
				index:index
			})
		}
	}
}