import React from 'react';

import { Carousel, WhiteSpace, WingBlank, Button} from 'antd-mobile';
import Banner from './Banner.js';
import Tool from './Tool.js';
import Selling from './Selling.js';
import ClassMoudle from './ClassMoudle.js';
import Love from './Love.js';
import Search from '../general/Search.js';

var datas=require('../../data/banner.json')



export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }

  render() {
    return (
         <div id='Home'>
            {/*搜索*/}
            <Search />

         	{/*轮播*/}
         	<Banner />
         	{/*用户工具*/}
         	<Tool />
         	{/*热卖*/}
         	<Selling />
         	{/*热卖*/}
         	<ClassMoudle />
         	<ClassMoudle />
         	<ClassMoudle />
         	{/*猜你喜欢*/}
         	<Love />

         </div>
    );
  }
}
