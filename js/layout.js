/* Header + menu untuk SEMUA halaman. Mau tambah/ubah menu? Cukup edit daftar PAGES di sini. */
(function () {
    var PAGES = [
        ['index.html', 'Beranda'],
        ['customizer.html', 'Customizer 2D'],
        ['analitik.html', 'Analytics Dashboard'],
        ['tentang.html', 'Tentang Kami'],
        ['pesan-banyak.html', 'Pesan Banyak', 'cta']      // 'cta' = tampil sebagai tombol
    ];
    var cur = location.pathname.split('/').pop() || 'index.html';
    var host = document.getElementById('site-header');
    if (!host) return;
    host.innerHTML =
        '<header><h1>Mochi &amp; Lukchup Customizer</h1>' +
        '<p>Web-Based Interactive 2D Mochi &amp; Lukchup Customizer &amp; Best-Seller Analytics Dashboard</p></header>' +
        '<nav>' + PAGES.map(function (p) {
            var cls = (p[2] ? 'nav-cta' : '') + (p[0] === cur ? ' active' : '');
            return '<a href="' + p[0] + '"' + (cls.trim() ? ' class="' + cls.trim() + '"' : '') + (p[0] === cur ? ' aria-current="page"' : '') + '>' + p[1] + '</a>';
        }).join('') + '</nav>';
})();
