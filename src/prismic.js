import * as prismic from "@prismicio/client";

const repositoryName = "ignorantgrind";

const endPoint = "https://ignorantgrind.cdn.prismic.io/api/v2"

const client = prismic.createClient(endPoint, {
  accessToken: "MC5ZNjNlY0JFQUFDZ0FMZHlR.77-9A--_ve-_ve-_vSbvv71qX--_vU3vv73vv73vv70W77-9Ze-_vTBVXO-_vX_vv73vv71X77-977-9RiXvv73vv70",routes: [
    {
      type: 'page',
      uid: 'band',
      path: '/',
    },
    {
      type: 'page',
      uid: 'news',
      path: '/news',
    },
    {
      type: 'page',
      uid: 'music',
      path: '/music',
    },
    {
      type: 'page',
      uid: 'video',
      path: '/video',
    },
    {
      type: 'page',
      uid: 'contact',
      path: '/contact',
    },
    {
      type: 'about-page',
      uid: 'about',
      path: '/about',
    },
    {
      type: 'page',
      uid: 'page404',
      path: '*',
    }
  ]
});

export { repositoryName, client };
