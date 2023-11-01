'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "44398fe2ef4ca3e0eb1058cb304db5bb",
"index.html": "5465c1f9e6a0b0f95d2760ecf4178971",
"/": "5465c1f9e6a0b0f95d2760ecf4178971",
"main.dart.js": "ff930ef96f7c3d05828df278d75d4ad5",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2afd2011d25b11af3d788a585eb32d9e",
"assets/images/watermock_sw_6.png": "8981e95b262544f63f08718fff3b8476",
"assets/images/watermock_xyl_3.png": "889a44bb913e723ad13c7e423a99ed83",
"assets/images/watermock_zl_9.png": "58e4875cc3063db639e5998ae1893d91",
"assets/images/watermock_zll_9.png": "b98d38d0e16c0dae862473af2ff88b2a",
"assets/images/index_bg.png": "ed4c87cb0ed7089607ce5dc2e2e2b416",
"assets/images/watermock_zll_11.png": "28977145ca284c30ba369dbe3df87aee",
"assets/images/watermock_sw_3.png": "5b2ecb18bf95b0ac53b0fef0ac30b03b",
"assets/images/watermock_xyl_6.png": "6f6cef8f35ecbc5562c38048a0482600",
"assets/images/watermock_ad_11.png": "a0ae576d5df7e122c1c0d622d5576702",
"assets/images/watermock_rjy_6.png": "1dc58f744682752e13d81f2de018ea49",
"assets/images/watermock_rjy_3.png": "ddeeed63aefcbbab68f30d23ac0dfcca",
"assets/images/watermock_sw_11.png": "8eb25863a8de5244b19bd91dbdbee56e",
"assets/images/watermock_ad_9.png": "c05ba48e82bc08044c163011a1a97364",
"assets/images/Ammonium.mp4": "d5e204ba92b1ed3d1f63bb5efb5109ed",
"assets/images/Nitrate-Nitrite.mp4": "10753796e76c953065833c50d788f2e4",
"assets/images/watermock_xyl_11.png": "8156ebe79fd72e33db0e697e8a7fddf0",
"assets/images/mapsource.png": "890b215be6e79800db02d07838e84565",
"assets/images/watermock_ad_6.png": "5fe3f11acf44dedf689a587dc3b3015f",
"assets/images/banglocation.png": "6c3909fa489def991a0ada8269aa070c",
"assets/images/watermock_ad_3.png": "9854803fb9ea718d8a72bc4009d9838d",
"assets/images/Temperature.mp4": "6351517c0e53ed460d95c156a61dacab",
"assets/images/watermock_rjy_11.png": "c942799c920393710333d6fc54a2f610",
"assets/images/watermock_rjy_9.png": "076f4c8ecd32b73587cd0abe6bb32795",
"assets/images/DO.mp4": "a126ccded76e13879028fef5977a84fe",
"assets/images/watermock_zl_3.png": "282ef65589454d4571887f79394e221a",
"assets/images/watermock_zll_6.png": "a98d14079a45a5ea347a1a4a36c159fb",
"assets/images/TP.mp4": "4a4094fd2746193f5a1383369611bc88",
"assets/images/watermock_xyl_9.png": "217a49774e5db3c28c5cf443111bf37c",
"assets/images/watermock_zl_11.png": "c63aeb8338a13c4cb0029332f3d751b6",
"assets/images/BOD.mp4": "6be4a832e8ebf05c3e0ad9e38ff44bd3",
"assets/images/watermock_sw_9.png": "dc185795d79fc68380df1826d36c250c",
"assets/images/Algae.mp4": "beb90991b54fa1a885205ddc984eb043",
"assets/images/watermock_zl_6.png": "e0a4d3762ea7e99529237995be6221dc",
"assets/images/watermock_zll_3.png": "802dbf152f0e3e621cd2de6e0e7c4d9c",
"assets/AssetManifest.json": "17d0d1ee1f61f5ccf52b1f493a504620",
"assets/NOTICES": "bc27f7ec849086c0460b036cc00618e3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
