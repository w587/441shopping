import React from 'react';

import { Tabs, WhiteSpace } from 'antd-mobile';

var data=require('../../data/BigModuIBox.json')
const tabs = [
  { title: '游戏台式机' },
  { title: '雷神Dino' },
  { title: '雷神911' },
  { title: '雷神ST' },
  { title: '游戏专区' },
];

export default class LeftList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }


  render() {

  var items1=data[0].items.map((item, index)=>{
    return (
        <div style={{width:'50%',display: 'flex',alignItems:'center',flexDirection:'column'}} key={index}>
          <img style={{width:100,height:100}} src={item.img} />
          <p style={{textAlign:'center'}}>{item.name}</p>
         </div>
      ) 
  })

   var items2=data[1].items.map((item, index)=>{
    return (
        <div style={{width:'50%',display: 'flex',alignItems:'center',flexDirection:'column'}} key={index}>
          <img style={{width:100,height:100}} src={item.img} />
          <p style={{textAlign:'center'}}>{item.name}</p>
         </div>
      ) 
  })

   var items3=data[2].items.map((item, index)=>{
    return (
        <div style={{width:'50%',display: 'flex',alignItems:'center',flexDirection:'column'}} key={index}>
          <img style={{width:100,height:100}} src={item.img} />
          <p style={{textAlign:'center'}}>{item.name}</p>
         </div>
      ) 
  })

   var items4=data[3].items.map((item, index)=>{
    return (
        <div style={{width:'50%',display: 'flex',alignItems:'center',flexDirection:'column'}} key={index}>
          <img style={{width:100,height:100}} src={item.img} />
          <p style={{textAlign:'center'}}>{item.name}</p>
         </div>
      ) 
  })


    return (
      <div  style={{position:'absolute',width:'100%',top:0,bottom:0}}>
       <Tabs tabBarPosition='left' tabDirection="vertical" tabs={tabs} initialPage={0} useOnPan={false}>
        <div style={{ flexWrap:'wrap', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
          {items1}
        </div>
        <div style={{flexWrap:'wrap', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
         {items2}
        </div>
        <div style={{flexWrap:'wrap', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
          {items3}
        </div>
        <div style={{flexWrap:'wrap', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
          {items4}
        </div>
        <div style={{flexWrap:'wrap', display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff' }}>
          {items1}
        </div>
      </Tabs>
      </div>
    );
  }
}
