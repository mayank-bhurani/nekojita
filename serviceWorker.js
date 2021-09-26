const mMFood = "nekojita"
const assets = [
  "/",
  "/index.html",
  "/styles/style.css",
  "/about.html",
  "/effects.html",
  "/for-nerds.html",
  "/general-guide.html",
  "/gut-microbiome.html",
  "/habits.html",
  "/how-to-use.html",
  "/macros.html",
  "/micros.html",
  "/mental-health.html",
  "/scripts/script.js",
  "/scripts/micro.js",
  "/assets/vectors/arrow-dark.svg",
  "/assets/vectors/arrow-light.svg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(mMFood).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })