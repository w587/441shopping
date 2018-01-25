import React from 'react';
import 'antd/dist/antd.css';
import Regist from './Regist.js';
import Login from './Login.js';

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

export default class UseModal extends React.Component{



	constructor(){
		super();
		this.state = { 
			visible: false ,
			dataSource: [],
		}

	}

  	handleOk(e){
  	  this.props.onOk();
  	}

  	handleCancel(e){
  	 this.props.onCancel();
  	}

  	change(useState){
  		this.props.change(useState)
  	}
	render(){
		var forms=this.props.stase==1
		?<Regist onOk={this.handleOk.bind(this)}/>
		:<Login change={this.change.bind(this)} onOk={this.handleOk.bind(this)}/>

		return (
			<Modal
			  title="注册"
			  visible={this.props.visible}
			  onOk={this.handleOk.bind(this)}
			  onCancel={this.handleCancel.bind(this)}
			>
			  {/*注册表单*/}
			 {forms}
			</Modal>
		)
		
	}
}