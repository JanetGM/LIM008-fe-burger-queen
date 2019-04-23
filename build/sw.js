if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
   
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "72bedc3647526098a304cfe99e8be2c7"
  },
  {
    "url": "precache-manifest.ac4e5b21e9b3f312870da0186e9ac2f2.js",
    "revision": "ac4e5b21e9b3f312870da0186e9ac2f2"
  },
  {
    "url": "service-worker.js",
    "revision": "a5f477b77196e37aef2e97b6f954440e"
  },
  {
    "url": "static/css/2.5d78c1e3.chunk.css",
    "revision": "e4d3507799d64041f2da72dda86d6018"
  },
  {
    "url": "static/css/main.30063f80.chunk.css",
    "revision": "232a98c4dcf16923d6278698c53ec264"
  },
  {
    "url": "static/js/2.9e0b73f8.chunk.js",
    "revision": "550732e1f737c11bb365fae0eabfeed9"
  },
  {
    "url": "static/js/main.a6401425.chunk.js",
    "revision": "15356622127e14bb08fc798db559754e"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);
   
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
   
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
   
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }