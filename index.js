import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Nav from './lib/Nav'
import Main from './lib/Main'
import NewArticle from './lib/NewArticle'
import Article from './lib/Article'

render((
  <Router history={ hashHistory }>
    <Route path="/nav" component={ Nav }>
      <Route path="/" component={ Main }/>
      <Route path="new-article" component={ NewArticle }/>
      <Route path="/article" component={ Article }/>
    </Route>
  </Router>
), document.getElementById('app'))
