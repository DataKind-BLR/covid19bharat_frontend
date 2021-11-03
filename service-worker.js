if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"462f407d0baf1858007bd106023cde5a","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"462f407d0baf1858007bd106023cde5a","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"bb61f7ded53dcec0eaf9a9af5bd1367e","url":"static/js/1.2e6a30d5.chunk.js"},{"revision":"f017136ff4c182a7665a6a7e67c0f95f","url":"static/js/11.d508427e.chunk.js"},{"revision":"882feaf2d2e20f48fbe0265145635800","url":"static/js/12.4d99851c.chunk.js"},{"revision":"9bc34630f23cbc2f5db5bfdf45315ede","url":"static/js/13.4d7cf521.chunk.js"},{"revision":"4bf5dc8454b103ddef87c2a92a3dee0b","url":"static/js/14.c145d39c.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"21ccccefe2526afe1b0ab5cd0bbf5d2b","url":"static/js/16.eafbfbd6.chunk.js"},{"revision":"3e7b2fe7f0019414f99532f73aad64c8","url":"static/js/17.81d383ba.chunk.js"},{"revision":"1ff12fb15dd281a6dcb19c13b319e1d3","url":"static/js/18.47c88c8f.chunk.js"},{"revision":"bba97857c836518f58cfc31a0cbde4f4","url":"static/js/19.abcad2e5.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"4c0e2478548d510b4b74ead22a7ce0cf","url":"static/js/20.16c3ff52.chunk.js"},{"revision":"d3801ee741291362475fe767279c0ba7","url":"static/js/21.ea44eb8f.chunk.js"},{"revision":"1b6daa0008d04d94b9bc45ad28108aa0","url":"static/js/22.b52bf6cb.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"4bcb34746b6cb490d81d755aa59b5ba0","url":"static/js/24.fb116404.chunk.js"},{"revision":"e3c08d08bf61cb13951115f786ac5590","url":"static/js/25.bdded466.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"648f83ac43c61a42798a093c2750939d","url":"static/js/27.21577cc7.chunk.js"},{"revision":"7cba5e97bfb232b463d5a735777024a6","url":"static/js/28.868e168d.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"50bf2d12b559edd4db17a4d28d64c9e8","url":"static/js/3.55049494.chunk.js"},{"revision":"a6b63f4b58de8fa62fa1d9df07a83639","url":"static/js/30.0f7055b6.chunk.js"},{"revision":"201054e016ba8a8ddcc854eff97ff736","url":"static/js/31.c145699b.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"d2bda31814ee02d8874881ee4f6408a3","url":"static/js/34.3964a54a.chunk.js"},{"revision":"812151bb63e2db78231c921b6d3c05a9","url":"static/js/35.ab865da3.chunk.js"},{"revision":"ac203a8116f5ce7e777b77f4eeb7d1cd","url":"static/js/36.2f11f480.chunk.js"},{"revision":"293df0c2801d7f04ffc87090b48e142b","url":"static/js/37.1f07152e.chunk.js"},{"revision":"4e3fc01d57bf02ddca8621e7982f8960","url":"static/js/38.98095f57.chunk.js"},{"revision":"1b4ec1e90fb5ab762d2f7703caaeefed","url":"static/js/39.d1182d34.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"4a8303704e842fe73afb16c32b1ea041","url":"static/js/40.2b0dfed8.chunk.js"},{"revision":"f6c2fd6fc96d76cc4265b08705989814","url":"static/js/41.4279015a.chunk.js"},{"revision":"b5b9cc775fff99136f2fa8e218dcc220","url":"static/js/42.4c452541.chunk.js"},{"revision":"11a6dc6d5945c3330112697a6518bbcd","url":"static/js/43.f430025e.chunk.js"},{"revision":"2ca86714ff8eb6d641af3721c3f49fb4","url":"static/js/44.c79e6bc0.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"c4d56b57a24cdf3cbf66a5090d6b60db","url":"static/js/5.cf211ebf.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"70a9ea46bc05f8db30272e414745ea9d","url":"static/js/8.9ba60e96.chunk.js"},{"revision":"6d6fce5403e9c04ae6ed069231da1f25","url":"static/js/main.7e4e4d74.chunk.js"},{"revision":"4e42d6869aa8414217f2ce4932d389f7","url":"static/js/runtime-main.ab15d763.js"}]);

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
