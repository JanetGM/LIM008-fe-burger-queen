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
    "revision": "995315d3d51201bdb7035b7f90f29c16"
  },
  {
    "url": "precache-manifest.6052fdf37ed758e7fbcee3a78dce6ba6.js",
    "revision": "6052fdf37ed758e7fbcee3a78dce6ba6"
  },
  {
    "url": "service-worker.js",
    "revision": "e6c864ac373d452fd3fcbd9fd39fba22"
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
    "url": "static/js/2.085de7bf.chunk.js",
    "revision": "d38ad001ad0b4461ec36d7250bcbb394"
  },
  {
    "url": "static/js/main.c551bfba.chunk.js",
    "revision": "dfbce4edc40d1c83fc0b6438a2561733"
  },
  {
    "url": "static/js/runtime~main.8b4f2692.js",
    "revision": "b741df3ea3743cb71c50f3c57e9071bd"
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