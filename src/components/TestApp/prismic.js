import * as prismic from "@prismicio/client";

const repositoryName = "ignorantgrind";

const endPoint = "https://ignorantgrind.cdn.prismic.io/api/v2"

const client = prismic.createClient(endPoint, {
  accessToken: "MC5ZNjNlY0JFQUFDZ0FMZHlR.77-9A--_ve-_ve-_vSbvv71qX--_vU3vv73vv73vv70W77-9Ze-_vTBVXO-_vX_vv73vv71X77-977-9RiXvv73vv70",
  routes: [
    {
      type: 'homepage',
      uid: 'homepage',
      path: '/',
    },
    {
      type: 'about-page',
      uid: 'about-page',
      path: '/about',
    },
    {
      type: 'contact-page',
      uid: 'contact-page',
      path: '/contact',
    },
    {
      type: 'error-page',
      uid: 'error-page',
      path: '/error',
    }
  ]
});

export { repositoryName, client };
