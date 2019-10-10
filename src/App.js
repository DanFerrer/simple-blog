import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import ArticlesListPage from './components/Articles/ArticlesListPage';
import ArticlePage from './components/Articles/ArticlePage';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound';

const SimpleBlog = () => {
  return (
    <Router>
      <div className="simple-blog">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ HomePage }/>
          <Route exact path="/articles" component={ ArticlesListPage }/>
          <Route path="/articles/:name" component={ ArticlePage }/>
          <Route render={ NotFound }/>
        </Switch>
      </div>  
    </Router>
  );
}

export default SimpleBlog;
