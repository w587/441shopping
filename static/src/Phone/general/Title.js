import React from 'react';

export default class Title extends React.Component {

  render() {
    var imgs=this.props.data[0].imgsrc==''?"":<img src={this.props.data[0].imgsrc} height="100%" />
    return (
      <div className="index-title">
      	<div style={{ height: '1px',
      				 marginTop: '40px',
			       	 textAlign: 'center', 
			       	 borderTop: '1px solid #e2e2e2'}}>
	      	<div style={{ position: 'relative',top:-18}} className="hot-icon">
		      	{imgs}
		      	<span style={{position:'relative',top:4}}>{this.props.data[0].title}</span>
	      	</div>
      	</div>
      </div>
    );
  }
}
