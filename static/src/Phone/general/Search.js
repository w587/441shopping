import React from 'react';

import { SearchBar, Button, WhiteSpace, WingBlank,Flex } from 'antd-mobile';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }

  render() {
    return (
        <Flex style={{height:50,width:'100%',backgroundColor:'#f30213',position:'fixed',zIndex:5,top:0}}>
            <span style={{display:'block',height:'100%',width:'20%',fontSize:20,lineHeight:'50px',color:'white'}}>441商城</span>
            <Flex.Item>
              <SearchBar style={{backgroundColor:'rgb(243, 2, 19)',color:'white'}} placeholder="搜索" maxLength={8} />
            </Flex.Item>
            
        </Flex>
    );
  }
}
