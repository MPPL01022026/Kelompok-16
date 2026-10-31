/* ============================================================
   DATA BERSAMA - satu-satunya tempat mengubah rasa, harga, nomor WA.
   Dipakai oleh Beranda, Customizer, dan (nanti) Dashboard.
   ============================================================ */
(function () {
    var KEMASAN = { key: 'kemasan', label: 'Kemasan', type: 'chip', options: [
        { id: 'mika', label: 'Mika', price: 0 },        // harga kemasan: isi kalau ada biaya tambahan
        { id: 'kraft', label: 'Box kraft', price: 0 }
    ]};

    window.MLC = {
        WA_NUMBER: '6281234567890',                     // GANTI dengan nomor WhatsApp toko (format 62..., tanpa + atau 0)
        FOTO_EXT: ['webp', 'jpg', 'jpeg', 'png'],       // ekstensi foto yang dicoba otomatis

        // Dubai Chewy Cookie: hanya bisa dipesan hari Jumat (0=Minggu ... 5=Jumat)
        DUBAI: {
            nama: 'Dubai Chewy Cookie', hariPesan: 5, harga: null,   // harga: isi angka, mis. 15000
            foto: 'img/dubai_chewy_cookie.jpg',
            deskripsi: 'Cookie kenyal spesial yang pemesanannya hanya dibuka setiap hari Jumat.'
        },

        // kulit = warna kulit, cream = warna lapisan dalam, crumb = warna taburan di atas
        PRODUCTS: {
            mochi: { label: 'Mochi', base: 5000, groups: [
                { key: 'rasa', label: 'Pilih rasa', type: 'card', options: [
                    { id: 'mangga', label: 'Mangga', isi: 'Mangga + cream putih', price: 0, kulit: '#ffe08a', cream: '#fffaf0', crumb: '#ffb43a' },
                    { id: 'strawberry-coklat', label: 'Strawberry coklat', isi: 'Coklat + strawberry', price: 0, kulit: '#c9a07c', cream: '#6b4330', crumb: '#ff9fb5' },
                    { id: 'keju', label: 'Keju', isi: 'Cream keju', price: 0, kulit: '#fff1c4', cream: '#ffd976', crumb: '#f2b134' },
                    { id: 'coklat-ori', label: 'Coklat ori', isi: 'Coklat', price: 0, kulit: '#b98a68', cream: '#5a3a2e', crumb: '#4a2f25' },
                    { id: 'oreo', label: 'Oreo', isi: 'Oreo cream', price: 0, kulit: '#ddd6dc', cream: '#fffdf8', crumb: '#2f2a2d' },
                    { id: 'milo', label: 'Milo', isi: 'Milo cream', price: 0, kulit: '#d6b88f', cream: '#ecd3a8', crumb: '#7a4a28' },
                    { id: 'matcha-anggur', label: 'Matcha anggur', isi: 'Anggur bulat + cream putih', price: 0, kulit: '#b9db9a', cream: '#fffdf8', crumb: '#7fae58' },
                    { id: 'strawberry-cream', label: 'Strawberry cream', isi: 'Strawberry + cream putih', price: 0, kulit: '#ffc8d8', cream: '#fffdf8', crumb: '#ff8fb0' }
                ]},
                KEMASAN
            ]},
            lukchup: { label: 'Lukchup', base: 2000, groups: [
                { key: 'bentuk', label: 'Bentuk buah', type: 'chip', options: [
                    { id: 'jagung', label: 'Jagung', emoji: '\uD83C\uDF3D', price: 0 },
                    { id: 'pisang', label: 'Pisang', emoji: '\uD83C\uDF4C', price: 0 },
                    { id: 'alpukat', label: 'Alpukat', emoji: '\uD83E\uDD51', price: 0 },
                    { id: 'strawberry', label: 'Strawberry', emoji: '\uD83C\uDF53', price: 0 },
                    { id: 'cherry', label: 'Cherry', emoji: '\uD83C\uDF52', price: 0 },
                    { id: 'peach', label: 'Peach', emoji: '\uD83C\uDF51', price: 0 },
                    { id: 'cabai', label: 'Cabai', emoji: '\uD83C\uDF36\uFE0F', price: 0 }
                ]},
                KEMASAN
            ]}
        }
    };
})();
