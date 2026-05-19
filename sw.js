const CACHE_NAME = "vga-school-app-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/admin.html",
  "/teacher.html",
  "/attendance.html",
  "/dashboard.html",
  "/homework.html",
  "/reports.html",
  "/super-admin.html",
  "/parent-view.html",
  "/admissions.html",
  "/bus-tracker.html",
  "/salary-slip.html",
  "/marks-entry.html",
  "/logo.png",
  "/launchericon-192x192.png",
  "/launchericon-512x512.png",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
