import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

import {Top} from './Top'
import {Product} from './Product'

render(
  <Router history={history}>
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      <Route exact path="/products/:id">
        <Product />
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
)
