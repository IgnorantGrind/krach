import React, { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { GlobalContext } from './contexts/GlobalContext';
import useRouter from './providers/Router';

// create routing and meta data from config data

const App = () => {

  // destructurize config data

  const { Config } = useContext(GlobalContext);
  const { title, description, keywords, icon, appleTouchIcon, noScript, googleFont, imagePath } = Config;

  // create app

  return (
    <HelmetProvider>

      {/* create helmet from config data*/}
      
      <Helmet>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />
        <link
          id='favicon'
          rel='icon'
          type='image/x-icon'
          href={imagePath + icon}
          sizes='64x64 32x32 24x24 16x16'
        />
        <link
          rel='apple-touch-icon'
          href={imagePath + appleTouchIcon}
          sizes='192x192'
          type='image/png'
        />
        {
          googleFont &&
          <>
            <link
              rel='preconnect'
              href='https://fonts.googleapis.com'
            />
            <link
              rel='preconnect'
              href='https://fonts.gstatic.com'
              crossorigin
            />
            <link
              href={googleFont}
              rel='stylesheet'
            />
          </>
        }
        <noscript>
          {noScript}
        </noscript>
      </Helmet>
      
      {/* render current path / route components */}

      <RouterProvider router={useRouter()} />

    </HelmetProvider>
  );

};

export default App;
