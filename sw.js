const cacheName = 'tarefas-pro-v1';
const assets = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com'
];

// Instala o Service Worker e guarda os arquivos básicos no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Faz o app funcionar mesmo se estiver sem internet (offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});