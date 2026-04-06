// Nom du cache
const CACHE_NAME = "compte-cache-v1";

// Fichiers à mettre en cache
const urlsToCache = [
  "/",
  "/index.html",
  "/Ratah.css",
  "/Ratah.js",
  "/Ratah.json",
  "/icon.png"
];

// Installation du service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Interception des requêtes
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Retourne la version en cache si disponible
      return response || fetch(event.request);
    })
  );
});
