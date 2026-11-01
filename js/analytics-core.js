/* "Mesin" analitik bersama (milik Ain). Dibaca oleh Beranda dan Dashboard.
   Kontrak yang dipakai halaman lain:  MLC_analytics.bestSellers(5)
   -> [{ produk, produkLabel, id, label, terjual }]  (urut dari terbanyak) */
(function () {
    var KEY = 'mlc_orders';      // sama dengan key di customizer.js

    function orders() {
        try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
    }
    function bestSellers(limit) {
        var D = window.MLC && window.MLC.PRODUCTS, hit = {};
        orders().forEach(function (o) {
            var P = D && D[o.produk];
            if (!P || !o.konfigurasi) return;
            var k = o.produk + '|' + o.konfigurasi[P.groups[0].key];   // rasa (mochi) atau bentuk (lukchup)
            hit[k] = (hit[k] || 0) + (o.jumlah || 1);
        });
        return Object.keys(hit).map(function (k) {
            var p = k.split('|'), P = D[p[0]];
            var opt = P.groups[0].options.filter(function (x) { return x.id === p[1]; })[0];
            return { produk: p[0], produkLabel: P.label, id: p[1], label: opt ? opt.label : p[1], terjual: hit[k] };
        }).sort(function (a, b) { return b.terjual - a.terjual; }).slice(0, limit || 5);
    }
    window.MLC_analytics = { orders: orders, bestSellers: bestSellers };
})();
