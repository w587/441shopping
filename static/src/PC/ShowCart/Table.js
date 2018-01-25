import React from 'react';

import {Link} from 'react-router-dom'

import TableItem from './TablesItem.js'
import Loading from '../comm/Loading.js'

require('../../styless/PC/Detail/table.css')

import { Checkbox, Row, Col,InputNumber } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = [];



export default class ShowCart extends React.Component{
  constructor(){
    super();
    this.state={
      checkedList: [],
        indeterminate: true,
        checkAll: false,
        money:0,
        datass:[]
    }
  }

  componentWillMount(){
      fetch(`http://127.0.0.1:3333/PC/ShowCart`).then((response)=>{
        return response.json();
      }).then((data)=>{
        this.setState({
          datass:data
        })
      })
  }

  render(){
    var items=this.state.datass.length==0?<Loading />:this.state.datass.map((item,index)=>{
      return (<TableItem key={index} datas={item}/>)
    })

    return (
        <div style={{width:'90%',margin:'0 auto'}}>
          {/*表名*/}
          <div className='ShowTable' >
            <Row  type="flex" justify="space-between">
                <Col span={3}>
                    <Checkbox
                      indeterminate={this.state.indeterminate}
                      onChange={this.onCheckAllChange.bind(this)}
                      checked={this.state.checkAll}
                    >
                      全选
                    </Checkbox>
                </Col>
                <Col span={3} >
                  <span>商品</span>
                </Col>
                <Col span={3} style={{textAlign:'center'}}>
                  <span>图片</span>
                </Col>
                <Col span={3} style={{textAlign:'right'}}>
                  <span>单价</span>
                </Col>
                <Col span={3} style={{textAlign:'right'}}>
                  <span>数量</span>
                </Col>
                <Col span={3} offset={1} style={{textAlign:'right'}}>
                  <span>小计</span>
                </Col>
                <Col span={3} style={{textAlign:'right'}}>
                  <span>操作</span>
                </Col>
            </Row>   
          </div>
          {/*内容*/}          
          <CheckboxGroup defaultValue={this.state.checkedList} style={{width:'100%'}} value={this.state.checkedList} onChange={this.onChange.bind(this)} >
            {items}
          </CheckboxGroup>

          <div className='now'>
            <Link style={{width:202,height:50,backgroundColor:'gray',color:'white',fontSize:18,lineHeight:'50px',textAlign:'center'}} to='/'>继续购物</Link>
            <div className='now_now'>
              <p style={{marginRight:30}}>合计：<span style={{fontSize:30,color:'red',fontWeight:'bold'}}>{this.state.money}.00</span></p>
              <Link style={{width:202,height:50,backgroundColor:'red',color:'white',display:'block',fontSize:18,lineHeight:'50px',textAlign:'center'}} to='/'>结算</Link>
            </div>

          </div>
        </div>
    );
  }

    onChange(checkedList){

      var datas=this.state.datass

      var m=0;
      checkedList==[]?0:
      checkedList.forEach(function(item,index){
        datas.forEach(function(it,ind){
          if (it.id==item) {
            m+=parseInt(it.good_price)*parseInt(it.good_num)
          }
        })        
      })
      
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < datas.length),
        checkAll: checkedList.length === datas.length,
        money:m
      });
    }

    onCheckAllChange(e){
      var datas=this.state.datass

      var m=0;
      var def=e.target.checked ? datas.map((item,index)=>{
            m+=parseInt(item.good_price)*parseInt(item.good_num)
            return item.id
      }) : []

      this.setState({
        checkedList: def,
        indeterminate: false,
        checkAll: e.target.checked,
        money: e.target.checked?m:0
      });
    }

}