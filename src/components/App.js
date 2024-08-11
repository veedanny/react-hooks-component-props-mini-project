import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

const App = () => {
  return (
    <div>
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;
