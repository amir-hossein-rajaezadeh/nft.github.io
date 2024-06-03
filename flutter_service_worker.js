'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8613e03930df969977d9afe4b9f06d74",
"index.html": "8fd11f510723d0003ed1fc942f39c6cb",
"/": "8fd11f510723d0003ed1fc942f39c6cb",
"main.dart.js": "25911cbe0707d33435aac9985260e74e",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d4ae94ce260e4cee2226befe1c607f91",
"assets/AssetManifest.json": "a84a4d93075caa553a83ed1f21cc6d90",
"assets/NOTICES": "07f1422e9ea0d7c214d6dbd2eaa8918b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "2cbde3f62e587d334a18f16104310a0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7fbd75d4c596a67e02cc817400017125",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c3a5b34aa56640c55d4f1a264c41af23",
"assets/fonts/MaterialIcons-Regular.otf": "719a75e1eeb8d321ec96199f970a169a",
"assets/assets/images/nft/nfts/cat.jpeg": "076db55c88bf305979aa8e07a2e535b7",
"assets/assets/images/nft/nfts/glass.jpeg": "d50822422a7d74dc17df14f4dbe572b4",
"assets/assets/images/nft/nfts/astronat2.jpeg": "1bba3cec051854819fdcb99919a2c678",
"assets/assets/images/nft/nfts/dessert.jpeg": "684f51c764141cb44acf432792d5518a",
"assets/assets/images/nft/nfts/abstract.png": "640b35aee7b6a2b1386b37f03fab4e25",
"assets/assets/images/nft/nfts/pink_tree.jpeg": "8638ba20de901ce23332fd97ed9cff46",
"assets/assets/images/nft/nfts/space.jpeg": "4c27b8ab0f1f5e5258c702ec7ea0727e",
"assets/assets/images/nft/nfts/nature.jpeg": "578b04a0ff8b3bb0d76c15d7250f0603",
"assets/assets/images/nft/nfts/monkey2.jpeg": "b49a093b68a8d373a21a43e3c0e52ef8",
"assets/assets/images/nft/nfts/owl.jpeg": "bbcec4c1b1db91db15a55aef422ad1b2",
"assets/assets/images/nft/nfts/sci_fi.jpeg": "7e4e4050a3401fbbbb45b2b37198d8ae",
"assets/assets/images/nft/nfts/woman.jpeg": "26f4b6c0aa9914535da4fe07f7f51cae",
"assets/assets/images/nft/nfts/angel.jpeg": "6de8f099769d928c5284a7648a05582d",
"assets/assets/images/nft/nfts/monkey.jpeg": "58439ac5a35837e7fff69ccbf4c41716",
"assets/assets/images/nft/nfts/astronaut.jpeg": "cb8bc2ccce04433e35a88da7dc2b69bb",
"assets/assets/images/nft/nfts/digital_art.jpeg": "4c27b8ab0f1f5e5258c702ec7ea0727e",
"assets/assets/images/nft/nfts/art.png": "13b2e4884659f6fc9ed7689158832894",
"assets/assets/images/nft/nfts/portrait.jpeg": "b16f690ede71125bfe04b6ffcf14bacd",
"assets/assets/images/nft/nfts/3d.jpeg": "f0cedd83527c74b15a31eb98484ef3cb",
"assets/assets/images/nft/artists/jones.jpeg": "86e4a1c501a77dbf1b6ad3ee09841228",
"assets/assets/images/nft/artists/fewocious.jpeg": "4911891b3d68fbe4ba74e0d96d22bcbf",
"assets/assets/images/nft/artists/johnson.jpeg": "fe952a440993fd12830f6ab0ee00f69a",
"assets/assets/images/nft/artists/kim.jpeg": "d828f53736db70c1cf471da853b0695b",
"assets/assets/images/nft/artists/fraile.jpeg": "d06b3bf3316c54724432a884d7126634",
"assets/assets/images/nft/artists/mad_dog.png": "7fb3581001c6c19b467301adf513656c",
"assets/assets/images/nft/artists/winklemann.jpeg": "5efed1108c287d95e3800dc01ea8fa64",
"assets/assets/images/nft/artists/hobbs.jpeg": "9a87755ba7ff6b443a848496da7b888e",
"assets/assets/images/polygon.png": "292e18610a58cf0223e8bb4bd00559e7",
"assets/assets/images/background.png": "ab83fb3907c5751ecd6e2dfe76837453",
"assets/assets/images/eth_logo.png": "292d48c4042e13b28ad7df171112b35d",
"assets/assets/icons/analyze.png": "67b1590e324c5cb89ce9f6eeeacaf95a",
"assets/assets/icons/chart.png": "76dd7a14326e1c5cb9ebcc46c5a42815",
"assets/assets/icons/menu.png": "cb031a807f1a460f606d62294aff072e",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
