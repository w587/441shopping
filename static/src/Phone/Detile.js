import React from 'react';

import Index from './Details/Index.js';

var data=require('../data/computer.json')
export default class Detile extends React.Component {

  render() {
  	
    return (
      <div id='Detile'>
      	<Index GoBack={this.GoBack.bind(this)} data={data[this.props.match.params.id]}/>
      </div>

    );
  }

  GoBack(){
    this.props.history.goBack()
  }
}
