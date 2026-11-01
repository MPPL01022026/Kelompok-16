/* Katalog Mochi & Lukchup di Beranda. Kartu dibuat otomatis dari js/data.js lewat js/kartu.js.
   Tombol "Pilih & Kustom" membuka customizer.html dengan rasa/bentuk itu sudah terpilih. */
(function () {
    'use strict';
    var M = window.MLC, K = window.MLC_kartu;
    var rp = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };

    function terlaris(prod) {                       // id terlaris di produk ini (dari analitik), untuk lencana
        var list = window.MLC_analytics ? window.MLC_analytics.bestSellers(50) : [];
        for (var i = 0; i < list.length; i++) if (list[i].produk === prod) return list[i].id;
        return null;
    }
    function render(prod) {
        var box = document.getElementById('kp-' + prod);
        if (!box) return;
        var P = M.PRODUCTS[prod], best = terlaris(prod);
        document.getElementById('kp-' + prod + '-price').textContent = rp(P.base) + ' per pcs';
        box.innerHTML = P.groups[0].options.map(function (o, i) {
            return K.html(prod, o, 'kp' + prod.charAt(0) + i, { badge: best === o.id });
        }).join('');
        K.foto(box);
    }
    render('mochi');
    render('lukchup');
})();
