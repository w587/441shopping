import React from 'react';

import { TabBar } from 'antd-mobile';

import ShopList from './ShopList.js';

export default class ShowCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }

  render() {
    return (
         <div className='ShopCart'>
          <div style={{width:'100%',height:50,backgroundColor:'red'}} className='ShopTitle'>
            <p style={{textAlign:'center',fontSize:20,color:'white',fontWeight:'bold',lineHeight:'50px'}}>购物车</p>
          </div>

          <ShopList />
         </div>
    );
  }
}
