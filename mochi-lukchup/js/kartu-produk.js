/* Kartu produk di Beranda (Mochi & Lukchup). Dibuat otomatis dari js/data.js, gambarnya dari js/art.js.
   Tombol "Pilih & Kustom" membuka customizer.html dengan rasa/bentuk itu sudah terpilih.
   Kalau ada foto asli (img/mochi/<id>-luar.jpg, img/lukchup/<id>.jpg) otomatis dipakai. */
(function () {
    'use strict';
    var M = window.MLC, ART = window.MLC_art;
    var rp = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };

    function terlaris(prod) {                       // id terlaris di produk ini, dari analitik (kalau sudah ada pesanan)
        var list = window.MLC_analytics ? window.MLC_analytics.bestSellers(50) : [];
        for (var i = 0; i < list.length; i++) if (list[i].produk === prod) return list[i].id;
        return null;
    }

    function render(prod) {
        var box = document.getElementById('kp-' + prod);
        if (!box) return;
        var P = M.PRODUCTS[prod], g = P.groups[0], best = terlaris(prod);
        document.getElementById('kp-' + prod + '-price').textContent = rp(P.base) + ' per pcs';

        box.innerHTML = g.options.map(function (o, i) {
            var cfg = { kemasan: 'mika' }; cfg[g.key] = o.id;
            var svg = '<svg viewBox="0 0 240 240" aria-hidden="true">' + ART.svg(prod, cfg, { p: 'kp' + prod.charAt(0) + i, cut: 0, noPhoto: true }) + '</svg>';
            var base = prod === 'mochi' ? 'img/mochi/' + o.id + '-luar' : 'img/lukchup/' + o.id;
            return '<article class="kp-card">' + (best === o.id ? '<span class="kp-badge">Best Seller</span>' : '') +
                '<div class="kp-art" data-base="' + base + '" data-name="' + o.label + '">' + svg + '</div>' +
                '<div class="kp-body"><h3>' + (o.emoji ? o.emoji + ' ' : '') + o.label + '</h3>' +
                '<p>' + (o.isi || 'Bentuk ' + o.label.toLowerCase()) + '</p>' +
                '<div class="kp-foot"><strong>' + rp(P.base + o.price) + '</strong>' +
                '<a class="kp-pick" href="customizer.html?produk=' + prod + '&amp;id=' + o.id + '">Pilih &amp; Kustom</a></div></div></article>';
        }).join('');

        Array.prototype.forEach.call(box.querySelectorAll('.kp-art'), function (el) {   // ganti dengan foto asli kalau ada
            ART.photo(el.dataset.base, function (url) { el.innerHTML = '<img src="' + url + '" alt="' + el.dataset.name + '" loading="lazy">'; });
        });
    }

    render('mochi');
    render('lukchup');
})();
