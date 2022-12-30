import React from "react";
//import { PrismicRichText, usePrismicDocumentByUID, useSinglePrismicDocument } from '@prismicio/react'

function About() {
  //const [page, { state }] = useSinglePrismicDocument("about-page");
  /*const [page, { state }] = usePrismicDocumentByUID("about-page", "about");

  return (
    <div>
      {state === 'loading' ? (
        <div>
          Loading...
        </div>
      ) : (
        <PrismicRichText field={page.data.about} />
      )}
    </div>
  );*/
  return (
    <div>
      About page
    </div>
  );
};

export default About;
