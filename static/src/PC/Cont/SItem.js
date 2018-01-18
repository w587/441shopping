import React from 'react';

import Loading from '../comm/Loading.js';
import {Link} from 'react-router-dom'


export default class SItem extends React.Component{

	render(){	
		var itemse=this.props.datss.length==0?<Loading />:
			this.props.datss.map((item,index)=>{
				return (
					<Link key={index} to={`/detile/${item.id}`}>
						<div  style={{cssFloat:'left'}} className='item'>
							<img style={{width:'100%',height:200}} src={item.good_img} />
							<p style={{color:'#212121',textAlign:'center'}}>{item.good_name}</p>
							<span style={{color:'#b0b0b0',textAlign:'left',margin:0}}>{item.good_title}</span>
						</div>
					</Link>
					)
			})
		return (
			<div className={this.props.move} 
			     style={{height:254}}>
				{itemse}
			</div>

		)
	}
}