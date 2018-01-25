import React from 'react';

import DBanner from './Banner.js';
import DTitle from './Title.js';
import Prcie from './Price.js';
import ParTabs from './ParTabs.js';
import Buy from './Buy.js';
import Top from './Top.js';

import { Flex, WhiteSpace, List, InputItem, } from 'antd-mobile';
import { createForm } from 'rc-form';
 class DetailIndex extends React.Component {

  constructor(){
  	super();
  	this.state={
      
  	}
  }
  
  handleClick () {
    this.customFocusInst.focus();
  }

  
  render() {
    const { getFieldProps } = this.props.form;
   
  	var data=this.props.data
    return (
      <div id='DetailIndex'>
        <Top GoBack={this.GoBack.bind(this)} />
        {/*轮播*/}
      	<DBanner data={data}/>
        {/*名字*/}
      	<DTitle data={data}/>
        {/*广告语*/}
        <p style={{margin:10,fontSize:15,color:'red'}}>{data.itemTitle}</p>
        {/*价格*/}
       <Prcie data={data}/>
        {/*参数*/}
       <ParTabs />
        {/*参数*/}
        <Buy />
      </div>

    );
  }

  GoBack(){
    this.props.GoBack()
  }

}


DetailIndex = createForm()(DetailIndex);
module.exports = DetailIndex