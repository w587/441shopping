import React from 'react';

import BigModule_Title from './BigModule/BigModule_Title.js';
import BigModuIBox from './BigModule/BigModuIBox.js';


require('../../styless/PC/Cont/BigModule.css')

var datas=require("../../data/BigModuIBox.json")


export default class BigModule extends React.Component{

	
	
	constructor(){
		super();
		this.state={
            index:0
        }
	}

	render(){	
		return (
			<div className='BigModule'>
				{/*分类*/}
				<BigModule_Title changes={this.change.bind(this)} datas={datas}/>
				{/*分类项*/}
				<BigModuIBox datas={datas[this.state.index]}/>
			</div>

		)
	}
	change(key){

		this.setState({
         	index:key
       	})
	}
}