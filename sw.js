// Service Worker sederhana untuk syarat PWA
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // Biarkan kosong, biarkan browser menangani fetch normal
});
