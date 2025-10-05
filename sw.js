const CACHE_NAME = 'aventra-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/tailwind.min.css',
  '/assets/favicons/apple-touch-icon.png',
  '/assets/favicons/favicon-32x32.png',
  '/assets/favicons/favicon-16x16.png',
  '/assets/favicons/android-chrome-192x192.png',
  '/assets/favicons/android-chrome-512x512.png'
];

// Install event: caching files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event: respond with cached files if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
