import React from 'react';

import Index from './Index/Index.js';
import Detile from './Detile/Detile.js';
import ShowCart from './ShowCart/ShowCart.js';

import {Router,
  Route,
  HashRouter,
  hashHistory,
  Switch} from 'react-router-dom'

export default class PC extends React.Component{
	render(){
		return (
			<div id="PC">
				<HashRouter history={hashHistory}>
         		    <Switch>
         		      <Route exact path="/" component={Index}/>
         		      {/*传递参数*/}
                  <Route path="/detile/:id" component={Detile}/>
         		      <Route path="/ShowCart" component={ShowCart}/>
         		    </Switch>
         		</HashRouter>
			</div>
		);
	}
}