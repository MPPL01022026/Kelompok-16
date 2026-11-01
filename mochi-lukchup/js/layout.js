/* Header + menu untuk SEMUA halaman. Mau tambah/ubah menu? Cukup edit daftar PAGES di sini. */
(function () {
    var PAGES = [
        ['index.html', 'Beranda'],
        ['customizer.html', 'Customizer 2D'],
        ['analitik.html', 'Analytics Dashboard'],
        ['tentang.html', 'Tentang Kami']
    ];
    var cur = location.pathname.split('/').pop() || 'index.html';
    var host = document.getElementById('site-header');
    if (!host) return;
    host.innerHTML =
        '<header><h1>Mochi &amp; Lukchup Customizer</h1>' +
        '<p>Web-Based Interactive 2D Mochi &amp; Lukchup Customizer &amp; Best-Seller Analytics Dashboard</p></header>' +
        '<nav>' + PAGES.map(function (p) {
            return '<a href="' + p[0] + '"' + (p[0] === cur ? ' class="active" aria-current="page"' : '') + '>' + p[1] + '</a>';
        }).join('') + '</nav>';
})();
