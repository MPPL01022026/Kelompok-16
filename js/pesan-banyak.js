/* Halaman Pesan Banyak: formulir -> pesan WhatsApp yang sudah tersusun rapi.
   Tanpa server: tombol kirim membuka wa.me ke nomor di js/data.js (WA_NUMBER). */
(function () {
    'use strict';
    var M = window.MLC, $ = function (id) { return document.getElementById(id); };
    var form = $('pb-form');
    if (!form) return;
    var rp = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };

    function tampilNomor(n) {                        // 6281234567890 -> 0812-3456-7890
        var d = '0' + String(n).replace(/^62/, '');
        return d.length > 8 ? d.slice(0, 4) + '-' + d.slice(4, 8) + '-' + d.slice(8) : d;
    }

    function isiPilihan() {
        var html = '<option value="">Pilih produk</option>';
        ['mochi', 'lukchup'].forEach(function (k) {
            var P = M.PRODUCTS[k];
            html += '<optgroup label="' + P.label + ' (' + rp(P.base) + ' per pcs)">' +
                P.groups[0].options.map(function (o) { return '<option value="' + k + ':' + o.id + '">' + P.label + ' ' + o.label + '</option>'; }).join('') + '</optgroup>';
        });
        $('pb-produk').innerHTML = html;
        $('pb-kemasan').innerHTML = '<option value="">Pilih kemasan</option>' +
            M.PRODUCTS.mochi.groups[1].options.map(function (o) { return '<option value="' + o.label + '">' + o.label + '</option>'; }).join('');
    }

    function baca() {
        var sel = $('pb-produk'), opt = sel.options[sel.selectedIndex];
        return {
            nama: $('pb-nama').value.trim(), wa: $('pb-wa').value.trim(),
            produk: sel.value && opt ? opt.text : '', jumlah: $('pb-jumlah').value.trim(),
            kemasan: $('pb-kemasan').value, tanggal: $('pb-tgl').value, catatan: $('pb-catatan').value.trim()
        };
    }

    function validasi(d) {                           // hanya nama & WhatsApp wajib (jumlah, kalau diisi, harus angka >= 1)
        var err = [], digit = d.wa.replace(/\D/g, '');
        if (!d.nama) err.push({ id: 'pb-nama', teks: 'Nama lengkap wajib diisi.' });
        if (digit.length < 9 || digit.length > 15) err.push({ id: 'pb-wa', teks: 'Nomor WhatsApp belum benar (9 sampai 15 angka).' });
        if (d.jumlah && !(parseInt(d.jumlah, 10) >= 1)) err.push({ id: 'pb-jumlah', teks: 'Jumlah pesanan minimal 1.' });
        return err;
    }

    function buatPesan(d) {
        var tgl = d.tanggal ? new Date(d.tanggal + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '-';
        return 'Halo, saya ingin PESAN BANYAK.\n' +
            'Nama: ' + d.nama + '\nNo. WhatsApp: ' + d.wa + '\n' +
            'Produk: ' + (d.produk || '-') + '\nJumlah: ' + (d.jumlah || '-') + '\nKemasan: ' + (d.kemasan || '-') + '\n' +
            'Tanggal kirim: ' + tgl + '\nCatatan: ' + (d.catatan || '-');
    }

    function init() {
        isiPilihan();
        var t = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
        $('pb-tgl').min = t.getFullYear() + '-' + p(t.getMonth() + 1) + '-' + p(t.getDate());
        $('pb-num').textContent = tampilNomor(M.WA_NUMBER);
        $('pb-chat').href = 'https://wa.me/' + M.WA_NUMBER + '?text=' + encodeURIComponent('Halo, saya ingin konsultasi soal pesanan.');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var d = baca(), err = validasi(d), msg = $('pb-msg');
            ['pb-nama', 'pb-wa', 'pb-jumlah'].forEach(function (id) { $(id).setAttribute('aria-invalid', 'false'); });
            if (err.length) {
                err.forEach(function (x) { $(x.id).setAttribute('aria-invalid', 'true'); });
                msg.className = 'pb-msg error';
                msg.textContent = err.map(function (x) { return x.teks; }).join(' ');
                $(err[0].id).focus();
                return;
            }
            var url = 'https://wa.me/' + M.WA_NUMBER + '?text=' + encodeURIComponent(buatPesan(d));
            window.open(url, '_blank');
            msg.className = 'pb-msg';
            msg.innerHTML = 'Pesananmu sudah disiapkan. Kalau WhatsApp tidak terbuka, <a href="' + url + '" target="_blank" rel="noopener">klik di sini</a>.';
        });
    }

    window.MLC_pb = { validasi: validasi, buatPesan: buatPesan, tampilNomor: tampilNomor };   // dipakai untuk pengujian
    init();
})();
