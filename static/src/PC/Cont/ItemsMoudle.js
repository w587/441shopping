import React from 'react';
var datas=require('../../data/SItem.json')
import StarItem from './StarItem.js';

export default class ItemM extends React.Component{

	render(){	
		var items=datas[0].items.map((item,index)=>{
			return (
					<div key={index} style={{cssFloat:'left'}} className='item'>
						<img style={{width:'100%',height:200}} src={item.imgs} />
						<p style={{color:'#212121',textAlign:'center'}}>{item.name}</p>
						<span style={{color:'#b0b0b0',textAlign:'left',margin:0}}>{item.itemTitle}</span>
					</div>
				)
		})
		return (
			<div className={this.props.move} 
			     style={{height:254}}>
				{items}
			</div>

		)
	}
}