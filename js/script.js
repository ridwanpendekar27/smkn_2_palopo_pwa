console.log("Website SMKN 2 Palopo berhasil dimuat.");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => {
      console.log("Service Worker aktif");
    })
    .catch((error) => {
      console.error("Service Worker gagal:", error);
    });
}
