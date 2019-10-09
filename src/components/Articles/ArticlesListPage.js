import React from 'react';
import ArticlesList from './ArticlesList';

const ArticlesListPage = () => {
  return (
    <React.Fragment>
      <h1>Articles</h1>
      <ArticlesList articles={[0,1,2,3]}/>
    </React.Fragment>
  );
};

export default ArticlesListPage;