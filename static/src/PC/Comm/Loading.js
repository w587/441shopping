import React from 'react';

require('../../styless/PC/comm/Loading.css')

export default class Loading extends React.Component{

	render(){	
		return (
			<div className="spinner">
			  <div className="bounce1"></div>
			  <div className="bounce2"></div>
			  <div className="bounce3"></div>
			</div>

		)
	}
}