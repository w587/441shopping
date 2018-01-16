import React from 'react';

import {Link} from 'react-router-dom'

import TableItem from './TablesItem.js'

require('../../styless/PC/Detail/table.css')

import { Checkbox, Row, Col,InputNumber } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = [];

var datas=[
      {"id":0,"name":"雷神911Targa-T6D","img":"http://www.leishen.cn/images/201712/thumb_img/501_thumb_G_1512686751773.jpg","price":999,"num":"2","prices":1998},
      {"id":1,"name":"雷神911Targa-T6D","img":"http://www.leishen.cn/images/201712/thumb_img/501_thumb_G_1512686751773.jpg","price":999,"num":"2","prices":1998},
      {"id":2,"name":"雷神911Targa-T6D","img":"http://www.leishen.cn/images/201712/thumb_img/501_thumb_G_1512686751773.jpg","price":999,"num":"2","prices":1998},
      {"id":3,"name":"雷神911Targa-T6D","img":"http://www.leishen.cn/images/201712/thumb_img/501_thumb_G_1512686751773.jpg","price":999,"num":"2","prices":1998},
      {"id":4,"name":"雷神911Targa-T6D","img":"http://www.leishen.cn/images/201712/thumb_img/501_thumb_G_1512686751773.jpg","price":999,"num":"2","prices":1998}
  ]

export default class ShowCart extends React.Component{
  constructor(){
    super();
    this.state={
      checkedList: [],
        indeterminate: true,
        checkAll: false,
        money:0
    }
  }

  render(){
    var items=datas.map((item,index)=>{
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
      var m=0;
      checkedList==[]?0:
      checkedList.forEach(function(item,index){
        m+=parseInt(datas[item].prices)
      })
      
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < datas.length),
        checkAll: checkedList.length === datas.length,
        money:m
      });
    }

    onCheckAllChange(e){
      var m=0;
      var def=e.target.checked ? datas.map((item,index)=>{
            m+=item.prices
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