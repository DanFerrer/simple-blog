import React from 'react';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  return (
    <React.Fragment>
      <h1>This is an article {name}</h1>
    </React.Fragment>
  );
};

export default ArticlePage;