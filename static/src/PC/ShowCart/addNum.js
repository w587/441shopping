import React from 'react';
import { Table, Input, Button, Icon,InputNumber,Divider } from 'antd';
import {Link} from 'react-router-dom'

const { Column, ColumnGroup } = Table;

export default class Tables extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		count:1,
        value: this.props.value,
      	data:[{
            key: 1,
            name: '雷神911-Targa-T6C',
            img: 'http://www.leishen.cn/images/201712/thumb_img/434_thumb_G_1512686812855.jpg',
            price: 999,
            nums: 2,
            prices:1998,
            del: 'X',
            }
        ],
        mony:0
    		  
    	};
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }

  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }

  edit = () => {
    this.setState({ editable: true });
  }
    
	render(){

    var columns = [
      {
        title: '商品名',
        dataIndex: 'name',
      }, {
        title: '商品图片',
        dataIndex: 'img',
        
      }, {
        title: '单价',
        dataIndex: 'price',
      }, {
        title: '数量',
        dataIndex: 'nums',
        render:(text,record)=><InputNumber size="large" min={1} max={10} defaultValue={text} onChange={this.onChanges.bind(this)} />
      }, {
        title: '小计',
        dataIndex: 'prices',
      }, {
        title: '操作',
        dataIndex: 'del',
        render: text => <a href='#'>{text}</a>,
      }
    ];

		return (
			  <InputNumber size="large" min={1} max={10} defaultValue={text} onChange={this.onChanges.bind(this)} />
		)
	}

	
}