import React from 'react';

import Use from '../Head/HeadUse.js';
import Footer from '../Comm/Footer.js';
import UseConv from '../Cont/UseConve.js';
import ConterL from './ConterL.js';
import ConterR from './ConterR.js';
require('../../styless/PC/Detail/detail.css')

export default class Detile extends React.Component{
	constructor(){
        super();
        this.state={
            Box:"itemBox",
            datas:[]
        }
    }

    componentWillMount(){
		var than=this
      	fetch(`http://127.0.0.1:3000/PC/detail?id=${this.props.match.params.id}`).then((response)=>{
		  return response.json();
		}).then((data)=>{
			
		 	this.setState({
		 		datas:data
		 	})
		})
  	}
	render(){
		return (
			<div>
				<Use />
				{/*内容块*/}
				<div style={{width:'90%',margin:'0 auto',display: 'flex',flexDirection: 'column'}}>
					{/*用户工具*/}
					<UseConv />
					<div className='DetailConter' >
						<ConterL />
						<ConterR datas={this.state.datas[0]}/>
					</div>
				</div>
				{/*底部*/}
				<Footer />
			</div>
		);
	}
}