import React from 'react';

import { Flex, WhiteSpace } from 'antd-mobile';



export default class DetailTitle extends React.Component {

  constructor(){
  	super();
  	this.state={
      coll:false
  	}
  }
  
  render() {
    var collimg=this.state.coll
    ?<img style={{width:30,height:30}} className="inline" src='http://p2wfdrdf1.bkt.clouddn.com/collection1.png' />
    :<img style={{width:30,height:30}} className="inline" src='http://p2wfdrdf1.bkt.clouddn.com/collection.png' />
    return (
      <Flex style={{padding:10}} align='start' justify="between" id='DetailTitle'>
      	<span  style={{fontSize:20,fontWeight:'bold'}} className="inline">{this.props.data.name}</span>
        <Flex onClick={this.click.bind(this)} style={{borderLeft:'1px solid gray',paddingLeft:20}} direction='column' className="inline">
         {collimg}
          <span className="inline">收藏</span>
        </Flex>
      </Flex>

    );
  }

  click(){
    var c=!this.state.coll;
    this.setState({
      coll:c
    })
  }

}


