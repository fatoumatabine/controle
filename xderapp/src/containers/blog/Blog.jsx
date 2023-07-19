import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog06, blog07, blog08, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Nous documentons activement les événements et partageons nos analyses via notre blog.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="" text="DJIGUEN-DEV est l'avenir. Explorons comment c'est?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog06} date="" text="DJIGUEN-DEV est l'avenir. Explorons comment c'est?" />
        <Article imgUrl={blog07} date="" text="DJIGUEN-DEV est l'avenir. Explorons comment c'est?" />
        <Article imgUrl={blog08} date="" text="DJIGUEN-DEV est l'avenir. Explorons comment c'est?" />
        <Article imgUrl={blog05} date="" text="DJIGUEN-DEV est l'avenir. Explorons comment c'est?" />
      </div>
    </div>
  </div>
);

export default Blog;
