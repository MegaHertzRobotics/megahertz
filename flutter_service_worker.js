'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ad4d0ae36753f83a6c8bec04030dcb52",
"version.json": "fc0f61c29c3c0966042360fa02f04d79",
"index.html": "31c9207067b0d01b6821d666bd49d68a",
"/": "31c9207067b0d01b6821d666bd49d68a",
"main.dart.js": "7af111a3c3d86f608585c15a30edc9b7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-192%20copy.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-192.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/Icon-maskable-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"icons/icon-512.png": "a2ea6da1133e0fac80b9b019b6b6abb9",
"manifest.json": "34d7fd14baecc6ae0102cd66b72802c7",
"assets/AssetManifest.json": "bfcc88a1c139877047cc1d09127448f3",
"assets/NOTICES": "c60626b8856e17bbfabcce8f9321490f",
"assets/FontManifest.json": "26d0093cbf8aaa89eef4740f464063ef",
"assets/AssetManifest.bin.json": "66e2c22709c9d25e4bd2757c989e0b55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "55bcb54b961981f483e0bc0d8b488b76",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "479dca6cc3177a06bd65b4cbe47eccbd",
"assets/fonts/MaterialIcons-Regular.otf": "a48e2c3c5eec924fd297747cc29958b3",
"assets/assets/collaboration/alpha_codes_logo.png": "af0c101d3a8a31d9841d26ef200fc128",
"assets/assets/collaboration/skill-o-karm.jpg": "54e4e03916bc8a0f5d630e5f6ca8d6df",
"assets/assets/collaboration/KIIT_PD2S.png": "75360c838fda7c93e42e56ece3fd362c",
"assets/assets/collaboration/KES.png": "d1d3710962ffd1513928248b11e3c59c",
"assets/assets/alpha_codes_logo.png": "af0c101d3a8a31d9841d26ef200fc128",
"assets/assets/SCIENCE%2520EXHIBITION%2520MELA.pdf": "e729a9150d87ef47a11e57ffa7a7298b",
"assets/assets/achivements_Participation_photos/img09.jpg": "8fe8920fa6f8e8de3cd5a9856ad00316",
"assets/assets/achivements_Participation_photos/img08.jpg": "90afa54316f9f4c7fcec1ee301ddac0c",
"assets/assets/achivements_Participation_photos/img03.png": "8538dea1c975b6f65b49fb98baacbd0a",
"assets/assets/achivements_Participation_photos/img02.png": "237c9beca4a162f3b9153f100d36ab16",
"assets/assets/achivements_Participation_photos/img01.jpg": "2ae548bda8ae415a63b80bbba77c530b",
"assets/assets/achivements_Participation_photos/img05.jpg": "243ac55ccbe5d6c76cfebba3ac83f8fe",
"assets/assets/achivements_Participation_photos/img04.png": "7796693cecf7f481eacb2c53acd66a04",
"assets/assets/achivements_Participation_photos/img06.jpg": "d67dbdd4f1267a182d61168fde7678d2",
"assets/assets/achivements_Participation_photos/img07.jpg": "e3c95d7bac2dad92097ec751434512bd",
"assets/assets/youtube/pic04.webp": "53ab9f2fc1eec81824fc70b7547f774f",
"assets/assets/youtube/pic03.webp": "0e7d09f24ca8f656b884b04b0e6ac8b6",
"assets/assets/youtube/pic02.webp": "1215da4cea8ae98e6c5530c82efd4de7",
"assets/assets/youtube/pic01.webp": "84cb02cf3435190be91761376c09ce1e",
"assets/assets/custom_project/custom%2520battery.png": "e721ce3365357a39bc494bc98b59e816",
"assets/assets/custom_project/esp32.png": "2c53839c365695905eb54143d6c76d1f",
"assets/assets/custom_project/arduino.png": "9778f33262a361782a92099f5d206d70",
"assets/assets/custom_project/custom_project_school.png": "f70d17e72695ad1620875625c79cfe10",
"assets/assets/custom_project/esp8266.png": "c54814b9ee08351e9724ef6fac04b2d9",
"assets/assets/logo.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/splash_screen.png": "53d747599736adb8bb493748471be9ad",
"assets/assets/parts/IOT%2520and%2520Wireless.png": "f2bf6314d830aa31cb4a5b36d3053988",
"assets/assets/parts/electronics%2520components.png": "5a025ef9ea56fbfabfbd8446e22932a5",
"assets/assets/parts/wires%2520and%2520cables.png": "0cbcde195da4b33e8aebbe64f388f223",
"assets/assets/parts/electronic%2520modules%2520and%2520displays.png": "253f716e12a53212977f58685cc198b9",
"assets/assets/parts/motors%2520and%2520drivers.png": "e11c5ce8f2a0071f948bae9151aa3151",
"assets/assets/parts/Sensors%25202.png": "822d4b1f93ffca4787158b57e8df9f58",
"assets/assets/parts/Arduino%2520Boards.png": "c99152970d667cc081c704037ad91c85",
"assets/assets/parts/batterys.png": "db97cbdaec92409e1cfe2c5956f031d7",
"assets/assets/splash_screen_icon.svg": "d2f765f8dc7c8883645dfefa41f823fe",
"assets/assets/splash_screen_icon.jpeg": "82dbbdee7e260b01f021d7bd004f6413",
"assets/assets/members/aman.jpeg": "2836db6e96a430caad22bb30fccdc50b",
"assets/assets/members/riddhi.jpeg": "ab3e324c8985ae348c1cf8d03900d69d",
"assets/assets/members/piyush.jpeg": "06cb19fc12d17d27ae07105b90a2c3c4",
"assets/assets/members/ombarik.jpeg": "e7a7ef00c47b18c91017ec3b7b85ae56",
"assets/assets/members/som.jpeg": "1ab7fe9a5580a367237ef34705f58c99",
"assets/assets/members/lagan.jpeg": "08046b0a8240be7073aa5ac9cbbc624e",
"assets/assets/members/rehyan.jpeg": "13924c533b320156119ecbf45444397d",
"assets/assets/members/amrutansh.jpeg": "3f708d5473c27b52cc4321d598846287",
"assets/assets/members/tushar.jpeg": "7bc3ecb85844ca90a1fb2e6049769e1e",
"assets/assets/members/sujal.jpeg": "83cb986edee0904501609be961747580",
"assets/assets/members/shantanu.jpeg": "fa0b3e1b38e622b223ea2ee694cf240d",
"assets/assets/members/tanmoy.jpeg": "28bbe0ec0d15c1f54143514ca498234d",
"assets/assets/events/event.JPG": "137495930cf5f80c32b205e7a1dd6c7e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
