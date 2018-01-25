import React from 'react';

import { Flex, WhiteSpace } from 'antd-mobile';

export default class Top extends React.Component {

  constructor(){
  	super();
  	this.state={
      
  	}
  }


  render() {
   
    return (
    <Flex justify="between" style={{position :'absolute',zIndex:10,top:0,width:'100%',paddingLeft:20,paddingRight:20}}>
      <div style={{fontSize:13,fontWeight:'bold',color:'black', margin:0,textAlign:'center',lineHeight:'40px',backgroundColor:'rgba(255, 255, 255,0)'}} className="inline" >
        <img onClick={this.GoBack.bind(this)} style={{width:20,height:20}} src='http://p2wfdrdf1.bkt.clouddn.com/GoBack.png' /> 
      </div>
      <div style={{fontSize:13,fontWeight:'bold',color:'black', margin:0,textAlign:'center',lineHeight:'40px',backgroundColor:'rgba(255, 255, 255,0)'}} className="inline" >
        <img style={{width:20,height:20}} src='http://p2wfdrdf1.bkt.clouddn.com/home.svg' /> 
      </div>
    </Flex>

    );
  }

  GoBack(){
    this.props.GoBack()
  }

}

