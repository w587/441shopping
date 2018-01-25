import React from 'react';

import { Flex, WhiteSpace } from 'antd-mobile';


export default class Tool extends React.Component {

  render() {
    return (
        <Flex justify="around" wrap="wrap">
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_01.png' />
	      全部分类
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_02.png' />
	      我的订单
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_031.png' />
	      线下门店
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_04.png' />
	      招商分期
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_10.png' />
	      私人订制
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_06.png' />
	      在线客服
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_07.png' />
	      龙谷商城
	      </Flex>
	      <Flex direction="column" style={{width:'25%',marginTop:10,textAlign:'center'}} className="inline"  >
	      <img style={{width:'45%'}} src='http://www.leishen.cn/data/mobile_ad/main_icon_08.png' />
	      售后网点
	      </Flex>
	    </Flex>

    );
  }
}
