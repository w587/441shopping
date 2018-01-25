import React from 'react';

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

var datas=require('../../data/banner.json');

export default class Banner extends React.Component {

  render() {
    return (
       <Carousel
	     autoplay={true}
	     infinite
	     selectedIndex={0}
	     style={{marginTop:50}}
	   >
	     {datas.map((item,index) => (
	       <img
	         key={index}
	         src={item.imgsrc}
	         alt=""
	         style={{ width: '100%', verticalAlign: 'top' }}
	         onLoad={() => {
	           // fire window resize event to change height
	           window.dispatchEvent(new Event('resize'));
	           this.setState({ imgHeight: 'auto' });
	       }}/>
	       
	     ))}
	   </Carousel>

    );
  }
}
