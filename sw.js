const CACHE_NAME = 'openrbm-v0.5.2'
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.svg',
  './pwa-192x192.png',
  './pwa-512x512.png',
  './pwa-maskable-512x512.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  if (!event.request.url.startsWith(self.location.origin)) return

  // 1. Dokument-Navigation (HTML): Network-First mit Cache-Fallback (stellt sicher, dass HTML nie veraltet ist)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone()
            caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', copy))
          }
          return response
        })
        .catch(() => {
          return caches.match('./index.html').then((res) => res || caches.match('./'))
        }),
    )
    return
  }

  // 2. Assets (JS, CSS, Icons, Fonts): Cache-First mit Network-Fallback und Hintergrund-Aktualisierung
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Hintergrund-Aktualisierung (Stale-While-Revalidate)
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const copy = networkResponse.clone()
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy))
            }
          })
          .catch(() => {
            /* Offline, ignorieren */
          })
        return cachedResponse
      }

      // Nicht im Cache vorhanden: Aus dem Netzwerk holen und cachen
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse
        }
        const copy = networkResponse.clone()
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy))
        return networkResponse
      })
    }),
  )
})
