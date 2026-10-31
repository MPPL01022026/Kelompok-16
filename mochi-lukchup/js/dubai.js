/* Dubai Chewy Cookie: hanya bisa dipesan hari Jumat. Dipakai di index.html.
   Jumat -> blok spesial di atas Beranda. Hari lain -> banner kecil melayang.
   Mau dihapus? Cabut <div id="dubai-slot">, dubai.js, dan dubai.css dari index.html.
   Uji tampilan: index.html?hari=jumat  atau  ?hari=senin */
(function () {
    'use strict';
    var D = window.MLC.DUBAI, WA = window.MLC.WA_NUMBER, qty = 1;
    var HARI = { minggu: 0, senin: 1, selasa: 2, rabu: 3, kamis: 4, jumat: 5, sabtu: 6 };
    var $ = function (id) { return document.getElementById(id); };

    function hariIni() {
        var q = (new URLSearchParams(location.search).get('hari') || '').toLowerCase();
        return HARI[q] !== undefined ? HARI[q] : new Date().getDay();
    }
    function isJumat() { return hariIni() === D.hariPesan; }
    function foto() { return '<img src="' + D.foto + '" alt="' + D.nama + '" onerror="this.style.display=\'none\'">'; }

    function blok(slot) {
        slot.innerHTML =
            '<div class="container db-block"><div class="db-img">' + foto() + '<span>Cookie</span></div>' +
            '<div class="db-info"><span class="db-tag">Spesial Jumat</span><h2>' + D.nama + '</h2><p>' + D.deskripsi + '</p>' +
            (D.harga ? '<p class="db-price">Rp' + D.harga.toLocaleString('id-ID') + ' per pcs</p>' : '') +
            '<div class="db-act"><div class="db-qty"><button type="button" data-act="minus" aria-label="Kurangi">-</button><strong id="db-q">' + qty + '</strong><button type="button" data-act="plus" aria-label="Tambah">+</button></div>' +
            '<button type="button" class="btn-pill primary" data-act="order">Pesan lewat WhatsApp</button></div>' +
            '<small id="db-msg">Pemesanan dibuka khusus hari Jumat.</small></div></div>';
        slot.addEventListener('click', function (e) {
            var b = e.target.closest('[data-act]'); if (!b) return;
            if (b.dataset.act === 'minus') qty = Math.max(1, qty - 1);
            if (b.dataset.act === 'plus') qty = Math.min(99, qty + 1);
            $('db-q').textContent = qty;
            if (b.dataset.act !== 'order') return;
            if (!isJumat()) { $('db-msg').textContent = 'Maaf, pemesanan Dubai Chewy Cookie sudah ditutup. Buka lagi hari Jumat.'; return; }
            var teks = 'Halo, saya mau pesan ' + D.nama + ' (spesial Jumat).\nJumlah: ' + qty + '\nTanggal: ' + new Date().toLocaleDateString('id-ID');
            window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(teks), '_blank');
        });
    }

    function banner() {
        var n = (D.hariPesan - hariIni() + 7) % 7;
        var el = document.createElement('div');
        el.className = 'db-banner'; el.setAttribute('role', 'status');
        el.innerHTML = foto() + '<div><strong>' + D.nama + '</strong><span>Hanya bisa dipesan tiap Jumat. ' + (n === 1 ? 'Besok Jumat!' : n + ' hari lagi.') + '</span></div><button type="button" aria-label="Tutup">&times;</button>';
        document.body.appendChild(el);
        el.querySelector('button').addEventListener('click', function () { el.classList.remove('show'); });
        setTimeout(function () { el.classList.add('show'); }, 1000);
    }

    var slot = $('dubai-slot');
    if (slot) { if (isJumat()) blok(slot); else banner(); }
})();
