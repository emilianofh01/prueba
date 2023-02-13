
//nombre y version de cache y cache dinamica
const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic';
const assets = [
  './',
  './script.js',
  './index.html',
  './views/calendar.html',
  './views/contacts-add.html',
  './views/contacts.html',
  './views/error-connection.html',
  './views/error-unexpected.html',
  './views/homepage.html',
  './views/profile-client.html',
  './views/profile.html',
  './views/properties.html',
  './views/property-add.html',
  './views/property-details.html',
  './views/recover-password.html',
  './views/register.html',
  './views/sales.html',
  './views/schedule-add.html',
  './views/schedule-details.html',
  './views/schedule.html',
  './views/splash.html',
  './views/start.html'
  ]

//activos estaticos se almacenan en cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log('caching');  
        cache.addAll(assets)
      })
  );
});

//busqueda de recursos sin conexion
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>{
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key=> caches.delete(key))
      )
    })
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
        return cacheRes || fetch(e.request).then(fetchRes =>{
            return caches.open(dynamicCacheName).then(cache => {
                cache.put(e.request.url, fetchRes.clone());
                return fetchRes;
            })
        })
    })
)
})
