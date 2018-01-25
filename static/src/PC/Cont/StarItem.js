import React from 'react';
import SItem from './SItem.js';

import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;

require('../../styless/PC/Cont/StarItem.css')

export default class StarItem extends React.Component{
	
	constructor(){
        super();
        this.state={
            Box:"itemBox",
            datas:[]
        }
    }

    componentWillMount(){
		var than=this
      	fetch(`http://127.0.0.1:3333/PC/StarItem?index=${this.props.index}`).then((response)=>{
		  return response.json();
		}).then((data)=>{
			
		 	this.setState({
		 		datas:data
		 	})
		})
  	}

	render(){

		return (
		<div className='StarItem'>
			
			<div className='title'>
				<span style={{fontSize:20,fontWeight:'bold'}}>{this.props.datas.title}</span>
		   		<ButtonGroup style={{cssFloat:'right'}}>
    			  <Button onClick={this.CLeft.bind(this)}><Icon type="left" /></Button>
    			  <Button onClick={this.CReft.bind(this)}><Icon type="right" /></Button>
    			</ButtonGroup>
			</div>

			<SItem datss={this.state.datas} datas={this.props.datas} move={this.state.Box}/>

		</div>
		)
	}
	CLeft(){	
		this.setState({
             Box:"itemBox moveL"
        })
	}
	CReft(){
		this.setState({
             Box:"itemBox moveR"
        })
	}
}
