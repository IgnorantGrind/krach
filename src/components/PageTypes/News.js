import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { DateTime } from 'luxon';
import HtmlMapper from 'react-html-map';
import { tagMap } from '../Layout/Layout';

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

const News = ({ title, subtitle, locale }) => {

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
        <HtmlMapper html={post.html}>
          {tagMap()}
        </HtmlMapper>
      </div>
    );
  });

  // create main news page

  return (
    <>
      <Helmet>
        <title>{title} - {subtitle}</title>
      </Helmet>
      <div>
        <h1>{heading}</h1>
        {components}
      </div>
    </>
  );
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  locale: PropTypes.string
};


export default News;
