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
    "revision": "75ad43e43be0ccac80b348e289883a0c"
  },
  {
    "url": "precache-manifest.9501816eaadb9391706e8bc718250530.js",
    "revision": "9501816eaadb9391706e8bc718250530"
  },
  {
    "url": "service-worker.js",
    "revision": "f27418ff80df9b843b1df3fb949f28ed"
  },
  {
    "url": "static/css/2.5d78c1e3.chunk.css",
    "revision": "e4d3507799d64041f2da72dda86d6018"
  },
  {
    "url": "static/css/main.c9c45f4f.chunk.css",
    "revision": "6d0fff729ca8a5bcc3bd2c383a76359e"
  },
  {
    "url": "static/js/2.c1c6d889.chunk.js",
    "revision": "9cf6eabe5c39b1e082d1402a052cc105"
  },
  {
    "url": "static/js/main.f4217625.chunk.js",
    "revision": "cca62d8d5aa0695a70461fec04339caf"
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