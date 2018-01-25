import React from 'react';

import {Link} from 'react-router-dom'

import { Checkbox, Row, Col,InputNumber } from 'antd';


export default class TableItem extends React.Component{
  constructor(){
      super();
      this.state={
        money:0
      }
    }

  componentWillMount(){
       var m=this.props.datas.good_price*this.props.datas.good_num
       this.setState({
        money:m
       })
  }


  render(){
   
    
    return (
         <Row type="flex" justify="space-between" align="middle">
           <Col span={3.5}>
             <Checkbox value={this.props.datas.id}></Checkbox>
           </Col>
           <Col span={3.5} >{this.props.datas.good_name}</Col>
           <Col span={3.5} ><img style={{width:100,height:100}} src={this.props.datas.good_img} /></Col>
           <Col span={3.5} >{this.props.datas.good_price}.00</Col>
           <Col span={3.5}><InputNumber size="large" min={1} max={10} defaultValue={this.props.datas.good_num} onChange={this.changes.bind(this)}/></Col>
           <Col span={3.5}>{this.state.money}.00</Col>
           <Col span={3.5} >X</Col>
         </Row>
    );
  }
  changes(value){
      var m=this.props.datas.price*value
      this.setState({
        money:m
      })
  }
}