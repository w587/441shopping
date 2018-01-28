import React from 'react';

import { Flex, WhiteSpace,Icon } from 'antd-mobile';

export default class MyMsg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }

  render() {
    return (
         <div id='MyMsg'>
          {/*用户信息*/}
          <div style={{width:'100%',height:200,backgroundColor:'red',backgroundImage:'url("http://m.leishen.cn/themes/default/images/member-photo-img.jpg")'}}>
             <Flex style={{paddingTop:20}} direction='column' justify="center">
              <img className="inline" style={{width:100,height:100,borderRadius:"50%",backgroundColor:'red'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517139982731&di=a015fb92746aebb51a697780c5818a69&imgtype=0&src=http%3A%2F%2Fwww.time100.cn%2Fimages%2Ftime100%2Fuser_upload%2F20120119%2F13269499002-thumb-thumb1.jpg' />
              <span style={{fontSize:20,color:'white'}}>user</span>
             </Flex>
          </div>
          {/*订单*/}
          <Flex style={{width:'100%',height:40,backgroundColor:'white'}} justify='between'>

            <div style={{marginTop:10}} className="inline">
              <img style={{height:30}} src='http://p2wfdrdf1.bkt.clouddn.com/order.png' />
              <span style={{fontSize:15,fontWeight:'bold',marginLeft:5}}>我的订单</span>
            </div>

            <Flex className="inline">
                <span style={{fontSize:15,fontWeight:'bold'}}>全部订单</span>
                <Icon style={{fontSize:20}} size='md' type="right" />
            </Flex>
          </Flex>

         <Flex style={{marginTop:1,width:'100%',height:80,backgroundColor:'white'}} justify='around'>
            <Flex direction='column' justify="center" className="inline">
              <img style={{width:50,height:50}} src='http://p2wfdrdf1.bkt.clouddn.com/payment.png' />
              <span>待付款</span>
            </Flex>

             <Flex direction='column' justify="center" className="inline">
              <img style={{width:50,height:50}} src='http://p2wfdrdf1.bkt.clouddn.com/goods.png' />
              <span>待收货</span>
            </Flex>

             <Flex direction='column' justify="center" className="inline">
              <img style={{width:50,height:50}} src='http://p2wfdrdf1.bkt.clouddn.com/comms.png' />
              <span>待评价</span>
            </Flex>
         </Flex>

         </div>
    );
  }
}
