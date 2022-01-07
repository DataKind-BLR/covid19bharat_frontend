if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"f404ea9c92331887d23de10f3a01d603","url":"404.html"},{"revision":"8413ababd8d8a4ec9225b3c027c90278","url":"c8d1250ca369c3018675.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"f404ea9c92331887d23de10f3a01d603","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"85f22789af173f8c1ad7c82c81cf55c0","url":"static/css/23.d2759753.chunk.css"},{"revision":"4bedfbe5546e902392e16816befdbf1a","url":"static/js/0.fb36fd98.chunk.js"},{"revision":"49bac91620a974393e56278164cdb3ed","url":"static/js/1.a161418b.chunk.js"},{"revision":"f22fdad3c2e6a1ae11b5c7b360c45298","url":"static/js/12.2129dc39.chunk.js"},{"revision":"e00bb631e29f1862cfe3791a5167d251","url":"static/js/13.72a8be82.chunk.js"},{"revision":"c828f8df6bb10a9acd6c788cf3eb221a","url":"static/js/14.78f241f5.chunk.js"},{"revision":"2d761a4e5baafb48b4ef487d575d2200","url":"static/js/15.e6758936.chunk.js"},{"revision":"edd0d4a0dc5306aa2380bf6be082b3c9","url":"static/js/16.0763209f.chunk.js"},{"revision":"bcee725d85eac1cea5fede6cfc35a8a7","url":"static/js/17.ab6df330.chunk.js"},{"revision":"8b33b77aca860d25bc24a23e97aec311","url":"static/js/18.0ce0d780.chunk.js"},{"revision":"f93a50ab135ec4a6d86ce4a91f724a65","url":"static/js/19.7dc06754.chunk.js"},{"revision":"c2ee4d5284307a3950afc3240197ad79","url":"static/js/2.d6925e00.chunk.js"},{"revision":"9be082ca26b5a492bc3d68afa3a65930","url":"static/js/20.9143b0d0.chunk.js"},{"revision":"f6d71e729f2661316710174a5044d302","url":"static/js/21.351b7814.chunk.js"},{"revision":"a7fd0ca015f4450778ab6c905a1afb45","url":"static/js/22.69f720e0.chunk.js"},{"revision":"f0ea016057c228989ba72cb2997e9812","url":"static/js/23.70adc532.chunk.js"},{"revision":"d7a97ab38816dce11d3fe61d24be1ddc","url":"static/js/24.419a45f3.chunk.js"},{"revision":"f9b8bd7e036b8477092779e069c57741","url":"static/js/25.a654bf35.chunk.js"},{"revision":"08120962f6a6ec0add5a3a1b2d80f886","url":"static/js/26.26413018.chunk.js"},{"revision":"11a80ddedb3acf96f20d77c962113506","url":"static/js/27.a34e6ae3.chunk.js"},{"revision":"dfbac1d694153d3b528f18f16547cf7e","url":"static/js/28.b7b3fc15.chunk.js"},{"revision":"fc20ac185cc27b21c723249377d33883","url":"static/js/29.53486e2d.chunk.js"},{"revision":"ae60068b7595438a02ffc7ca754df648","url":"static/js/3.3007e9a9.chunk.js"},{"revision":"48f8b6664d562d598878a40a93b32684","url":"static/js/30.d0c197f6.chunk.js"},{"revision":"a704dca3ae7931447ec10eeaded87f1f","url":"static/js/31.faeeb2f0.chunk.js"},{"revision":"605e7f0feda83da26e0aba254f23b78b","url":"static/js/32.2eb0b177.chunk.js"},{"revision":"6558e76b11314e06c856c86957387a9f","url":"static/js/33.521a7434.chunk.js"},{"revision":"050fba9813782886f0d59bd83ca060ec","url":"static/js/34.dd79fb37.chunk.js"},{"revision":"422dca6c51d71d86e5d13b4eadc04212","url":"static/js/35.b042c70c.chunk.js"},{"revision":"0160eafdc8f53fe15919682ea73b26df","url":"static/js/36.9a5c7a9e.chunk.js"},{"revision":"118c80a815fcbeca516a87bee1f32a04","url":"static/js/37.b6bf8438.chunk.js"},{"revision":"cf90d879319b269c8100e3ac3684596e","url":"static/js/38.a6736230.chunk.js"},{"revision":"3048375c4fb51832a8b2245e8d3cdc49","url":"static/js/39.1eac7a01.chunk.js"},{"revision":"a8e097097ae3793d203a890d12030e54","url":"static/js/4.2479f47d.chunk.js"},{"revision":"53e026d413ee84e7c89ee2fb8ab74525","url":"static/js/40.ca27aede.chunk.js"},{"revision":"215a13b0ae7d0727fdad6e5044b8b2b8","url":"static/js/41.9358725d.chunk.js"},{"revision":"5f91f01e07cacc347298f9e2731f387f","url":"static/js/42.513b8b0c.chunk.js"},{"revision":"51631bb9cf06d82124fd06abbe53a91b","url":"static/js/43.14cf220e.chunk.js"},{"revision":"fb6612f70178f031d70b2a330f250859","url":"static/js/44.65fece62.chunk.js"},{"revision":"7d7946ab2eda4da5ab633ae34ed0e081","url":"static/js/45.5ee84f06.chunk.js"},{"revision":"2bf0c169334cf6792be285db49be8e0f","url":"static/js/46.af2e55dc.chunk.js"},{"revision":"9381b56d86e04623d46bbfee4812ba20","url":"static/js/47.eafd2b29.chunk.js"},{"revision":"8c6d4952230ffb68915c9b36b6143ad7","url":"static/js/5.cd7fa09a.chunk.js"},{"revision":"0f6aca413b4120f29fec3075058b4149","url":"static/js/6.64bed54a.chunk.js"},{"revision":"7f6f47bbf78a766188acc234b4657bfa","url":"static/js/7.34fa384c.chunk.js"},{"revision":"9b917443b4095c4fbc34c2c94b80b26b","url":"static/js/8.c23027f3.chunk.js"},{"revision":"9d7540da1265fab1f3932a8ab15fa30e","url":"static/js/9.b49c7305.chunk.js"},{"revision":"734bcf412f24fbbc86a7327f9602db5c","url":"static/js/main.95e5f0f7.chunk.js"},{"revision":"5af3bb4699aeaa25fe4e33728a1cc8d5","url":"static/js/runtime-main.c82174f9.js"}]);

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
