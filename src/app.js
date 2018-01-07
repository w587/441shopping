import React from 'react'
import ReactDom from 'react-dom'
import MediaQuery from 'react-responsive';

import 'antd/dist/antd.css';

import PC from './PC/Index.js'
import Phone from './Phone/Index.js'


export default class App extends React.Component{
	render(){
		return (
			<div id='App'>
				<MediaQuery query="(min-device-width: 1280px)">
    			  <PC />
    			</MediaQuery>
    			<MediaQuery query="(max-device-width: 980px)">
    			  <Phone />
    			</MediaQuery>
			</div>
			)
	}
}

ReactDom.render(<App />,document.getElementById('wrap'))