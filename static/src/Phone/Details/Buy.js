import React from 'react';

import { Flex, WhiteSpace } from 'antd-mobile';

export default class Buy extends React.Component {

  constructor(){
  	super();
  	this.state={
      
  	}
  }

  render() {
   
    return (
    <Flex style={{position :'fixed',zIndex:10,bottom:0,width:'100%'}} justify="center">
      <Flex.Item style={{fontSize:13,fontWeight:'bold',color:'white', margin:0,textAlign:'center',height:50,lineHeight:'50px',backgroundColor:'rgba(71, 71, 71,0.8)'}} className="inline" >
        在线客服
      </Flex.Item>
      <Flex.Item style={{fontSize:13,fontWeight:'bold',color:'white', margin:0,textAlign:'center',height:50,lineHeight:'50px',backgroundColor:'rgba(71, 71, 71,0.8)'}} className="inline" >
        购物车
      </Flex.Item>
      <Flex.Item style={{fontSize:13,fontWeight:'bold',color:'white', margin:0,textAlign:'center',height:50,lineHeight:'50px',backgroundColor:'rgb(232, 95, 11)'}} className="inline" >
        加入购物车
      </Flex.Item>
      <Flex.Item style={{fontSize:13,fontWeight:'bold',color:'white', margin:0,textAlign:'center',height:50,lineHeight:'50px',backgroundColor:'rgb(170, 3, 17)'}} className="inline" >
        立即购买
      </Flex.Item>
    </Flex>

    );
  }



}

