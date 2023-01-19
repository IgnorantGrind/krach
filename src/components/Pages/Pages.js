import ErrorPage from './ErrorPage/ErrorPage';
import News from './News/News';
import Shows from './Shows/Shows';
import About from './Html/About';
import Contact from './Html/Contact';
import Home from './Html/Home';
import Music from './Html/Music';
import Video from './Html/Video';

// map page types

const Pages = {
  404: ErrorPage,
  news: News,
  shows: Shows,
  about: About,
  contact: Contact,
  home: Home,
  music: Music,
  video: Video
};

export default Pages;
