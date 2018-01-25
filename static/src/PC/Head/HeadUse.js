import React from 'react';
import 'antd/dist/antd.css';
import ShowCat from '../comm/ShowCat.js';
import UseModal from '../comm/UseModal.js';

import { Menu, 
	Dropdown, 
	Icon, 
	message,
	Input,
	Modal, 
	Button, 
	Col, 
	Select,
	InputNumber, 
	DatePicker, 
	AutoComplete, 
	Cascader } from 'antd';
	const InputGroup = Input.Group;

require('../../styless/PC/comm/HeadUse.css')


export default class Use extends React.Component{

	constructor(){
		super();
		this.state = { 
			visible: false ,
			dataSource: [],
			states:0
		}

	}

  	showModal(index){
  	  this.setState({
  	    visible: true,
  	    states:index
  	  });
  	}

  	handleOk(e){
  	  this.setState({
  	    visible: false,
  	  });
  	}

  	handleCancel(e){
  	  this.setState({
  	    visible: false,
  	  });
  	}

  	change(useState){
  		this.props.change(useState)
  	}
	render(){
		console.log('xx',this.props.useState)
		var Block=this.props.useState==''
		?<div>
		 	<a onClick={this.showModal.bind(this,2)} style={{marginLeft:20,marginRight:20,color:'rgb(180,180,180)',lineHeight:"40px"}}>登陆</a>
		 	<span style={{color:'rgb(180,180,180)',lineHeight:"40px"}}>|</span>
		 	<a onClick={this.showModal.bind(this,1)} style={{marginLeft:20,color:'rgb(180,180,180)',lineHeight:"40px"}}>注册</a>
		 </div>
		:<span style={{color:'rgb(255,255,255)'}}>{this.props.useState}</span>

		return (
			<div style={{width:'100%',height:40,backgroundColor:'rgb(30,30,30)',borderBottom:'1px solid gray'}}>
				<div className='HeadUseBox'>
					<span style={{marginLeft:20,color:'rgb(180,180,180)',lineHeight:"40px"}}>您好，欢迎光临441商城</span>
					{Block}
			        <UseModal change={this.change.bind(this)} stase={this.state.states} visible={this.state.visible} onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}/>

					<ShowCat />
				</div>
			</div>
		)
		
	}
}