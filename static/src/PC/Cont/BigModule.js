import React from 'react';

import BigModule_Title from './BigModule/BigModule_Title.js';
import BigModuIBox from './BigModule/BigModuIBox.js';


require('../../styless/PC/Cont/BigModule.css')

var datas=require("../../data/BigModuIBox.json")


export default class BigModule extends React.Component{

	
	
	constructor(){
		super();
		this.state={
            index:0,
            id:1,
            datass:[]
        }
	}

	 componentWillMount(){
		var than=this
      	fetch(`http://127.0.0.1:3000/PC/BigMould?id=${this.state.id}`).then((response)=>{
		  return response.json();
		}).then((data)=>{
		 	this.setState({
		 		datass:data
		 	})
		})
  	}



	render(){	
		return (
			<div className='BigModule'>
				{/*分类*/}
				<BigModule_Title changes={this.change.bind(this)} datas={datas}/>
				{/*分类项*/}
				<BigModuIBox datas={datas[this.state.index]} datass={this.state.datass}/>
			</div>

		)
	}
	change(key){
		var keys=parseInt(key)+1
		this.setState({
         	index:key,
         	id:keys
       	})

      	fetch(`http://127.0.0.1:3000/PC/BigMould?id=${keys}`).then((response)=>{
		  return response.json();
		}).then((data)=>{
		 	this.setState({
		 		datass:data
		 	})
		})
	}
}