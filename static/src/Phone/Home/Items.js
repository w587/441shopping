import React from 'react';

import { Flex, WhiteSpace } from 'antd-mobile';

var computer=require('../../data/computer.json')
import {Link} from 'react-router-dom'

export default class Items extends React.Component {

  render() {
    var Lists=computer.map((item,index)=>{
      return (
        <Link style={{color:'black'}} key={index} to={`/detile/${index}`}>
          <Flex  style={{height:'142px',marginTop:3}} className='item'>
            <img style={{width:180,height:'100%'}} src={item.imgs} />
            <div style={{marginLeft:10,width:'80%'}}>
              <div>
                <span style={{fontSize:15,fontWeight:'bold'}}>{item.name}</span>
              </div>
              
              <span>{item.itemTitle}</span>
              <Flex style={{paddingRight:10}} justify="between">
                <span style={{color:'#B9000F'}}>￥<span style={{fontSize:30}}>{item.price}.0</span></span>
                <span><span style={{color:'#B9000F'}}>{item.comm}%</span> 好评</span>
              </Flex>
            </div>
          </Flex>
        </Link>
        )
    })

    return (
      <div style={{marginTop:30}}>
        {Lists}
      </div>
    );
  }
}
