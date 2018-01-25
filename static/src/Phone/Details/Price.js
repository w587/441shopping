import React from 'react';

import { Flex, WhiteSpace, List, InputItem, } from 'antd-mobile';
import { createForm } from 'rc-form';
 class Price extends React.Component {

  constructor(){
  	super();
  	this.state={
      num:1
  	}
  }
  
  onAdd(){
    var n=parseInt(this.state.num)+1 
    if (n>=10) {
      n=10
    }
    this.setState({
      num:n
    })
  }

  onReduce(){
    var n=parseInt(this.state.num)-1 
    if (n<=0) {
      n=0
    }
    this.setState({
      num:n
    })
  }
  render() {
    const { getFieldProps } = this.props.form;

  	var data=this.props.data
    return (
     	<Flex style={{padding:10,borderBottom:"1px solid gray"}} align='center' justify="between">
          <span style={{color:'red'}}>￥  <span style={{fontSize:25,fontWeight:'bold'}}>{this.props.data.price}.0</span></span>
          
          <div>
            <button onClick={this.onAdd.bind(this)} style={{height:30,marginTop:1}}>+</button>
            <input value={this.state.num} style={{width:50,height:30,textAlign:'center'}}></input>
            <button onClick={this.onReduce.bind(this)} style={{height:30,marginTop:1}}>-</button>
          </div>
          
          <span>库存：{this.props.data.inven}</span>
        </Flex>

    );
  }



}


Price = createForm()(Price);
module.exports = Price
