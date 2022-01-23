if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e4fc01a7f64edc7081fe1cd3a8f1ae1f","url":"404.html"},{"revision":"8413ababd8d8a4ec9225b3c027c90278","url":"c8d1250ca369c3018675.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e4fc01a7f64edc7081fe1cd3a8f1ae1f","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"520c9ad3856f250235f762b3d898d101","url":"static/css/23.aa26c98f.chunk.css"},{"revision":"4bedfbe5546e902392e16816befdbf1a","url":"static/js/0.fb36fd98.chunk.js"},{"revision":"81edfe27ce97401b2a1b3d542adfa2a9","url":"static/js/1.54cea376.chunk.js"},{"revision":"f22fdad3c2e6a1ae11b5c7b360c45298","url":"static/js/12.2129dc39.chunk.js"},{"revision":"3e283dba082abaf52ed91002b9047087","url":"static/js/13.8aa2d58a.chunk.js"},{"revision":"84eb76d27464ef449d0d93af8c520ea1","url":"static/js/14.514faa60.chunk.js"},{"revision":"fda0ecc1fc37234056c1dbbb52502175","url":"static/js/15.8b3597a7.chunk.js"},{"revision":"1d099e3550548f31177067694659ed0e","url":"static/js/16.e11868b5.chunk.js"},{"revision":"ef5a91617182a356962e700d89d03055","url":"static/js/17.222d4ccb.chunk.js"},{"revision":"ea75e86501eefed93a171fbc23635331","url":"static/js/18.785dd39c.chunk.js"},{"revision":"578af8167ba61da1054040f644705daf","url":"static/js/19.32613e33.chunk.js"},{"revision":"c9dff89e6f9c1668c8cdaf89b5f5643e","url":"static/js/2.990e3475.chunk.js"},{"revision":"2d44946112b242b3e5c9da07d02f8175","url":"static/js/20.603ff0f5.chunk.js"},{"revision":"d9651c91934e2432555b657b306cc5a6","url":"static/js/21.136d3772.chunk.js"},{"revision":"d3bc65e9cf655af7a599319cd6dbebd7","url":"static/js/22.1c59cbbb.chunk.js"},{"revision":"92c244e765b2632b5481b46c5d407d09","url":"static/js/23.bb33c4de.chunk.js"},{"revision":"feece58353e9e166dd73494c8c7c16ed","url":"static/js/24.e97cccbe.chunk.js"},{"revision":"1ce983a660ca6d005dfbd2effa0f1a35","url":"static/js/25.7f2bc774.chunk.js"},{"revision":"cf4b5c8a5595b36615fda51d30653656","url":"static/js/26.2a201c57.chunk.js"},{"revision":"213f018a2732b2e1e727803ff3c9ff87","url":"static/js/27.1e459f61.chunk.js"},{"revision":"54f962689b01d6f4aca1e5c365eadd0b","url":"static/js/28.abaeb525.chunk.js"},{"revision":"c0d32743a69b5be522c5525d8833e460","url":"static/js/29.b854f541.chunk.js"},{"revision":"bb240857030e7d593d01058b021430dc","url":"static/js/3.51aa2016.chunk.js"},{"revision":"a30dc2604983042ee6b01b2649b9fc91","url":"static/js/30.2e45a13c.chunk.js"},{"revision":"836c6dec448f93435e007b5cf7a9d205","url":"static/js/31.17ea659b.chunk.js"},{"revision":"97aa9dddd1e4e9c08b4cad3ffa9ae91e","url":"static/js/32.5d5ceb68.chunk.js"},{"revision":"8ebdd9b911b3bb11833db55642d8752d","url":"static/js/33.5b532359.chunk.js"},{"revision":"15effe7a9e394abbc63c76794dd42fbb","url":"static/js/34.680ea153.chunk.js"},{"revision":"58b20c6dd4ce57308b9ab6915fc30e39","url":"static/js/35.006d8f1c.chunk.js"},{"revision":"651223471ce4c7bf5312a0b0b1f0a13c","url":"static/js/36.317ba6da.chunk.js"},{"revision":"c060e83871311e139d88b91c869f9ecb","url":"static/js/37.5d31b75c.chunk.js"},{"revision":"c49f3cb7f54d578d07b23170b184dcc2","url":"static/js/38.acdf1a3e.chunk.js"},{"revision":"17c36cf6d519b5dcb80d4572e3d30697","url":"static/js/39.8b09552f.chunk.js"},{"revision":"a8e097097ae3793d203a890d12030e54","url":"static/js/4.2479f47d.chunk.js"},{"revision":"4b28e76bcdeb5191754b32a89c26a4f6","url":"static/js/40.a860f5a9.chunk.js"},{"revision":"e274843bfe5e377a6f54212f40dfb9e1","url":"static/js/41.ef13f65f.chunk.js"},{"revision":"5c27994d250a02ab59c3a7a2048a38d6","url":"static/js/42.739ad218.chunk.js"},{"revision":"20d4fd218549da5d35714688da94072d","url":"static/js/43.719add5a.chunk.js"},{"revision":"964ae47611c56a385cc6e3a9208cd9f1","url":"static/js/44.2a1b5b7a.chunk.js"},{"revision":"ab4ab4d1dd7b723b1800cab10ed420ab","url":"static/js/45.cd0014e1.chunk.js"},{"revision":"0703e7aeef3ba5655226190b8e2f185b","url":"static/js/46.4d41e81a.chunk.js"},{"revision":"cd5c8f553359f8c5323cacc9a4ae8eac","url":"static/js/47.dabd0272.chunk.js"},{"revision":"6c0ce1734c97a5c0cf95e67df47d4eb3","url":"static/js/48.96857b51.chunk.js"},{"revision":"8c0f0499bb74003384d1a9d433c0c126","url":"static/js/5.118311b9.chunk.js"},{"revision":"0f6aca413b4120f29fec3075058b4149","url":"static/js/6.64bed54a.chunk.js"},{"revision":"8cf67a0a7a4b6eb7ad7c174b519ad49d","url":"static/js/7.d345b002.chunk.js"},{"revision":"9b917443b4095c4fbc34c2c94b80b26b","url":"static/js/8.c23027f3.chunk.js"},{"revision":"20dbbebcc973dff5e3acb2bfb6cfe293","url":"static/js/9.9d119f0a.chunk.js"},{"revision":"634a1e9c2ebcb4467b9f4756da736363","url":"static/js/main.f95b209e.chunk.js"},{"revision":"38157d884f94d2c66b02abbc2ea5deb5","url":"static/js/runtime-main.5aad8be7.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
