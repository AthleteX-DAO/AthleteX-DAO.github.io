'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon_ax_logo.png": "b6a5f69d265e5f93835406311b386b19",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/BebasNeuePro.ttf": "2ee5cc1f1b5f505a2b2d5b3f56aad445",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/images/apt_inverted.png": "981da6d35a6514449dc074785d7c4377",
"assets/assets/images/w_matic.png": "45de5dba886449815723151c829961ec",
"assets/assets/images/SX_Small.png": "c70aab0b2b63efe1f7652e5151d506b2",
"assets/assets/images/blurredBackground.png": "0d7a4c46d222e1b60935ee609da1245a",
"assets/assets/images/Polygon_Small.png": "c97486a8e442cdae3416b91bda6e8543",
"assets/assets/images/weth_small.png": "4f93c94397fba589fbfa091bb8657a83",
"assets/assets/images/barn.png": "ed25463dcfb3b947e35ad2f559a7a6e9",
"assets/assets/images/X_white.png": "94037c56e980cdcc82b3db92e077f523",
"assets/assets/images/x.png": "1c2e40d02255bfd4153ef41290986d03",
"assets/assets/images/trophy.png": "867c15f1e51a3213091f5e9e026cd9c5",
"assets/assets/images/X_Logo_Black_BR.png": "b6a5f69d265e5f93835406311b386b19",
"assets/assets/images/search.png": "aba07a1373df7ca225b050cae7f6c95c",
"assets/assets/images/geth.png": "856bfdb63dc0d6fad6b92fc6a29719e1",
"assets/assets/images/apt.png": "13185f87fb0627b2691ce0d54b800800",
"assets/assets/images/coins.png": "071c3b5d6db43a60e207853c80bc9be7",
"assets/assets/images/USDC_small.png": "11c4f4084b35385be4560f6933ed00a6",
"assets/assets/images/matic.png": "5f83afb27e86fcfc3ffe6bb4f2e4c06c",
"assets/assets/images/AXMarkets.png": "4978d81e43d92e80889beb79900f0fc4",
"assets/assets/images/axBackground.jpeg": "a9f820f73e35b9520f19017893002ee6",
"assets/assets/images/x.jpg": "1e840bc946e4e23c279d87fa853566fd",
"assets/assets/images/fox.png": "bd49a414cb6ad57fe37a52aa1084a8a8",
"assets/assets/images/swap.png": "91a4439c68ff9771fffb2f5ffcea4492",
"assets/assets/images/AthleteX_Logo_Vector.png": "3aec430c17334c859f27b3b946cd6d16",
"assets/assets/images/apt_noninverted.png": "14a452bbb34fda040ac016609bb50d7e",
"assets/assets/images/sx.png": "f46f96e0bb5797a7b7e2c1b2bfb41d2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/NOTICES": "67dc8c6b56622cc6c53e4554f712adf7",
"assets/FontManifest.json": "c769393fb2b9979c0ff5fd7f45efb600",
"assets/images/blurredBackground.png": "0d7a4c46d222e1b60935ee609da1245a",
"assets/images/axBackground.png": "6209d79dd4356eb2b029b7962c76813f",
"assets/images/X_white.png": "94037c56e980cdcc82b3db92e077f523",
"assets/images/x.png": "1c2e40d02255bfd4153ef41290986d03",
"assets/images/trophy.png": "867c15f1e51a3213091f5e9e026cd9c5",
"assets/images/apt.png": "13185f87fb0627b2691ce0d54b800800",
"assets/images/background.jpeg": "23cc9e4b3c3ed45e5470bc1409ad6fcb",
"assets/images/matic.png": "5f83afb27e86fcfc3ffe6bb4f2e4c06c",
"assets/images/AXMarkets.png": "4978d81e43d92e80889beb79900f0fc4",
"assets/images/axBackground.jpeg": "a9f820f73e35b9520f19017893002ee6",
"assets/images/x.jpg": "1e840bc946e4e23c279d87fa853566fd",
"assets/images/fox.png": "bd49a414cb6ad57fe37a52aa1084a8a8",
"assets/images/asu-hero.jpg": "bd6c4aa85d28683471c674231396fcb4",
"assets/images/sx.png": "f46f96e0bb5797a7b7e2c1b2bfb41d2e",
"assets/AssetManifest.json": "c1a8c7aa4d207b0464ff890145629443",
"manifest.json": "f5956141d3e80bf66b19e44d17fceba9",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"index.html": "abaabc5f6836d0537c98c1bac025da38",
"/": "abaabc5f6836d0537c98c1bac025da38",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"icons/android-chrome-192x192.png": "a0551f4bd547f77f47c839b5e8288212",
"icons/X_white.png": "94037c56e980cdcc82b3db92e077f523",
"icons/x.png": "1c2e40d02255bfd4153ef41290986d03",
"icons/apple-touch-icon.png": "b724e2e1a41d6ed46b290cfd7a0e816a",
"icons/android-chrome-512x512.png": "1b4b86b4e68c7e47dfb133423bafa617",
"favicon.png": "b6a5f69d265e5f93835406311b386b19",
"version.json": "0cfdb638e59128b2786ec226192551de",
"main.dart.js": "ceab67761a0d5d004385c9e7e92f20c0"
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
