const CACHE_NAME = 'catatan-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/profile.png',
  'https://cdn.tailwindcss.com' // CDN cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});