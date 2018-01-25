import React from 'react';


import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs2 = [
  { title: '详情', sub: '1' },
  { title: '规格', sub: '2' },
  { title: '用户评论', sub: '3' },
  { title: '商品提问', sub: '4' },
];

export default class ParTabs extends React.Component {

  constructor(){
  	super();
  	this.state={
      
  	}
  }

  render() {

   return(
       <Tabs tabs={tabs2}
      initialPage={0}
      tabBarPosition="top"
      renderTab={tab => <span>{tab.title}</span>}
      style={{marginTop:20,backgroundColor:'rgb(245, 245, 249)'}}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <img style={{width:'100%'}} src='http://www.leishen.cn/images/upload/20170812/1502519194551874.jpg' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px' }}>
       规格参数
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px' }}>
        评论
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px' }}>
        提问
      </div>
    </Tabs>
    )
  }

}
