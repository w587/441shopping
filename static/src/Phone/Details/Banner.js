import React from 'react';

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class DetailBanner extends React.Component {

  constructor(){
  	super();
  	this.state={
  		data: ['1', '2', '3'],
	    imgHeight: 176,
	    slideIndex: 0,
  	}
  }

  render() {
    return (
      	<Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={this.props.data.imgs}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}/>
            </a>
          ))}
        </Carousel>

    );
  }
}


