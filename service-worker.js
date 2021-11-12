if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e5b6808d31dae4127c0669c13cb95d91","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e5b6808d31dae4127c0669c13cb95d91","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"cc4882b0e58f1afbe20667d50cfbced9","url":"static/css/21.d2759753.chunk.css"},{"revision":"4bedfbe5546e902392e16816befdbf1a","url":"static/js/0.fb36fd98.chunk.js"},{"revision":"5b870c5bcec217fba08f0c0fec5f7d82","url":"static/js/1.07af0179.chunk.js"},{"revision":"f017136ff4c182a7665a6a7e67c0f95f","url":"static/js/11.d508427e.chunk.js"},{"revision":"c8ddf17968a087d5e149d41191447fc0","url":"static/js/12.22e4793c.chunk.js"},{"revision":"9ebe755b8cb786134d44598d5411ec68","url":"static/js/13.77bfcdcb.chunk.js"},{"revision":"47adefcdf8cf0ae613af68eb7daa5999","url":"static/js/14.4de17274.chunk.js"},{"revision":"001dbf76589195de13979b9df2d09126","url":"static/js/15.0f4fd666.chunk.js"},{"revision":"476566d85a9b96cf817533a8fb49410b","url":"static/js/16.c4ff366f.chunk.js"},{"revision":"88a8e999deebd9f428e78cf1e7ff81b1","url":"static/js/17.27aa52b5.chunk.js"},{"revision":"9278c08b690808e500725756812acd5f","url":"static/js/18.7708cc2d.chunk.js"},{"revision":"0a1da2e95b9165b57ba8868af7102bd1","url":"static/js/19.74bd4173.chunk.js"},{"revision":"9e1d7b65707ab45fc810945d17a1cee4","url":"static/js/2.366b601a.chunk.js"},{"revision":"2f6e3551223a70dc75015b5a686521ad","url":"static/js/20.949829f4.chunk.js"},{"revision":"4c2f074f8cb2f02e0dcfe3de06067f24","url":"static/js/21.69e81639.chunk.js"},{"revision":"a270600330fb1c34b7d78da6a990498d","url":"static/js/22.4cbd02a6.chunk.js"},{"revision":"7d3e8712be06657c90b91955b23b637c","url":"static/js/23.969ed2bf.chunk.js"},{"revision":"b8d1d7def59073561a8288ee814ef2e6","url":"static/js/24.813174db.chunk.js"},{"revision":"e2498774bf55bb88cfaf381302668426","url":"static/js/25.aa373111.chunk.js"},{"revision":"7f0232930b07c3944fca1f6d975faad9","url":"static/js/26.cf84d67b.chunk.js"},{"revision":"f923279af9065cf05bfd05686da0addc","url":"static/js/27.e0272fda.chunk.js"},{"revision":"15a53d098a634e0f1ca545b3d3e5d046","url":"static/js/28.4fa3cc46.chunk.js"},{"revision":"8aab73e76c9d6144aa4c6d0af9f4de5f","url":"static/js/29.43fdec27.chunk.js"},{"revision":"5453d744c390dff2b77f0e7e4246103e","url":"static/js/3.24c9610e.chunk.js"},{"revision":"e9fb27bfd4a300966d82917cbce60f4f","url":"static/js/30.cf381ac7.chunk.js"},{"revision":"8e1ea6d8923314e8c7fa0ae1b2c7a773","url":"static/js/31.eceaa541.chunk.js"},{"revision":"1321a2d97bdb460043c9e969eb19b488","url":"static/js/32.62f9aa66.chunk.js"},{"revision":"65b3d28ca9686af3a3776d7b363b0d28","url":"static/js/33.10861c41.chunk.js"},{"revision":"a2abebd2881989383102a24a5ffd9c6a","url":"static/js/34.61362398.chunk.js"},{"revision":"d98fa12236e68941dc8481e2f1feb577","url":"static/js/35.57fa704e.chunk.js"},{"revision":"9f13a7ca89efea8bb2fe7d9db466934c","url":"static/js/36.4e5d8b63.chunk.js"},{"revision":"4bc494453d84ca9a14df957ea3c8ee06","url":"static/js/37.0b9d1e02.chunk.js"},{"revision":"f15b45748f5525a6264f50a18b0998e2","url":"static/js/38.4b88ad69.chunk.js"},{"revision":"f9d141847fc9aeb0bc4a818faeab4af3","url":"static/js/39.b76acadc.chunk.js"},{"revision":"a01cebf2d8302261b57ec08261972ba1","url":"static/js/4.c6f23ee7.chunk.js"},{"revision":"b61fb013a6e958d6f106d3be4bf0e9e8","url":"static/js/40.3eb0db05.chunk.js"},{"revision":"8738b490d62ac6f537ee03b9c99ec033","url":"static/js/41.4c8e1cff.chunk.js"},{"revision":"399f57d00af539a47bde6c081d74a569","url":"static/js/42.9ca24c88.chunk.js"},{"revision":"9a0d41aa1246780385a39aa33477a3cf","url":"static/js/43.3ffa085c.chunk.js"},{"revision":"9c3f9a418b7c8dc3bf60b33e5ed87872","url":"static/js/44.8c3cf90a.chunk.js"},{"revision":"16420bf4cc6eaaabf9bd5ed07eec2b84","url":"static/js/45.d3aa4888.chunk.js"},{"revision":"5a9affd88d430c7c5a876fc5085dbfca","url":"static/js/5.5549cfd7.chunk.js"},{"revision":"fabfd06e7bddf8ee9e28e094b7337f1d","url":"static/js/6.2269dc02.chunk.js"},{"revision":"eeca63ef6ec0643d22258b3962eaff21","url":"static/js/7.d45a17cd.chunk.js"},{"revision":"85d8335cffed20fc8a49e419691d852f","url":"static/js/8.503f3f19.chunk.js"},{"revision":"7e2a81b7d4dff4cc02d0fe5d7872f301","url":"static/js/main.69c9a483.chunk.js"},{"revision":"bc23a9c2b6129fdbe2a916726d5315a8","url":"static/js/runtime-main.74837d07.js"}]);

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
