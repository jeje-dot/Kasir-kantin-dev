const CACHE_NAME = 'kasir-kantin-v1';
const urlsToCache = [
  '/Kasir-kantin-dev/',
  '/Kasir-kantin-dev/index.html',
  // WAJIB: Tambahkan path file CSS, JS, dan gambar lain milik Anda di bawah ini
  // '/Kasir-kantin-dev/style.css',
  // '/Kasir-kantin-dev/script.js',
  // '/Kasir-kantin-dev/icon-192x192.png'
];

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
