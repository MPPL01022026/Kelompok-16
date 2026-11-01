/* ============================================================
   Customizer 2D Mochi & Lukchup (versi menu tetap)
   - Mochi: pilih 1 dari 8 rasa jadi + kemasan. Slider "Belah" menampilkan isian.
   - Lukchup: pilih 1 dari 7 bentuk buah + kemasan.
   - Harga, rasa, warna: ubah di objek PRODUCTS di bawah.
   - Pesanan disimpan di localStorage key "mlc_orders" (dibaca dashboard).
   ============================================================ */
(function () {
    'use strict';

    var STORAGE_KEY = 'mlc_orders';
    var rp = function (n) { return 'Rp' + n.toLocaleString('id-ID'); };

    /* ---------- 1. DATA ---------- */
    var PRODUCTS = window.MLC.PRODUCTS;      // data ada di data.js

    /* ---------- 2. STATE ---------- */
    var state = { produk: 'mochi', qty: 1, cut: 0, cfg: { mochi: defaultCfg('mochi'), lukchup: defaultCfg('lukchup') } };

    function defaultCfg(prod) {
        var c = {};
        PRODUCTS[prod].groups.forEach(function (g) { c[g.key] = g.options[0].id; });
        return c;
    }
    function opt(prod, key, id) {
        var g = PRODUCTS[prod].groups.filter(function (x) { return x.key === key; })[0];
        return g.options.filter(function (o) { return o.id === id; })[0];
    }

    /* ---------- 3. GAMBAR: ada di js/art.js (MLC_art) ---------- */

    /* ---------- 4. HARGA & RINGKASAN ---------- */
    function chosen(prod, cfg) {
        return PRODUCTS[prod].groups.map(function (g) { return { group: g, option: opt(prod, g.key, cfg[g.key]) }; });
    }
    function calc() {
        var P = PRODUCTS[state.produk], lines = [['Harga ' + P.label + ' per pcs', P.base]], unit = P.base;
        chosen(state.produk, state.cfg[state.produk]).forEach(function (x) {
            if (x.option.price > 0) { lines.push([x.group.label + ': ' + x.option.label, x.option.price]); unit += x.option.price; }
        });
        return { lines: lines, unit: unit, total: unit * state.qty };
    }
    function summary(prod, cfg) {
        return [PRODUCTS[prod].label].concat(chosen(prod, cfg).map(function (x) { return x.option.label; })).join(' / ');
    }
    function title(prod, cfg) {
        if (prod === 'mochi') { var v = opt('mochi', 'rasa', cfg.rasa); return 'Mochi ' + v.label + ' (isi ' + v.isi.toLowerCase() + ')'; }
        return 'Lukchup ' + opt('lukchup', 'bentuk', cfg.bentuk).label;
    }

    /* ---------- 5. RENDER UI ---------- */
    var $ = function (id) { return document.getElementById(id); };

    function optionsHTML() {
        var cfg = state.cfg[state.produk];
        return PRODUCTS[state.produk].groups.map(function (g) {
            var items = g.options.map(function (o) {
                var on = cfg[g.key] === o.id, data = 'data-g="' + g.key + '" data-o="' + o.id + '" aria-pressed="' + on + '"';
                if (g.type === 'card') return '<button type="button" class="cz-card' + (on ? ' on' : '') + '" ' + data + '><strong>' + o.label + '</strong><small>' + o.isi + '</small></button>';
                return '<button type="button" class="cz-chip' + (on ? ' on' : '') + '" ' + data + '>' + (o.emoji ? o.emoji + ' ' : '') + o.label + (o.price ? '<small>+' + rp(o.price) + '</small>' : '') + '</button>';
            }).join('');
            return '<div class="cz-group"><h4>' + g.label + '</h4><div class="cz-row' + (g.type === 'card' ? ' cz-cards' : '') + '">' + items + '</div></div>';
        }).join('');
    }

    function drawStage() {
        var cfg = state.cfg[state.produk];
        $('cz-svg').innerHTML = MLC_art.svg(state.produk, cfg, { cut: state.cut });
    }
    function render() {
        var cfg = state.cfg[state.produk], r = calc();
        drawStage();
        $('cz-name').textContent = title(state.produk, cfg);
        $('cz-cutrow').style.display = state.produk === 'mochi' ? '' : 'none';
        $('cz-options').innerHTML = optionsHTML();
        $('cz-qty').textContent = state.qty;
        $('cz-lines').innerHTML = r.lines.map(function (l) { return '<li><span>' + l[0] + '</span><span>' + rp(l[1]) + '</span></li>'; }).join('');
        $('cz-total').textContent = rp(r.total);
        document.querySelectorAll('#cz-tabs .cz-tab').forEach(function (b) { b.classList.toggle('active', b.dataset.product === state.produk); });
    }

    /* ---------- 6. PENYIMPANAN ---------- */
    function getOrders() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch (e) { return []; }
    }
    function setOrders(list) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
        catch (e) { toast('Gagal menyimpan: penyimpanan browser tidak tersedia'); return false; }
        window.dispatchEvent(new CustomEvent('orders:changed'));
        return true;
    }
    function renderSaved() {
        var list = getOrders();
        $('cz-count').textContent = '(' + list.length + ')';
        $('cz-saved').innerHTML = list.length ? list.map(function (o) {
            return '<li><span>' + o.ringkasan + ' &times; ' + o.jumlah + ' = <strong>' + rp(o.total) + '</strong></span>' +
                   '<button type="button" data-del="' + o.id + '" aria-label="Hapus">Hapus</button></li>';
        }).join('') : '<li class="empty">Belum ada. Pilih produknya lalu klik "Simpan kustomisasi".</li>';
    }
    function save() {
        var cfg = state.cfg[state.produk], r = calc();
        var order = { id: Date.now(), waktu: new Date().toISOString(), produk: state.produk,
            konfigurasi: JSON.parse(JSON.stringify(cfg)), jumlah: state.qty, hargaSatuan: r.unit, total: r.total, ringkasan: summary(state.produk, cfg) };
        var list = getOrders(); list.push(order);
        if (setOrders(list)) { renderSaved(); toast('Tersimpan! ' + title(state.produk, cfg)); }
    }
    var toastTimer;
    function toast(msg) {
        var t = $('cz-toast'); t.textContent = msg; t.classList.add('show');
        clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
    }

    /* ---------- 7. EVENT ---------- */
    function init() {
        if (!$('customizer')) return;
        MLC_art.onPhotoFound = drawStage;        // gambar ulang kalau foto asli ditemukan
        $('cz-tabs').addEventListener('click', function (e) {
            var b = e.target.closest('[data-product]'); if (!b) return;
            state.produk = b.dataset.product; render();
        });
        $('cz-options').addEventListener('click', function (e) {
            var b = e.target.closest('[data-g]'); if (!b) return;
            state.cfg[state.produk][b.dataset.g] = b.dataset.o; render();
        });
        $('cz-cut').addEventListener('input', function () { state.cut = this.value / 100; drawStage(); });
        $('cz-minus').addEventListener('click', function () { state.qty = Math.max(1, state.qty - 1); render(); });
        $('cz-plus').addEventListener('click', function () { state.qty = Math.min(99, state.qty + 1); render(); });
        $('cz-random').addEventListener('click', function () {
            var cfg = state.cfg[state.produk];
            PRODUCTS[state.produk].groups.forEach(function (g) { cfg[g.key] = g.options[Math.floor(Math.random() * g.options.length)].id; });
            render();
        });
        $('cz-reset').addEventListener('click', function () {
            state.cfg[state.produk] = defaultCfg(state.produk); state.qty = 1; state.cut = 0; $('cz-cut').value = 0; render();
        });
        $('cz-save').addEventListener('click', save);
        $('cz-saved').addEventListener('click', function (e) {
            var b = e.target.closest('[data-del]'); if (!b) return;
            setOrders(getOrders().filter(function (o) { return String(o.id) !== b.dataset.del; })); renderSaved();
        });
        $('cz-clear').addEventListener('click', function () {
            if (getOrders().length && confirm('Hapus semua kustomisasi tersimpan?')) { setOrders([]); renderSaved(); }
        });
        // dari kartu produk di Beranda: customizer.html?produk=mochi&id=oreo
        var q = new URLSearchParams(location.search), qp = q.get('produk'), qid = q.get('id');
        if (PRODUCTS[qp]) {
            var gk = PRODUCTS[qp].groups[0];
            state.produk = qp;
            if (gk.options.some(function (o) { return o.id === qid; })) state.cfg[qp][gk.key] = qid;
        }
        render(); renderSaved();
    }

    window.getOrders = getOrders;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
