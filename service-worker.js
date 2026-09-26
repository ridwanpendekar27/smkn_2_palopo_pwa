const CACHE_NAME = "smkn2-palopo-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./images/sekolah.jpg",
  "./images/logo-192x192.png",
  "./images/logo-512x512.png",
  "./images/background.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
