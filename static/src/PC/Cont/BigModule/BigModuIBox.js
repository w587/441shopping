import React from 'react';

import {Link} from 'react-router-dom'
export default class BigModuIBox extends React.Component{

	render(){	
		var BigModuItem=this.props.datas.items.map((item, index)=>{
			return (
					<Link to='/detile' key={index} className='BigModuItem'>
						<img src={item.img} />
						<h3>{item.name}</h3>
						<p style={{height:20}} className='ItemTitle'>{item.title}</p>
						<p>￥{item.price}.0</p>
						<p>{item.comm}人评价</p>
					</Link>

				)
		})
		return (
			<div className='BigModuIBox'>
				<div className='BigModuleL'>
					<img src='http://www.leishen.cn/data/afficheimg/1502664940527714147.jpg' />
				</div>
				<div className='BigModuleR'>
					{BigModuItem}
				</div>
			</div>


		)
	}
}