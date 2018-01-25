import React from 'react';

import { TabBar,NavBar, Icon  } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Home from './Home/Index.js';
import Detail from './lists/Index.js';
import MyMsg from './MyMsg/Index.js';
import ShowCart from './ShowCart/Index.js';


require('../styless/Phone/Phone.css')

export default class HomeImdex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homepage',
      fullScreen:true
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="black"
          tintColor="#f30213"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://p2wfdrdf1.bkt.clouddn.com/home.svg) center center /  21px 21px no-repeat' }}/>
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(http://p2wfdrdf1.bkt.clouddn.com/home1.svg) center center /  21px 21px no-repeat' }}/>
            }
            selected={this.state.selectedTab === 'homepage'}
            onPress={() => {
              this.setState({
                selectedTab: 'homepage',
              });
            }}
            data-seed="logId"
          >
          	<Home />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://p2wfdrdf1.bkt.clouddn.com/class.svg) center center /  21px 21px no-repeat' }}/>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://p2wfdrdf1.bkt.clouddn.com/class1.svg) center center /  21px 21px no-repeat' }}/>
            }
            title="列表"
            key="class"
            selected={this.state.selectedTab === 'list'}
            onPress={() => {
              this.setState({
                selectedTab: 'list',
              });
            }}
            data-seed="logId1"
          >
            <Detail />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://p2wfdrdf1.bkt.clouddn.com/cart.svg) center center /  21px 21px no-repeat' }}/>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://p2wfdrdf1.bkt.clouddn.com/cart1.svg) center center /  21px 21px no-repeat' }}/>
            }
            title="购物车"
            key="cart"
            selected={this.state.selectedTab === 'cart'}
            onPress={() => {
              this.setState({
                selectedTab: 'cart',
              });
            }}
          >
           <ShowCart />
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://p2wfdrdf1.bkt.clouddn.com/my.svg) center center /  21px 21px no-repeat' }}/>
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://p2wfdrdf1.bkt.clouddn.com/my1.svg) center center /  21px 21px no-repeat' }}/>
            }
            title="用户中心"
            key="Friend"
            selected={this.state.selectedTab === 'friend'}
            onPress={() => {
              this.setState({
                selectedTab: 'friend',
              });
            }}
          >
           <MyMsg />
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}
