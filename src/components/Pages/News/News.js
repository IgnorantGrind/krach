import React, { useContext } from 'react';
import { DateTime } from 'luxon';

import { GlobalContext } from '../../../contexts/GlobalContext';
import HtmlProvider from '../../../providers/HtmlProvider';

import './News.css';

// fetch page json data

let jsonString;

fetch('content/news.json')
  .then((response) => response.text())
  .then((data) => {
    jsonString = data;
  })
  .catch((err) => {
    console.log('Failed to fetch page: ', err);
  });


// create page from json data

const News = () => {

  // destructurize config data

  const { Config } = useContext(GlobalContext);
  const { locale } = Config;

  // pasing & destructuring json data

  const json = JSON.parse(jsonString);
  const { heading, dateFormat, posts } = json;

  // sort posts

  posts.sort((a, b) => a.date - b.date);

  // create posts

  const components = posts.map((post) => {
    const date = DateTime.fromFormat(post.date, 'yyyyMMdd').setLocale(locale);
    const dateString = dateFormat ?
      date.toFormat(dateFormat) :
      date.toFormat('DDD');

    // create post components from data

    return (
      <div
        className='newsPost'
      >
        <h2>{post.title}</h2>
        <div
          className='postDate'
        >
          {dateString}
        </div>

        <HtmlProvider html={post.html} />

      </div>
    );
  });

  // create main news page

  return (
    <div>
      <h1>{heading}</h1>
      {components}
    </div>
  );
};

export default News;
