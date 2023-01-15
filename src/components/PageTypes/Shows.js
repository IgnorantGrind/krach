import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { DateTime } from "luxon";
import Calendar from "./Calendar/Calendar"

// fetch page json data

let jsonString;

fetch("content/shows.json")
  .then((response) => response.text())
  .then((data) => {
    jsonString = data;
  })
  .catch((err) => {
    console.log("Failed to fetch page: ", err);
  });

// create page from json data

const Shows = ({ title, subtitle, locale }) => {

  // parsing & destructuring json data

  const json = JSON.parse(jsonString);
  const { heading, coming, past, dateFormat, shows } = json;

  // sort shows

  shows.sort((a, b) => b.date - a.date);

  // filter past / future shows, resort
  // for date format info see https://moment.github.io/luxon/#/parsing?id=table-of-tokens

  const currentDate = DateTime.now().setLocale('en-GB').toFormat("yyyyMMdd");

  const pastShows = shows.filter((a) => a.date < currentDate);
  const futureShows = shows.filter((a) => a.date >= currentDate).reverse();

  // transform date strings into DateTime objects

  const transform = (shows) => {
    let show, date;
    for (show of shows) {
      date = DateTime.fromFormat(show.date, "yyyyMMdd");
      show.date = date.setLocale(locale);
      if ("tour" in show) {
        date = DateTime.fromFormat(show.end, "yyyyMMdd");
        show.end = date.setLocale(locale);

      // sort and transform tour dates

        show.shows.sort((a, b) => a.date - b.date);
        transform(show.shows)
      }
    };
  };
  transform(futureShows);
  transform(pastShows);

  // divide shows into years

  const futureYears = [];
  const pastYears = [];

  const makeYears = (shows, targetArray) => {
    let show, year, result, years = [];
    for (show of shows) {
      year = show.date.year;
      if (years[years.length-1] !== year) {
        years.push(year)
        result = [];
      };
      result.push(show);
    };
    targetArray.push(result);
  };
  makeYears(futureShows, futureYears);
  makeYears(pastShows, pastYears);
  futureYears.reverse();

  // create main component
  console.log(dateFormat);

  return (
    <>

      {/* create helmet */}

      <Helmet>
        <title>{title} - {subtitle}</title>
      </Helmet>

      {/* convert data to components */}

      <h1>{heading}</h1>
      <h3>{coming}</h3>
      <Calendar
        years={futureYears}
        dateFormat={dateFormat}
      />
      <br />
      <h3>{past}</h3>
      <Calendar
        years={pastYears}
        dateFormat={dateFormat}
      />
    </>
  );
};

Shows.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  locale: PropTypes.string
};

export default Shows;
