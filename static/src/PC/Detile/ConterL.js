import React from 'react';

var DetailData=require('../../data/Detail.json')
require('../../styless/PC/Detail/ConterL.css')
export default class ConterL extends React.Component{
	
	constructor(){
		super();
		this.state={
			index:0,
			over:false,
			X:0,
			Y:0
		}
	}

	render(){
		
		var Item=DetailData.map((item, index)=>{
			return (
					<li key={index} onMouseOver={this.over(index)}><img src={item.sma_img} /></li>
				)
		})

		var overOk=this.state.over?{
			'display':'block',
			'left':this.state.X,
			'top':this.state.Y
		}:{
			'display':'none'
		}

		var bigok=this.state.over?{
			'display':'block',
			
		}:{
			'display':'none'
		}

		var bigs={'marginLeft':(-this.state.X+110)*2.7,
		'marginTop':(-this.state.Y+200)*1.6 }

		return (	
  			<div className='ConterL' >
  						
  						<div className='ConterL_T' 
  						onMouseMove={this.Bover.bind(this)}
  						onMouseLeave={this.Bleave.bind(this)}
  						>	
  							<div style={overOk} className='MoveBlock' ></div>
  			
  							<img src={DetailData[this.state.index].nor_img} />
  						</div>
  						<div className='ConterL_B'>
  							<ul>
  								{Item}
  							</ul>
  						</div>
  						<div style={bigok} className='ConterL_Big'>
  							<img style={bigs} src={DetailData[this.state.index].big_img} />
  						</div>
  			</div>		
		);
	}

	over(index){
		
		return ()=>{
			this.setState({
				index:index
			})
		}
	}

	Bover(e){
		if (e.pageX-125<=115) {
			var eX=115
		}else if(e.pageX-125>=221){
			var eX=221
		}else{var eX=e.pageX-125}



		if(e.pageY-125>=330){
			var eY=330
		}else if(e.pageY-125<=227){
			var eY=227
		}else{var eY=e.pageY-125}
		
		this.setState({
			over:true,
			X:eX,
			Y:eY
		})
	}

	Bleave(){
		this.setState({
			over:false

		})
	}
	
	
}
