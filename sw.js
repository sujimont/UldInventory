self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // Pass everything straight to the network so you always get the freshest code
    event.respondWith(fetch(event.request));
});
