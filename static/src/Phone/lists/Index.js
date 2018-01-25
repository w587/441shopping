import React from 'react';
import LeftList from './LeftList.js';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  }

  componentWillMount(){
   
  }

  render() {
    return (
         <div id='List' >
          <LeftList />
         </div>
    );
  }
}
