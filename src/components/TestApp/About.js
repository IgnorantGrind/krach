import React from "react";
import { PrismicRichText, usePrismicDocumentByUID, useSinglePrismicDocument } from '@prismicio/react'

const About = () => {
  const [page, { state }] = useSinglePrismicDocument("homepage");
  return (
    <div>
      {state === 'loading' ? (
        <div>
          Loading...
        </div>
      ) : (
        <div>
          {state}
        </div>
      )}
    </div>
  );
}

export default About;
