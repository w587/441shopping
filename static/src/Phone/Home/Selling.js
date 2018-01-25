import React from 'react';
import Title from '../general/Title.js';

import { Flex, WhiteSpace } from 'antd-mobile';
var datas=[{"imgsrc":"http://m.leishen.cn/themes/default/images/new_index/hot_03.png","title":"热卖精选"}]
export default class Selling extends React.Component {

  render() {
    return (
       <div id='selling'>
       		{/*小模块标题*/}
         	<Title data={datas}/>
         	<Flex  wrap="wrap" style={{marginTop:30}}>
		      <div style={{width:'50%'}}>
		      	<img src="http://www.leishen.cn/data/mobile_ad/1501787186727684770.jpg" width="100%" />
		      </div>
		      	
		      <div style={{width:'50%'}}>
		      	<img src="http://www.leishen.cn/data/mobile_ad/1505525426812120756.jpg" width="100%" />
		      </div>

		      <Flex justify="around" wrap="nowrap" style={{width:'100%'}}>
		      	<img style={{borderRight:'1px solid #333333'}} src="http://www.leishen.cn/data/mobile_ad/1505525516466572565.jpg" width="25%" />
		      	<img style={{borderRight:'1px solid #333333'}} src="http://www.leishen.cn/data/mobile_ad/1510530409421029258.jpg" width="25%" />
		      	<img style={{borderRight:'1px solid #333333'}} src="http://www.leishen.cn/data/mobile_ad/1510530185289452772.jpg" width="25%" />
		      	<img src="http://www.leishen.cn/data/mobile_ad/1513127564047582070.jpg" width="25%" />
		      </Flex>
		    </Flex>
       </div>

    );
  }
}
