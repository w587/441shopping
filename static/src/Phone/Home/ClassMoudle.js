import React from 'react';
import Title from '../general/Title.js';

import { Flex, WhiteSpace } from 'antd-mobile';
var datas=[{"imgsrc":"","title":"911系列"}]
export default class ClassMoudle extends React.Component {

  render() {
    return (
       <div id='ClassMoudle'>
          {/*小模块标题*/}
          <Title data={datas}/>
          <Flex  wrap="wrap" style={{marginTop:30}}>
          <div style={{width:'100%'}}>
            <img src="http://www.leishen.cn/data/mobile_ad/1489083789201117950.jpg" width="100%" />
          </div>

          <Flex justify="around" wrap="nowrap" style={{width:'100%'}}>
            <img style={{borderRight:'1px solid #333333'}} src="http://www.leishen.cn/data/mobile_ad/1510529986793550923.jpg" width="50%" />
            <img style={{borderRight:'1px solid #333333'}} src="http://www.leishen.cn/data/mobile_ad/1505525556846372608.jpg" width="25%" />
            <img src="http://www.leishen.cn/data/mobile_ad/1495409426006253378.jpg" width="25%" />
          </Flex>
        </Flex>
       </div>

    );
  }
}
