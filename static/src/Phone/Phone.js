import React from 'react';

import Index from './Index.js';
import Detile from './Detile.js';

import {Router,
  Route,
  HashRouter,
  hashHistory,
  Switch} from 'react-router-dom'

export default class Phone extends React.Component{
	render(){
		return (
			<div id="Phone">
				<HashRouter history={hashHistory}>
         		    <Switch>
         		      <Route exact path="/" component={Index}/>
         		      {/*传递参数*/}
                  <Route path="/detile/:id" component={Detile}/>
         		    </Switch>
         		</HashRouter>
			</div>
		);
	}
}