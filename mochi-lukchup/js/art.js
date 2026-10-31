/* ============================================================
   GAMBAR 2D Mochi & Lukchup (SVG). Dipakai Customizer DAN kartu produk di Beranda.
   Ubah tampilan gambar (bentuk, warna, isian, efek belah) cukup di file ini.
   Pemakaian:  MLC_art.svg('mochi', { rasa: 'oreo', kemasan: 'mika' }, { cut: 0..1, p: 'awalan-id', noPhoto: true })
   ============================================================ */
(function () {
    'use strict';
    var PRODUCTS = window.MLC.PRODUCTS;
    var P = 'cz';                            // awalan id SVG (harus unik per gambar di satu halaman)
    function opt(prod, key, id) {
        var g = PRODUCTS[prod].groups.filter(function (x) { return x.key === key; })[0];
        return g.options.filter(function (o) { return o.id === id; })[0];
    }

    function shade(hex, p) {
        var n = parseInt(hex.slice(1), 16), t = p < 0 ? 0 : 255, k = Math.abs(p);
        var r = n >> 16, g = (n >> 8) & 255, b = n & 255;
        r = Math.round((t - r) * k + r); g = Math.round((t - g) * k + g); b = Math.round((t - b) * k + b);
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    function shadow() { return '<ellipse cx="120" cy="194" rx="72" ry="8" fill="#000" opacity=".07"/>'; }

    function tray(kind) {
        if (kind === 'kraft') {
            var c = '#d8b98a';
            return '<path d="M24 178 H216 L203 229 H37 Z" fill="' + c + '" stroke="' + shade(c, -0.14) + '" stroke-width="2.5" stroke-linejoin="round"/>' +
                   '<path d="M24 178 H216" stroke="' + shade(c, -0.2) + '" stroke-width="5" stroke-linecap="round"/>' +
                   '<rect x="88" y="198" width="64" height="16" rx="8" fill="#fff" opacity=".55"/>';
        }
        return '<path d="M26 176 H214 L202 228 H38 Z" fill="#dff0ff" fill-opacity=".35" stroke="#a9c9e4" stroke-width="2.5" stroke-linejoin="round"/>' +
               '<path d="M26 176 H214" stroke="#a9c9e4" stroke-width="5" stroke-linecap="round"/>' +
               '<path d="M52 184 L46 218 M72 184 L68 218" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>';
    }

    /* --- Mochi --- */
    var BODY = 'M40 150 C40 85 80 60 120 60 C160 60 200 85 200 150 C200 175 170 190 120 190 C70 190 40 175 40 150 Z';
    var INSET = 'translate(120 135) scale(.84) translate(-120 -135)';
    var CRUMB_PTS = [[100,72],[110,68],[122,66],[134,68],[146,74],[156,82],[164,92],[112,76],[128,74],[142,80],[152,90],[120,82],[136,86],[104,84],[160,104],[148,98]];
    var CHUNK_PTS = [[100,110],[134,104],[112,138],[146,138],[96,150],[126,162],[150,116],[124,120]];

    function crumbs(color) {
        var s = '<g clip-path="url(#' + P + '-clip)">';
        CRUMB_PTS.forEach(function (p, i) {
            s += '<rect x="' + (p[0] - 3) + '" y="' + (p[1] - 1.6) + '" width="' + (5 + i % 3) + '" height="3.2" rx="1.4" fill="' + shade(color, (i % 3 - 1) * 0.18) + '" transform="rotate(' + (i * 53) + ' ' + p[0] + ' ' + p[1] + ')"/>';
        });
        return s + '</g>';
    }
    function mangoChunk() {                          // sepotong mangga: sudut membulat, sedikit miring (bukan kubus)
        var d = 'M-20 -28 L16 -30 C26 -30.5 31 -25 31 -16 L32 12 C32 22 26 28 16 29 L-16 30 C-26 30 -31 24 -31 14 L-31 -16 C-31 -24 -27 -28 -20 -28Z';
        return '<defs><linearGradient id="' + P + '-mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd24d"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs>' +
               '<g transform="translate(120 128) rotate(-10) scale(.88)">' +
               '<path d="' + d + '" fill="url(#' + P + '-mg)" stroke="#f59a00" stroke-width="1.5" stroke-linejoin="round"/>' +
               '<path d="' + d + '" transform="scale(.84)" fill="none" stroke="#fff0b0" stroke-opacity=".6" stroke-width="3" stroke-linejoin="round"/>' +
               '<path d="M-18 -4 C-8 -8 4 -6 16 -10 M-20 10 C-6 6 6 8 20 4" stroke="#ff9500" stroke-opacity=".22" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
               '<ellipse cx="-14" cy="-16" rx="13" ry="5" fill="#fff" opacity=".35" transform="rotate(-8 -14 -16)"/></g>';
    }
    function strawberryHalf() {                      // strawberry belah: kulit merah, daging pink pucat, serat, biji kuning
        var o = 'M120 68 C140 80 156 106 152 134 C149 154 136 164 120 164 C104 164 91 154 88 134 C84 106 100 80 120 68Z';
        var seeds = [[103,92],[137,92],[94,114],[146,114],[93,138],[147,138],[108,155],[132,155],[120,80]];
        var fib = 'M120 130 Q104 118 98 98 M120 130 Q120 110 120 86 M120 130 Q136 118 142 98 M120 130 Q100 130 92 128 M120 130 Q140 130 148 128 M120 130 Q106 144 100 154 M120 130 Q134 144 140 154';
        return '<defs><radialGradient id="' + P + '-sb" cx="50%" cy="55%" r="60%"><stop offset="0" stop-color="#f25a5f"/><stop offset="1" stop-color="#d82533"/></radialGradient></defs>' +
               '<g transform="translate(120 128) scale(.92) translate(-120 -116)">' +
               '<path d="' + o + '" fill="url(#' + P + '-sb)"/>' +
               '<path d="' + fib + '" stroke="#ff9d9a" stroke-opacity=".75" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
               '<path d="' + o + '" transform="translate(120 130) scale(.5 .52) translate(-120 -130)" fill="#ffd3cc"/>' +
               '<path d="' + o + '" transform="translate(120 132) scale(.26 .3) translate(-120 -132)" fill="#fff3ef"/>' +
               seeds.map(function (q) {
                   var a = Math.round(Math.atan2(q[1] - 116, q[0] - 120) * 180 / Math.PI + 90);
                   return '<ellipse cx="' + q[0] + '" cy="' + q[1] + '" rx="1.8" ry="2.8" fill="#ffe08a" transform="rotate(' + a + ' ' + q[0] + ' ' + q[1] + ')"/>';
               }).join('') + '</g>';
    }
    function filling(id) {
        var s = '', i;
        if (id === 'mangga') s = mangoChunk();
        else if (id === 'strawberry-coklat' || id === 'strawberry-cream') s = strawberryHalf();
        else if (id === 'keju') { for (i = 0; i < CHUNK_PTS.length; i++) s += '<ellipse cx="' + CHUNK_PTS[i][0] + '" cy="' + CHUNK_PTS[i][1] + '" rx="4" ry="2" fill="#f2b134" transform="rotate(' + (i * 40) + ' ' + CHUNK_PTS[i][0] + ' ' + CHUNK_PTS[i][1] + ')"/>'; }
        else if (id === 'coklat-ori') s = '<ellipse cx="100" cy="112" rx="16" ry="7" fill="#fff" opacity=".18" transform="rotate(-25 100 112)"/>';
        else if (id === 'oreo') { for (i = 0; i < CHUNK_PTS.length; i++) s += '<rect x="' + (CHUNK_PTS[i][0] - 6) + '" y="' + (CHUNK_PTS[i][1] - 3.5) + '" width="' + (i % 2 ? 7 : 12) + '" height="' + (i % 2 ? 5 : 7) + '" rx="2" fill="#2f2a2d" transform="rotate(' + (i * 47) + ' ' + CHUNK_PTS[i][0] + ' ' + CHUNK_PTS[i][1] + ')"/>'; }
        else if (id === 'milo') { for (i = 0; i < CHUNK_PTS.length; i++) s += '<circle cx="' + CHUNK_PTS[i][0] + '" cy="' + CHUNK_PTS[i][1] + '" r="2.6" fill="#7a4a28"/>'; }
        else if (id === 'matcha-anggur') s = '<circle cx="120" cy="130" r="27" fill="#8e5bb5" stroke="#6d3f94" stroke-width="2"/><ellipse cx="110" cy="118" rx="8" ry="5" fill="#fff" opacity=".4"/>';
        return s;
    }

    /* --- Foto otomatis: kalau file ada di folder img/, dipakai menggantikan gambar SVG --- */
    var photoCache = {};
    function probe(base, i, done) {
        var exts = window.MLC.FOTO_EXT;
        if (i >= exts.length) return;
        var im = new Image();
        im.onload = function () { photoCache[base] = base + '.' + exts[i]; if (done) done(photoCache[base]); else if (window.MLC_art && window.MLC_art.onPhotoFound) window.MLC_art.onPhotoFound(); };
        im.onerror = function () { probe(base, i + 1, done); };
        im.src = base + '.' + exts[i];
    }
    function photo(base) {
        if (photoCache[base] === undefined) { photoCache[base] = false; probe(base, 0); }
        return photoCache[base] || null;
    }
    function img(url) { return '<image href="' + url + '" x="0" y="0" width="240" height="240" preserveAspectRatio="xMidYMid meet"/>'; }

    function drawMochi(c, o) {
        o = o || {}; P = o.p || 'cz';
        var t = o.cut || 0;
        var v = opt('mochi', 'rasa', c.rasa), base = 'img/mochi/' + c.rasa;
        var fL = o.noPhoto ? null : photo(base + '-luar'), fB = o.noPhoto ? null : photo(base + '-belah');
        var edge = 'stroke="' + shade(v.kulit, -0.18) + '" stroke-width="2.5"';
        var s = '<defs>' +
            '<clipPath id="' + P + '-clip"><path d="' + BODY + '"/></clipPath>' +
            '<clipPath id="' + P + '-in"><path d="' + BODY + '" transform="' + INSET + '"/></clipPath>' +
            '<radialGradient id="' + P + '-sk" cx="35%" cy="28%" r="80%"><stop offset="0" stop-color="' + shade(v.kulit, 0.35) + '"/><stop offset=".6" stop-color="' + v.kulit + '"/><stop offset="1" stop-color="' + shade(v.kulit, -0.12) + '"/></radialGradient>' +
            '<radialGradient id="' + P + '-cr" cx="40%" cy="30%" r="85%"><stop offset="0" stop-color="' + shade(v.cream, 0.25) + '"/><stop offset="1" stop-color="' + shade(v.cream, -0.08) + '"/></radialGradient>' +
            '<filter id="' + P + '-gr" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="4"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 -.38"/></filter>' +
            '<filter id="' + P + '-bl"><feGaussianBlur stdDeviation="3"/></filter></defs>';
        s += '<ellipse cx="120" cy="196" rx="' + 70 + '" ry="8" fill="#000" opacity=".16" filter="url(#' + P + '-bl)"/>';
        var outer = fL && fB ? img(fL) :
            '<path d="' + BODY + '" fill="url(#' + P + '-sk)" ' + edge + '/>' +
            '<rect width="240" height="240" filter="url(#' + P + '-gr)" clip-path="url(#' + P + '-clip)" opacity=".5"/>' +
            '<ellipse cx="88" cy="105" rx="22" ry="12" fill="#fff" opacity=".4" transform="rotate(-25 88 105)"/>' + crumbs(v.crumb);
        var inner = fL && fB ? img(fB) :
            '<path d="' + BODY + '" fill="url(#' + P + '-sk)" ' + edge + '/>' +
            '<path d="' + BODY + '" transform="' + INSET + '" fill="url(#' + P + '-cr)"/>' +
            '<g clip-path="url(#' + P + '-in)">' + filling(c.rasa) + '</g>' +
            '<path d="' + BODY + '" transform="' + INSET + '" fill="none" stroke="#000" stroke-opacity=".08" stroke-width="2"/>' + crumbs(v.crumb);
        // t = 0: mochi utuh. Makin besar t, kulit luar bergeser ke kiri seluruhnya dan isiannya terlihat.
        if (t <= 0) s += outer;
        else s += inner + '<g transform="translate(' + (-215 * t) + ' 0)">' + outer + '</g>';
        return s + tray(c.kemasan);
    }

    /* --- Lukchup --- */
    function corn() {
        var d = 'M120 52 C146 56 156 90 154 130 C152 165 140 182 120 184 C100 182 88 165 86 130 C84 90 94 56 120 52Z', y, x;
        var s = '<clipPath id="' + P + '-cob"><path d="' + d + '"/></clipPath><path d="' + d + '" fill="#ffd84a" stroke="#e0b52a" stroke-width="3"/><g clip-path="url(#' + P + '-cob)" fill="#ffeb99" stroke="#f0c63c" stroke-width="1">';
        for (y = 58; y < 184; y += 13) for (x = 90; x < 156; x += 11) s += '<rect x="' + (x + ((y / 13 | 0) % 2) * 5) + '" y="' + y + '" width="9" height="11" rx="3.5"/>';
        return s + '</g><path d="M120 190 C86 190 66 152 74 112 C92 134 110 158 120 178Z" fill="#7bc47f" stroke="#5aa563" stroke-width="2"/>' +
               '<path d="M120 190 C154 190 174 152 166 112 C148 134 130 158 120 178Z" fill="#6cb872" stroke="#5aa563" stroke-width="2"/>';
    }
    function avocado() {
        var d = 'M120 50 C146 50 154 80 160 106 C172 128 180 150 170 170 C160 190 140 196 120 196 C100 196 80 190 70 170 C60 150 68 128 80 106 C86 80 94 50 120 50Z';
        return '<path d="' + d + '" fill="#4f8a3a" stroke="#3b6a2b" stroke-width="3"/><path d="' + d + '" fill="#d3e69a" transform="translate(120 130) scale(.8) translate(-120 -130)"/>' +
               '<circle cx="120" cy="150" r="26" fill="#8a5a34" stroke="#6d4526" stroke-width="2"/><ellipse cx="111" cy="141" rx="8" ry="5" fill="#fff" opacity=".3"/>';
    }
    var FRUITS = {
        jagung: corn,
        pisang: function () {
            return '<path d="M40 72 C46 140 90 192 140 188 C176 184 198 140 200 76 C182 128 154 160 120 160 C84 158 56 124 40 72Z" fill="#ffd84a" stroke="#e0b52a" stroke-width="3" stroke-linejoin="round"/>' +
                   '<path d="M52 100 C70 146 100 170 140 172" stroke="#fff" stroke-width="4" fill="none" opacity=".45" stroke-linecap="round"/>' +
                   '<path d="M40 72 L37 58 M200 76 L205 62" stroke="#6b4a2b" stroke-width="7" stroke-linecap="round"/>';
        },
        alpukat: avocado,
        strawberry: function () {
            return '<path d="M120 195 C70 160 52 120 62 95 C72 70 105 72 120 85 C135 72 168 70 178 95 C188 120 170 160 120 195Z" fill="#ef4a45" stroke="#c9302c" stroke-width="3"/>' +
                   '<g fill="#ffe9a8"><ellipse cx="96" cy="112" rx="2" ry="3"/><ellipse cx="148" cy="112" rx="2" ry="3"/><ellipse cx="86" cy="132" rx="2" ry="3"/><ellipse cx="154" cy="132" rx="2" ry="3"/><ellipse cx="100" cy="154" rx="2" ry="3"/><ellipse cx="140" cy="154" rx="2" ry="3"/><ellipse cx="120" cy="172" rx="2" ry="3"/><ellipse cx="120" cy="130" rx="2" ry="3"/></g>' +
                   '<path d="M120 90 L98 74 L112 86 L102 66 L120 82 L138 66 L128 86 L142 74Z" fill="#7bc47f" stroke="#5aa563" stroke-width="1.5" stroke-linejoin="round"/>';
        },
        cherry: function () {
            return '<path d="M92 124 C96 94 108 70 124 48 M152 134 C150 100 138 70 124 48" stroke="#6b8f3a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
                   '<circle cx="90" cy="156" r="34" fill="#d6213f" stroke="#a8142e" stroke-width="3"/><circle cx="152" cy="164" r="32" fill="#e02a48" stroke="#a8142e" stroke-width="3"/>' +
                   '<ellipse cx="78" cy="144" rx="7" ry="11" fill="#fff" opacity=".5" transform="rotate(-25 78 144)"/><ellipse cx="141" cy="153" rx="6" ry="10" fill="#fff" opacity=".5" transform="rotate(-25 141 153)"/>' +
                   '<path d="M124 48 C136 30 160 30 168 38 C158 52 140 54 124 48Z" fill="#7bc47f" stroke="#5aa563" stroke-width="1.5"/>';
        },
        peach: function () {
            var d = 'M120 76 C90 56 50 80 54 130 C58 175 92 196 120 192 C148 196 182 175 186 130 C190 80 150 56 120 76Z';
            return '<defs><radialGradient id="' + P + '-peach" cx="65%" cy="35%" r="70%"><stop offset="0" stop-color="#ff7f7f" stop-opacity=".75"/><stop offset="1" stop-color="#ff7f7f" stop-opacity="0"/></radialGradient></defs>' +
                   '<path d="' + d + '" fill="#ffb98f" stroke="#e8946a" stroke-width="3"/><path d="' + d + '" fill="url(#' + P + '-peach)"/>' +
                   '<path d="M120 78 C112 110 114 150 122 190" stroke="#f08a6a" stroke-width="2.5" fill="none" opacity=".6"/>' +
                   '<ellipse cx="86" cy="110" rx="10" ry="18" fill="#fff" opacity=".4" transform="rotate(-20 86 110)"/>' +
                   '<path d="M120 76 L124 62" stroke="#7a5a3a" stroke-width="4" stroke-linecap="round"/><path d="M122 70 C134 50 160 50 168 58 C158 72 140 74 122 70Z" fill="#7bc47f" stroke="#5aa563" stroke-width="1.5"/>';
        },
        cabai: function () {
            return '<path d="M86 78 C100 66 112 68 114 70 C150 80 168 130 176 194 C140 180 100 150 86 78Z" fill="#e8312f" stroke="#b81f1d" stroke-width="3" stroke-linejoin="round"/>' +
                   '<path d="M118 90 C140 110 150 140 156 170" stroke="#fff" stroke-width="4" fill="none" opacity=".4" stroke-linecap="round"/>' +
                   '<path d="M80 76 C86 60 108 56 118 68 C108 76 92 80 80 76Z" fill="#7bc47f" stroke="#5aa563" stroke-width="2"/>' +
                   '<path d="M100 62 C104 50 112 44 122 42" stroke="#5aa563" stroke-width="5" fill="none" stroke-linecap="round"/>';
        }
    };
    function drawLukchup(c, o) {
        o = o || {}; P = o.p || 'cz';
        var f = o.noPhoto ? null : photo('img/lukchup/' + c.bentuk);
        var art = f ? '<image href="' + f + '" x="20" y="10" width="200" height="180" preserveAspectRatio="xMidYMid meet"/>' : '<g transform="translate(0 -6)">' + FRUITS[c.bentuk]() + '</g>';
        return shadow() + art + tray(c.kemasan);
    }

    window.MLC_art = {
        svg: function (prod, cfg, o) { return prod === 'mochi' ? drawMochi(cfg, o) : drawLukchup(cfg, o); },
        photo: function (base, cb) { if (photoCache[base]) cb(photoCache[base]); else probe(base, 0, function (u) { photoCache[base] = u; cb(u); }); },
        onPhotoFound: null                   // diisi halaman yang ingin digambar ulang saat foto ditemukan
    };
})();
