'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "44398fe2ef4ca3e0eb1058cb304db5bb",
"index.html": "78dbc6d4e42aa7172be2887e1c64b9f9",
"/": "78dbc6d4e42aa7172be2887e1c64b9f9",
"main.dart.js": "eb34f7969b75313e83299b2dcf388f88",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2afd2011d25b11af3d788a585eb32d9e",
"assets/images/home_pj.png": "96cd37e6efd012cf81be2c76519c12bd",
"assets/images/watermock_sw_6.png": "cf5529f12cdcb4fba61b44c055eb856a",
"assets/images/bt4_s.png": "6ac131f57c8c849e73c17b29330970d0",
"assets/images/watermock_xyl_3.png": "b0fd842d49462ce69dd8f3f8b601bfe1",
"assets/images/sxxc.png": "400320ebf10c6e6ea2c855cb00bfc30f",
"assets/images/title_right.png": "72d0ee2d1580f8803d56efca92632dd3",
"assets/images/pj_bg.png": "3bdb6c88d30be213e9bacc53ecd73d96",
"assets/images/watermock_zl_9.png": "568336de9da3252b4cdc36681fd0792a",
"assets/images/bt6_s.png": "bf38b56277ed9a65f5714a195177f530",
"assets/images/bt_center.png": "ddb681b8899962a2f6ace3b09001d41b",
"assets/images/jcgl_center.png": "6c9050964b2f7c63f11374598ccc5e31",
"assets/images/watermock_zll_9.png": "4044963fee2887c9c6e5f1b1e2505bf1",
"assets/images/bt2_s.png": "14985193c5bf0d6e738b98a8d201c4e9",
"assets/images/home_jc.png": "5a4d8b5393a5d900b897bdbbd7ee7cca",
"assets/images/watermock_zll_11.png": "006d43b86c836e7c8d504701c3f0e99d",
"assets/images/watermock_sw_3.png": "4f1e02edbca9fd14876f9db7a3852943",
"assets/images/watermock_xyl_6.png": "6c57e819103c49542416a103754d62e5",
"assets/images/watermock_ad_11.png": "a0ae576d5df7e122c1c0d622d5576702",
"assets/images/index_position_bg.png": "e3019cca0db4ba9bfa997ae3f329ca5e",
"assets/images/shgnx_title.png": "d5ef1edfcd9a5419e7ea8ab0399a6a26",
"assets/images/smdc.png": "b8c135b7c4a4118d354c308bb989fb1b",
"assets/images/watermock_rjy_6.png": "24ad287d04a82560505873c33dcdeeff",
"assets/images/index_juece_title.png": "b6c508a8e4450d711544b0959936b6ad",
"assets/images/czgl_center.png": "b2538e5fcfac2702f2e86ebe93f07fe9",
"assets/images/bt5_s.png": "fdc029bc0387bd33e7936df2784d7137",
"assets/images/mn_bg.png": "e8a63b3c6646b48205e86e66bdb92865",
"assets/images/sxxj_video.mp4.zip": "67eb3260858172e51d313b053e35599e",
"assets/images/watermock_rjy_3.png": "c3627539afadfb25b9166e8f56f87ec0",
"assets/images/bt1_s.png": "3efab9a15d0587e613563fb388b6b7b2",
"assets/images/watermock_sw_11.png": "951fa2ec1db98c256bed552c82691d45",
"assets/images/home_cicle1.png": "a3ac6fe860ab8f19ae20522b371b5286",
"assets/images/swwzx_title.png": "64fd50edad7273c5db866f993d20f43a",
"assets/images/watermock_ad_9.png": "f757646e46029f4969c7d0c7160a8969",
"assets/images/Ammonium.mp4": "00a036a86ca2169e5386cb51cda7f294",
"assets/images/home_cicle3.png": "1319e3ee56ddde65c0d8143600445c41",
"assets/images/Nitrate-Nitrite.mp4": "93ff03fe481b5acea52e6c78fc22f136",
"assets/images/bt3_s.png": "f0b83c12ad88434c5a1a2d45e9a039d4",
"assets/images/home_cicle2.png": "0bae5fb8848079a9f01580b1e08e8096",
"assets/images/wxyg.png": "00c48cbde2cd56833181c0553490e34f",
"assets/images/szpj_title_%252520bg.png": "9f1069bd173b5d3f00e272aebd97e599",
"assets/images/watermock_xyl_11.png": "3e997e5ceb5f5e5b2cf5bcfd1ffc0606",
"assets/images/title_left.png": "95c5d4eac18a8a07aed25270ffc2608e",
"assets/images/hjjc_bg.png": "821e017286b89da11ce449dca14e1f99",
"assets/images/index_jc_title.png": "fc092d125776f7463b2c6931a38799a6",
"assets/images/mapsource.jpg": "1f8bf4a4ed046ef944ed9268edd492f2",
"assets/images/title_dot.png": "a70f45ba2b973eb04d858134aa6281d8",
"assets/images/watermock_ad_6.png": "4e542a28c784ad8aa94f3c94945d5f7c",
"assets/images/banglocation.png": "6c3909fa489def991a0ada8269aa070c",
"assets/images/hxwzx_title.png": "5b64bac1fbeb03f2eab00fbe21fbd714",
"assets/images/home_juece.png": "ccf67424e28e466e736728337ac137ef",
"assets/images/value_bg1.png": "463bafd4df027354cc19e5cae6b49fda",
"assets/images/index_pj_title.png": "90ed7eba0fc4f2f75724356845a27e73",
"assets/images/watermock_ad_3.png": "cddd0151958e2959ad0738144a3df420",
"assets/images/Temperature.mp4": "f52db57589069c3e5df368a7dae3dd42",
"assets/images/home_cilcle_juece.png": "233b9476cf88ea7e2e5884a526811a17",
"assets/images/xzjg_title.png": "a8b6648e3ee50e4421b49865b6a72afc",
"assets/images/watermock_rjy_11.png": "c55fb3b7b8c1ae4aba53ce4685b266c3",
"assets/images/value_bg2.png": "2290457e5e8ecc05ca5541cefe575d97",
"assets/images/home_title.png": "5bf6cfacc6aea5233e272097a983918d",
"assets/images/watermock_rjy_9.png": "421f7254c4d3a92a6484e6d3c81bfc5b",
"assets/images/DO.mp4": "6ee84b95c910b9e5da4e232402cf7a70",
"assets/images/location.png": "1d536c3936c84a0374c152e5aea10f66",
"assets/images/sdl_title.png": "e5003e2aa52d95aa29b95e329484feb1",
"assets/images/wrj.png": "68af1e0f139fe72c309d9c73e4b843ce",
"assets/images/home_mn.png": "d54406a4979f6402402ee38344e786fb",
"assets/images/power_off.png": "be7aa20e933cf3f36d2ece9ce562e82e",
"assets/images/bt4.png": "0b2e460815af7972247e148e5aec11fd",
"assets/images/watermock_zl_3.png": "6b7024455b2d773d5eeaa45f22bdc907",
"assets/images/bt5.png": "5aa67d56b1a85731a3d2fad535783ae1",
"assets/images/edit.png": "5921c1d6468c297a516735f82cec55f4",
"assets/images/watermock_zll_6.png": "1e73307eedd782f39ad259fb6b3ae934",
"assets/images/sxxj_video.mp4": "aabb6a4fab86d5cb617cb64a224d3fad",
"assets/images/TP.mp4": "cdd756fbb940952d7511bb6ed1016e74",
"assets/images/watermock_xyl_9.png": "7d199d1163d27a7df6d36e4d17fe3147",
"assets/images/bt6.png": "3a83a0daa2742d944c5829eae34a18b7",
"assets/images/watermock_zl_11.png": "d953e2f8de8fa8a7f5d61d249818b9ea",
"assets/images/BOD.mp4": "0a3621e073525c3e872b448ce8833cf2",
"assets/images/index_mn_title.png": "a08be4e0282ce5fdd1b49d525ab76fd5",
"assets/images/bt2.png": "968e16d7cafee8ea124fb4cd547250bb",
"assets/images/swzx_title.png": "64fd50edad7273c5db866f993d20f43a",
"assets/images/watermock_sw_9.png": "a8574fd1371d6da32d86f88159bc001f",
"assets/images/Algae.mp4": "579e799038ba636e924f532f1076bb7a",
"assets/images/bt3.png": "1274aa2f7671a04358ec5435650d24d6",
"assets/images/szpj_bg.png": "f3a3469f83d2f812d2ef0bf8c6b72527",
"assets/images/szpj_title_%2520bg.png": "9f1069bd173b5d3f00e272aebd97e599",
"assets/images/bt1.png": "a0910f5adacb3c18ca91a6f8eb51f254",
"assets/images/watermock_zl_6.png": "f7cd7cd388eaeeabe7653f487475ab05",
"assets/images/water_mock_title.png": "9465a1ba811c2fcfadd258d15e0e2912",
"assets/images/watermock_zll_3.png": "dd2c403dd0acee6c24390d074696f00a",
"assets/images/bg.jpg": "d978ea37b6c1575a75289aafcf8d3421",
"assets/AssetManifest.json": "28dce8b7a50001a72a09fc8c876e71c3",
"assets/NOTICES": "66c3cf4d746ac6c8b38b49f30d6a3e78",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f87cbfe2b497ffccea6c7d9ddd067295",
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
