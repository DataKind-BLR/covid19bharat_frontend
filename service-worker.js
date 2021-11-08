if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"84468327a10e9066057c05bdac443ca7","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"84468327a10e9066057c05bdac443ca7","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"a66872bead1f894a79ea2488187e8ff2","url":"static/css/20.f5f9d973.chunk.css"},{"revision":"afad9a0f53aace12f43430e1a242ff61","url":"static/css/21.4503eacf.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"5b870c5bcec217fba08f0c0fec5f7d82","url":"static/js/1.07af0179.chunk.js"},{"revision":"f017136ff4c182a7665a6a7e67c0f95f","url":"static/js/11.d508427e.chunk.js"},{"revision":"c8ddf17968a087d5e149d41191447fc0","url":"static/js/12.22e4793c.chunk.js"},{"revision":"9ebe755b8cb786134d44598d5411ec68","url":"static/js/13.77bfcdcb.chunk.js"},{"revision":"dabc67e4f61c865ee2bb662925091685","url":"static/js/14.fca2cd9a.chunk.js"},{"revision":"001dbf76589195de13979b9df2d09126","url":"static/js/15.0f4fd666.chunk.js"},{"revision":"476566d85a9b96cf817533a8fb49410b","url":"static/js/16.c4ff366f.chunk.js"},{"revision":"b4e80e7ab55c87daf7459ef3e7932d5f","url":"static/js/17.8b02aadf.chunk.js"},{"revision":"9278c08b690808e500725756812acd5f","url":"static/js/18.7708cc2d.chunk.js"},{"revision":"0a1da2e95b9165b57ba8868af7102bd1","url":"static/js/19.74bd4173.chunk.js"},{"revision":"9e1d7b65707ab45fc810945d17a1cee4","url":"static/js/2.366b601a.chunk.js"},{"revision":"cda95c2bcb531b1e5f0f6b454d39482b","url":"static/js/20.c2acaec8.chunk.js"},{"revision":"4c2f074f8cb2f02e0dcfe3de06067f24","url":"static/js/21.69e81639.chunk.js"},{"revision":"35e2c375a36d5cbc7e9ada6cc2e5cf91","url":"static/js/22.0ad28952.chunk.js"},{"revision":"211e4d475318b112d02ac87582e6bd3e","url":"static/js/23.f7d91005.chunk.js"},{"revision":"b8d1d7def59073561a8288ee814ef2e6","url":"static/js/24.813174db.chunk.js"},{"revision":"e2498774bf55bb88cfaf381302668426","url":"static/js/25.aa373111.chunk.js"},{"revision":"45ab3a88996e37112b9fb1972de8dcbe","url":"static/js/26.0a097941.chunk.js"},{"revision":"56e98b23b5a6b9871d8b75b72fce99fe","url":"static/js/27.02630d41.chunk.js"},{"revision":"15a53d098a634e0f1ca545b3d3e5d046","url":"static/js/28.4fa3cc46.chunk.js"},{"revision":"ee18aa3f5e0a0742624d7493bcf85834","url":"static/js/29.f2aeeb39.chunk.js"},{"revision":"5453d744c390dff2b77f0e7e4246103e","url":"static/js/3.24c9610e.chunk.js"},{"revision":"f1c077b7c86f1c485b806d179571fffa","url":"static/js/30.e7af26f5.chunk.js"},{"revision":"d6ade0cb0aa5dc9cc0d069e42b148294","url":"static/js/31.4acaee8a.chunk.js"},{"revision":"9fe9fe92c4bc0c8256aacb78c6d495a3","url":"static/js/32.7806f860.chunk.js"},{"revision":"65b3d28ca9686af3a3776d7b363b0d28","url":"static/js/33.10861c41.chunk.js"},{"revision":"a2abebd2881989383102a24a5ffd9c6a","url":"static/js/34.61362398.chunk.js"},{"revision":"2b5a9c252cff3cb00832745bdaeb8891","url":"static/js/35.a6a0513c.chunk.js"},{"revision":"972254a30878e8295c1374e238308e22","url":"static/js/36.2f4e478a.chunk.js"},{"revision":"f3ac46373bbffcf960654c71aaeac132","url":"static/js/37.a749cd29.chunk.js"},{"revision":"301bb0ed8e6206dcbde1d2c588681029","url":"static/js/38.2992dbd4.chunk.js"},{"revision":"f9d141847fc9aeb0bc4a818faeab4af3","url":"static/js/39.b76acadc.chunk.js"},{"revision":"a01cebf2d8302261b57ec08261972ba1","url":"static/js/4.c6f23ee7.chunk.js"},{"revision":"b61fb013a6e958d6f106d3be4bf0e9e8","url":"static/js/40.3eb0db05.chunk.js"},{"revision":"daead7cac17d6c84bff452aeb57a9451","url":"static/js/41.8756c6af.chunk.js"},{"revision":"233824eb3571326025d9ecb30b62ab45","url":"static/js/42.ab221db9.chunk.js"},{"revision":"9a0d41aa1246780385a39aa33477a3cf","url":"static/js/43.3ffa085c.chunk.js"},{"revision":"0dd2f61fd79e5abd8676617ae7e7d96d","url":"static/js/44.0b080e3c.chunk.js"},{"revision":"16420bf4cc6eaaabf9bd5ed07eec2b84","url":"static/js/45.d3aa4888.chunk.js"},{"revision":"955a32fc2707433ef44cb66de0985143","url":"static/js/5.fc4ea26f.chunk.js"},{"revision":"fabfd06e7bddf8ee9e28e094b7337f1d","url":"static/js/6.2269dc02.chunk.js"},{"revision":"eeca63ef6ec0643d22258b3962eaff21","url":"static/js/7.d45a17cd.chunk.js"},{"revision":"85d8335cffed20fc8a49e419691d852f","url":"static/js/8.503f3f19.chunk.js"},{"revision":"7e2a81b7d4dff4cc02d0fe5d7872f301","url":"static/js/main.69c9a483.chunk.js"},{"revision":"93071f0afe086de14622479e67c33904","url":"static/js/runtime-main.a896ae73.js"}]);

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
