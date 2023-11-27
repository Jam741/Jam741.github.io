'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "44398fe2ef4ca3e0eb1058cb304db5bb",
"index.html": "1072657b3830495c80053d44cdce8ccf",
"/": "1072657b3830495c80053d44cdce8ccf",
"main.dart.js": "9dd814a1a7f4ed983a41c4c60a8bf236",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2afd2011d25b11af3d788a585eb32d9e",
"assets/images/home_pj.png": "53de7611e6156a18cf899aa544282e98",
"assets/images/watermock_sw_6.png": "8981e95b262544f63f08718fff3b8476",
"assets/images/bt4_s.png": "6ac131f57c8c849e73c17b29330970d0",
"assets/images/watermock_xyl_3.png": "b0fd842d49462ce69dd8f3f8b601bfe1",
"assets/images/sxxc.png": "400320ebf10c6e6ea2c855cb00bfc30f",
"assets/images/title_right.png": "72d0ee2d1580f8803d56efca92632dd3",
"assets/images/pj_bg.png": "3bdb6c88d30be213e9bacc53ecd73d96",
"assets/images/watermock_zl_9.png": "58e4875cc3063db639e5998ae1893d91",
"assets/images/bt6_s.png": "bf38b56277ed9a65f5714a195177f530",
"assets/images/bt_center.png": "cc39edf522372be2be87ad05e0253133",
"assets/images/jcgl_center.png": "736461902a98c20098229170cfe86c68",
"assets/images/watermock_zll_9.png": "4044963fee2887c9c6e5f1b1e2505bf1",
"assets/images/bt2_s.png": "14985193c5bf0d6e738b98a8d201c4e9",
"assets/images/home_jc.png": "f8a32ca5c3ae1d4b4a7422ceb549322d",
"assets/images/watermock_zll_11.png": "28977145ca284c30ba369dbe3df87aee",
"assets/images/watermock_sw_3.png": "5b2ecb18bf95b0ac53b0fef0ac30b03b",
"assets/images/watermock_xyl_6.png": "6c57e819103c49542416a103754d62e5",
"assets/images/watermock_ad_11.png": "a0ae576d5df7e122c1c0d622d5576702",
"assets/images/shgnx_title.png": "14a5d1dfbe87aa9c4caa8861fcd66456",
"assets/images/smdc.png": "2c05ba4a87ee8c541184331f90a0afd5",
"assets/images/watermock_rjy_6.png": "24ad287d04a82560505873c33dcdeeff",
"assets/images/czgl_center.png": "6d3cfec977b8516b297cf0d427e825d8",
"assets/images/bt5_s.png": "fdc029bc0387bd33e7936df2784d7137",
"assets/images/juece_bg.png": "d4faddbb631a8160c464550ce3d8bb6b",
"assets/images/jc_bg.png": "b420664fa39f0d6be843a6b0469f4d23",
"assets/images/mn_bg.png": "e8a63b3c6646b48205e86e66bdb92865",
"assets/images/watermock_rjy_3.png": "c3627539afadfb25b9166e8f56f87ec0",
"assets/images/bt1_s.png": "3efab9a15d0587e613563fb388b6b7b2",
"assets/images/watermock_sw_11.png": "8eb25863a8de5244b19bd91dbdbee56e",
"assets/images/home_cicle1.png": "a3ac6fe860ab8f19ae20522b371b5286",
"assets/images/swwzx_title.png": "64fd50edad7273c5db866f993d20f43a",
"assets/images/watermock_ad_9.png": "c05ba48e82bc08044c163011a1a97364",
"assets/images/Ammonium.mp4": "d5e204ba92b1ed3d1f63bb5efb5109ed",
"assets/images/home_cicle3.png": "1319e3ee56ddde65c0d8143600445c41",
"assets/images/Nitrate-Nitrite.mp4": "10753796e76c953065833c50d788f2e4",
"assets/images/bt3_s.png": "f0b83c12ad88434c5a1a2d45e9a039d4",
"assets/images/home_cicle2.png": "0bae5fb8848079a9f01580b1e08e8096",
"assets/images/wxyg.png": "a3811bae1368a5773d5781aa672198be",
"assets/images/watermock_xyl_11.png": "3e997e5ceb5f5e5b2cf5bcfd1ffc0606",
"assets/images/title_left.png": "95c5d4eac18a8a07aed25270ffc2608e",
"assets/images/hjjc_bg.png": "821e017286b89da11ce449dca14e1f99",
"assets/images/mapsource.jpg": "1f8bf4a4ed046ef944ed9268edd492f2",
"assets/images/title_dot.png": "a70f45ba2b973eb04d858134aa6281d8",
"assets/images/watermock_ad_6.png": "5fe3f11acf44dedf689a587dc3b3015f",
"assets/images/banglocation.png": "6c3909fa489def991a0ada8269aa070c",
"assets/images/hxwzx_title.png": "5b64bac1fbeb03f2eab00fbe21fbd714",
"assets/images/home_juece.png": "fb3001308f9b1b6b4c8430ac73ea3400",
"assets/images/value_bg1.png": "998fd997c941f3ada504b9a50f0db713",
"assets/images/watermock_ad_3.png": "9854803fb9ea718d8a72bc4009d9838d",
"assets/images/Temperature.mp4": "6351517c0e53ed460d95c156a61dacab",
"assets/images/home_cilcle_juece.png": "05df554fcdce115e2d2d9e139b9cd99f",
"assets/images/xzjg_title.png": "d4564402362df9b85ea8c1297d9dc751",
"assets/images/watermock_rjy_11.png": "c55fb3b7b8c1ae4aba53ce4685b266c3",
"assets/images/value_bg2.png": "ba0b12c8be4c4b2a5deee5a1e679fbc2",
"assets/images/home_title.png": "62fdc3260ef00797aa8235803cae5dc5",
"assets/images/watermock_rjy_9.png": "421f7254c4d3a92a6484e6d3c81bfc5b",
"assets/images/DO.mp4": "a126ccded76e13879028fef5977a84fe",
"assets/images/location.png": "1d536c3936c84a0374c152e5aea10f66",
"assets/images/sdl_title.png": "e5003e2aa52d95aa29b95e329484feb1",
"assets/images/wrj.png": "aad63e0bb2458e9816824d3a4699de49",
"assets/images/home_mn.png": "d54406a4979f6402402ee38344e786fb",
"assets/images/power_off.png": "be7aa20e933cf3f36d2ece9ce562e82e",
"assets/images/bt4.png": "0b2e460815af7972247e148e5aec11fd",
"assets/images/watermock_zl_3.png": "282ef65589454d4571887f79394e221a",
"assets/images/bt5.png": "5aa67d56b1a85731a3d2fad535783ae1",
"assets/images/watermock_zll_6.png": "1e73307eedd782f39ad259fb6b3ae934",
"assets/images/sxxj_video.mp4": "1b05665cee4b6394599140aa42a144de",
"assets/images/TP.mp4": "4a4094fd2746193f5a1383369611bc88",
"assets/images/watermock_xyl_9.png": "d8c12c22dbe1cde0ff8d37917a8ed832",
"assets/images/bt6.png": "3a83a0daa2742d944c5829eae34a18b7",
"assets/images/watermock_zl_11.png": "c63aeb8338a13c4cb0029332f3d751b6",
"assets/images/BOD.mp4": "6be4a832e8ebf05c3e0ad9e38ff44bd3",
"assets/images/bt2.png": "968e16d7cafee8ea124fb4cd547250bb",
"assets/images/swzx_title.png": "1a43af62b2eeddc4fdc870a1f2d918e3",
"assets/images/watermock_sw_9.png": "dc185795d79fc68380df1826d36c250c",
"assets/images/Algae.mp4": "beb90991b54fa1a885205ddc984eb043",
"assets/images/bt3.png": "1274aa2f7671a04358ec5435650d24d6",
"assets/images/szpj_bg.png": "f3a3469f83d2f812d2ef0bf8c6b72527",
"assets/images/szpj_title_%2520bg.png": "9f1069bd173b5d3f00e272aebd97e599",
"assets/images/bt1.png": "a0910f5adacb3c18ca91a6f8eb51f254",
"assets/images/watermock_zl_6.png": "e0a4d3762ea7e99529237995be6221dc",
"assets/images/water_mock_title.png": "1243168805890050dd8ee2e089b5feed",
"assets/images/watermock_zll_3.png": "802dbf152f0e3e621cd2de6e0e7c4d9c",
"assets/images/bg.jpg": "d978ea37b6c1575a75289aafcf8d3421",
"assets/AssetManifest.json": "5e65ef297c718e11bb10a45ee7100d21",
"assets/NOTICES": "66c3cf4d746ac6c8b38b49f30d6a3e78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "42097c77516ea192bab9fd57804c1450",
"assets/fonts/k3kXo84MPvpLmixcA63oeALhL4iJ-Q7m8w.otf": "e3ae561f7b8052d9aa9f2b0b09c33ea1",
"assets/fonts/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/fonts/MaterialIcons-Regular.otf": "7da3fa5921d2093b3b65b0dd0e35fdfa",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
