import React from 'react';

import {Link} from 'react-router-dom'
import Loading from '../../comm/Loading.js';


export default class BigModuIBox extends React.Component{


	render(){	
		
		var items=this.props.datass.length==0?<Loading />:
				  this.props.datass.map((item, index)=>{
						return (
								<Link to={`/detile/${item.id}`} key={index} className='BigModuItem'>
									<img src={item.good_img} />
									<h3>{item.good_name}</h3>
									<p style={{height:20}} className='ItemTitle'>{item.good_title}</p>
									<p>￥{item.good_price}.0</p>
									<p>{item.good_comm}人评价</p>
								</Link>

							)
					})
		return (
			<div className='BigModuIBox'>
				<div className='BigModuleL'>
					<img src='http://www.leishen.cn/data/afficheimg/1502664940527714147.jpg' />
				</div>
				<div className='BigModuleR'>
					{items}
				</div>
			</div>


		)
	}
}