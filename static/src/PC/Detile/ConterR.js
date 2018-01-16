import React from 'react';
require('../../styless/PC/Detail/ConterR.css')
import { Button } from 'antd';
import {Link} from 'react-router-dom'
var Datail=require('../../data/Detail/detail.json')


export default class Detail extends React.Component{
	
	render(){
		
		var Sels=Datail.map((items, index)=>{
			var itemse=items.item.map((it,id)=>{
				<li key={id+1}><span style={{textAlign:'center'}}>{it}</span></li>
			})
			return (
					<div key={index} className='selColor'>
						<span style={{height:40,marginLeft:10}}>{items}</span>
						<ul className='selColorBox' style={{marginLeft:10}}>
							{itemse}
						</ul>
					</div>
				)
		})

		return (
  			<div className='ConterR'>
  				<div>
					<div>
						<div>
							<p style={{
								font:'700 16px Arial',
    							color:' #666'
								}}>Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</p>
							<p style={{color:'#e4393c'}}>购买AppleCare+，获得原厂2年整机保修(含电池)，和多达2次意外损坏的保修服务。<a>购买勾选：保障服务、原厂保2年。</a></p>
						</div>
						<div style={{backgroundColor:'#F0F0F0',paddingBottom:30,paddingTop:20,paddingLeft:10}}>
							<p>京&nbsp;东&nbsp;价&nbsp;<span style={{color:'#e4393c',fontSize:22,fontWeight:'bold',marginLeft:10}}>￥5199.00 </span><a>降价通知</a></p>
							<p>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销 <span style={{color:'#e4393c',border:'1px solid #e4393c',marginLeft:10}}>换购  </span>购买1件可优惠换购热销商品 立即换购 >></p>
							<p style={{marginLeft:56,fontSize:12}}><span style={{color:'#e4393c',border:'1px solid #e4393c',marginLeft:10}}>满送  </span> 满19元即赠热销商品，赠完即止 详情 >></p>
							<p style={{marginLeft:66,color:'gray',fontSize:10}}>“换购” “满送” 仅可在购物车任选其一</p>
						</div>
						<div>
							<p style={{marginLeft:10,fontSize:12}}>重&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量<span style={{marginLeft:10}}>0.47kg</span></p>
						</div>
					</div>
					<div>
						<div className='selColor'>
							<span style={{height:40,marginLeft:10}}>选择颜色</span>
							<ul className='selColorBox' style={{marginLeft:10}}>
								<li ><img src='https://img11.360buyimg.com/n9/s40x40_jfs/t3073/196/1629389764/137495/265ddb40/57d11b9cNad700eeb.jpg' /><span>金色</span></li>
								<li ><img src='https://img11.360buyimg.com/n9/s40x40_jfs/t3073/196/1629389764/137495/265ddb40/57d11b9cNad700eeb.jpg' /><span>银色</span></li>
							</ul>
						</div>
						<div className='selColor'>
							<span style={{height:40,marginLeft:10}}>选择版本</span>
							<ul className='selColorBox' style={{marginLeft:10}}>
								<li ><span style={{textAlign:'center'}}>公开</span></li>
								<li ><span style={{textAlign:'center'}}>【原厂保修】</span></li>
								<li ><span style={{textAlign:'center'}}>白条版</span></li>
							</ul>
						</div>
						<div className='selColor'>
							<span style={{height:40,marginLeft:10}}>选择容量</span>
							<ul className='selColorBox' style={{marginLeft:10}}>
								<li ><span style={{textAlign:'center'}}>32GB</span></li>
								<li ><span style={{textAlign:'center'}}>128GB</span></li>
								<li ><span style={{textAlign:'center'}}>256GB</span></li>
							</ul>
						</div>
					</div>
					<div className='selCount'>
						<input style={{width:50,height:50,textAlign:'center'}} type='text' />
						<div className='NumControl'>
							<button>+</button>
							<button>-</button>
						</div>
						<Link to='/ShowCart' className='ShowCart'>加入购物车</Link>
					</div>
				</div>

  			</div>
		);
	}	
	
	
}
