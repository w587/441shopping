import React from 'react';
import Title from '../general/Title.js';
import Items from './Items.js';

import { Flex, WhiteSpace } from 'antd-mobile';

var datas=[{"imgsrc":"http://m.leishen.cn/themes/default/images/new_index/heart.png","title":"猜你喜欢"}];

export default class Love extends React.Component {

  render() {
    return (
       <div id='Love'>
          {/*小模块标题*/}
          <Title data={datas}/>
          <Items />
       </div>

    );
  }
}
