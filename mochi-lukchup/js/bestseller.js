/* Bagian Best Seller di Beranda. Datanya diambil langsung dari MLC_analytics (analytics-core.js).
   Selama belum ada pesanan, tampil keterangan kosong. */
(function () {
    var box = document.getElementById('bs-list');
    if (!box) return;
    var list = window.MLC_analytics ? window.MLC_analytics.bestSellers(5) : [];
    if (!list.length) {
        box.innerHTML = '<p class="bs-empty">Belum ada data best seller. Daftar ini terisi otomatis dari pesanan yang masuk.</p>';
        return;
    }
    box.innerHTML = '<ol class="bs-items">' + list.map(function (b, i) {
        return '<li class="bs-item"><span class="bs-rank">' + (i + 1) + '</span><div><strong>' + b.label + '</strong><small>' + b.produkLabel + '</small></div><span class="bs-count">' + b.terjual + ' terjual</span></li>';
    }).join('') + '</ol>';
})();
