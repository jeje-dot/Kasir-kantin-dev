const CACHE_NAME = 'kasir-kantin-v1';
const urlsToCache = [
  '/Kasir-kantin-dev/',
  '/Kasir-kantin-dev/index.html',
  '/Kasir-kantin-dev/manifest.json',
  '/Kasir-kantin-dev/icon_mesin_kasir_192x192.png',
  '/Kasir-kantin-dev/icon_mesin_kasir_512x512.png'
];

// ... kode sisa sw.js di bawahnya biarkan tetap sama


// Install Service Worker dan simpan file ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ambil file dari cache saat offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Jika ada di cache, kembalikan response cache. Jika tidak, ambil dari jaringan
        return response || fetch(event.request);
      })
  );
});
