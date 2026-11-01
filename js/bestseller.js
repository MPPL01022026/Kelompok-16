/* Best Seller di Beranda: kartu berjajar ke samping, datanya langsung dari analitik (MLC_analytics).
   Selama belum ada pesanan, tampil keterangan kosong. */
(function () {
    'use strict';
    var box = document.getElementById('bs-list');
    if (!box) return;
    var M = window.MLC, K = window.MLC_kartu;
    var list = window.MLC_analytics ? window.MLC_analytics.bestSellers(4) : [];
    if (!list.length) {
        box.innerHTML = '<p class="bs-empty">Belum ada data best seller. Daftar ini terisi otomatis dari pesanan yang masuk.</p>';
        return;
    }
    box.innerHTML = '<div class="kp-grid">' + list.map(function (b, i) {
        var o = M.PRODUCTS[b.produk].groups[0].options.filter(function (x) { return x.id === b.id; })[0];
        return o ? K.html(b.produk, o, 'bs' + i, { badge: true, terjual: b.terjual }) : '';
    }).join('') + '</div>';
    K.foto(box);
})();
