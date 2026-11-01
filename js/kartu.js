/* Pembuat kartu produk bersama: dipakai Best Seller dan katalog di Beranda.
   Ubah tampilan kartu cukup di sini (gayanya ada di css/kartu-produk.css). */
(function () {
    'use strict';
    var M = window.MLC, ART = window.MLC_art;
    var rp = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };

    // prod: 'mochi' | 'lukchup', o: opsi dari data.js, uid: awalan id SVG (unik per kartu), x: { badge: true, terjual: n }
    function html(prod, o, uid, x) {
        x = x || {};
        var P = M.PRODUCTS[prod], g = P.groups[0];
        var cfg = { kemasan: 'mika' }; cfg[g.key] = o.id;
        var svg = '<svg viewBox="0 0 240 240" aria-hidden="true">' + ART.svg(prod, cfg, { p: uid, cut: 0, noPhoto: true }) + '</svg>';
        var base = prod === 'mochi' ? 'img/mochi/' + o.id + '-luar' : 'img/lukchup/' + o.id;
        return '<article class="kp-card">' + (x.badge ? '<span class="kp-badge">Best Seller</span>' : '') +
            '<div class="kp-art" data-base="' + base + '" data-name="' + o.label + '">' + svg + '</div>' +
            '<div class="kp-body"><h3>' + (o.emoji ? o.emoji + ' ' : '') + o.label + '</h3>' +
            '<p>' + (o.isi || 'Bentuk ' + o.label.toLowerCase()) + '</p>' +
            (x.terjual ? '<small class="kp-sold">' + x.terjual + ' terjual</small>' : '') +
            '<div class="kp-foot"><strong>' + rp(P.base + o.price) + '</strong>' +
            '<a class="kp-pick" href="customizer.html?produk=' + prod + '&amp;id=' + o.id + '">Pilih &amp; Kustom</a></div></div></article>';
    }

    // ganti gambar SVG dengan foto asli kalau filenya ada (img/mochi/<id>-luar.jpg, img/lukchup/<id>.jpg)
    function foto(root) {
        Array.prototype.forEach.call(root.querySelectorAll('.kp-art'), function (el) {
            ART.photo(el.dataset.base, function (url) { el.innerHTML = '<img src="' + url + '" alt="' + el.dataset.name + '" loading="lazy">'; });
        });
    }

    window.MLC_kartu = { html: html, foto: foto };
})();
