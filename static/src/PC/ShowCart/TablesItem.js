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

  render(){
    console.log(this.props.datas.price*this.props.datas.num)
    
    return (
         <Row type="flex" justify="space-between" align="middle">
           <Col span={3.5}>
             <Checkbox value={this.props.datas.id}></Checkbox>
           </Col>
           <Col span={3.5} >{this.props.datas.name}</Col>
           <Col span={3.5} ><img style={{width:100,height:100}} src={this.props.datas.img} /></Col>
           <Col span={3.5} >{this.props.datas.price}.00</Col>
           <Col span={3.5}><InputNumber size="large" min={1} max={10} defaultValue={this.props.datas.num} onChange={this.changes.bind(this)}/></Col>
           <Col span={3.5}>{this.state.money}.00</Col>
           <Col span={3.5} >X</Col>
         </Row>
    );
  }
  changes(value){
    console.log('value',value)
  }
}