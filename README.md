<div align="center">

# 🍓 Luckchup & Mochiw 🍡
### *Digital Menu & Smart Order System — Kedai Wulan*

![Project Status](https://img.shields.io/badge/Status-Process-FFB6C1?style=for-the-badge&logoColor=white)
![Theme](https://img.shields.io/badge/Theme-Pastel_Pink-FF69B4?style=for-the-badge)
![Category](https://img.shields.io/badge/Category-Culinary_App-FF1493?style=for-the-badge)

<br>

<p align="center">
  <b>Sistem Katalog & Pemesanan Digital Terintegrasi untuk Kedai Wulan</b><br>
  <i>Menyajikan kemudahan eksplorasi varian Luckchup dan Mochi khas Thailand secara interaktif!</i>
</p>

---

</div>

## 🌸 Tentang Project

<div align="center">

**Luckchup & Mochiw Digital System** adalah platform katalog dan informasi produk kuliner interaktif. Web ini dibuat untuk memudahkan pelanggan Kedai Wulan dalam melihat daftar varian rasa, harga terbaru, serta melakukan pemesanan secara practical langsung melalui integrasi media sosial.

</div>

<br>

> 💡 **Highlights:**
> - **Visual Menarik:** Tampilan *soft-pastel* yang *cheerful* dan memanjakan mata.
> - **Katalog Lengkap:** Menampilkan seluruh ragam rasa Luckchup & Mochi secara mendetail.
> - **Akses Cepat:** Link pemesanan langsung terhubung ke media sosial resmi kedai.

---
## 📌 Ringkasan Eksekutif

**Luckchup & Mochiw Web System** adalah platform digital interaktif yang dikembangkan untuk mendigitalisasi operasional **Kedai Wulan**[cite: 1, 2]. Sistem ini memisahkan layanan pembelian *Pick-up* instan (menu *ready*) dan Pre-Order (PO) *Box* dengan kustomisasi rasa fleksibel (minimal H-1), pembayaran terintegrasi, serta analitik penjualan produk terlaris secara otomatis[cite: 1, 2].

---

## 📑 Daftar Isi Proyek

- [Project Charter & Ruang Lingkup](#-project-charter--ruang-lingkup)
- [Struktur & Pembagian Tim](#-struktur--pembagian-tim)
- [Work Breakdown Structure (WBS)](#-work-breakdown-structure-wbs)
- [Hasil Observasi Klien & Solusi Sistem](#-hasil-observasi-klien--solusi-sistem)
- [Analisis Ukuran Perangkat Lunak (Function Point)](#-analisis-ukuran-perangkat-lunak-function-point)
- [Tech Stack & Tools](#️-tech-stack--tools)

---

## 🎯 Project Charter & Ruang Lingkup

- **Nama Proyek:** *Web-Based Interactive 2D Mochi & Lukchup Customizer & Best-Seller Analytics Dashboard*[cite: 1].
- **Tujuan Proyek:** Membangun sistem web 2D interaktif terintegrasi bagi UMKM untuk memfasilitasi pemesanan *pick-up* cepat, PO *box* kustomisasi rasa (minimal H-1), pembayaran online/di tempat, serta analitik *top 3 best-seller*[cite: 1, 2].

### **Ruang Lingkup (*Project Scope*):**
- **In-Scope:**
  * Pembuatan antarmuka web 2D yang responsif dan interaktif (HTML, CSS, JavaScript)[cite: 1].
  * Katalog menu produk Mochi & Lukchup terbagi atas menu *Ready* (*Pick-up*) dan menu PO *Box*[cite: 1].
  * Fitur *Interactive Customizer 2D* untuk meracik varian rasa paket box PO sesuai preferensi (misal: mengganti isian cokelat dengan Red Velvet, matcha, atau keju)[cite: 1, 2].
  * Otomatisasi penarikan data *Top 3 Best-Seller* di halaman utama[cite: 1, 2].
  * Sistem pembayaran terintegrasi (transfer online untuk DP/lunas atau bayar di tempat/COD)[cite: 1, 2].
  * *Dashboard* analitik penjualan bagi pemilik toko untuk memantau stok dan produk terlaris[cite: 2].
- **Out-Of-Scope:**
  * Pemodelan objek 3D interaktif yang kompleks (fokus penuh pada pengalaman visual 2D berbasis web)[cite: 2].

---

## 👩‍💻 Struktur & Pembagian Tim

Proyek ini dikembangkan secara kolaboratif oleh 4 mahasiswa Program Studi Informatika Universitas Samudra[cite: 2, 4, 5]:

<table align="center" width="100%">
  <tr align="center">
    <td><b>Ocha Cindikya Ayumi</b></td>
    <td><b>Qurratu Ain Nazmi</b></td>
    <td><b>Safira Ussy Mahendra</b></td>
    <td><b>Latifah Hanum</b></td>
  </tr>
  <tr align="center">
    <td><code>NIM : 230504126</code>[cite: 1]</td>
    <td><code>NIM : 230504123</code>[cite: 1]</td>
    <td><code>NIM : 230504135</code>[cite: 1]</td>
    <td><code>NIM : 230504061</code>[cite: 1]</td>
  </tr>
  <tr align="center">
    <td><img src="https://img.shields.io/badge/Role-Project_Manager-FF69B4?style=flat-square" alt="Role"></td>
    <td><img src="https://img.shields.io/badge/Role-Frontend_%2F_UI--UX-FF1493?style=flat-square" alt="Role"></td>
    <td><img src="https://img.shields.io/badge/Role-Backend_%2F_Database-E91E63?style=flat-square" alt="Role"></td>
    <td><img src="https://img.shields.io/badge/Role-Data_Analytics_%26_QA-D81B60?style=flat-square" alt="Role"></td>
  </tr>
  <tr align="left">
    <td>• Memimpin koordinasi tim<br>• Mengatur jadwal & GitHub<br>• Menyusun laporan akhir[cite: 3]</td>
    <td>• Merancang wireframe / UI 2D<br>• Katalog Mochi & Lukchup<br>• Customizer box PO interaktif[cite: 3]</td>
    <td>• Membangun struktur database<br>• Alur transaksi & pembayaran<br>• Pemisahan pick-up & PO[cite: 3]</td>
    <td>• Logika otomatisasi top 3<br>• Dashboard analitik toko<br>• Pengujian fungsionalitas[cite: 4]</td>
  </tr>
</table>

- **Klien / Mitra Usaha:** Wulandari (*Business Owner* Kedai Wulan) — Penyedia resep dasar, opsi rasa fleksibel, dan lokasi uji coba sistem[cite: 4].
- **Evaluator / Penilai:** Cut Alna Fadhilla, S.Kom., M.Sc. (Dosen Pengampu Mata Kuliah Manajemen Proyek Perangkat Lunak)[cite: 4, 5].

---

## 📈 Work Breakdown Structure (WBS)

- **Fase 1: Inisiasi dan Perencanaan** — Penentuan konsep bisnis 2D, pembagian peran tim, dan penyusunan dokumen manajemen proyek[cite: 5].
- **Fase 2: Perancangan & Desain Sistem** — Pembuatan *wireframe*, perancangan skema basis data, dan inisialisasi repositori GitHub[cite: 5, 6].
- **Fase 3: Implementasi & Pengkodean** — Pengembangan *frontend* (katalog & *customizer*), *backend* (transaksi & pembayaran), analitik data, serta integrasi kode kolaboratif via Git[cite: 6].
- **Fase 4: Pengujian & Perbaikan Sistem** — Uji coba fungsionalitas menyeluruh (*testing*) dan perbaikan *bug* (*debugging*)[cite: 6].
- **Fase 5: Penyusunan Laporan & Finalisasi** — Penyusunan dokumen laporan akhir kelompok serta persiapan demo aplikasi web[cite: 6].

---

## 🔍 Hasil Observasi Klien & Solusi Sistem

- **Nama UMKM:** Kedai Wulan (Luckchup & Mochiw)[cite: 5, 6].
- **Kendala Pemilik:** Kesulitan melacak varian produk terlaris secara akurat dan kewalahan menghadapi pesanan *custom* dadakan dari pelanggan[cite: 6].
- **Solusi Web 2D:**
  1. **Pick-up Instan (*Ready-to-Eat*):** Untuk pembelian langsung dari menu reguler atau paket tetap *Top 3 Best-Seller*[cite: 6].
  2. **Pre-Order (PO) Box:** Untuk kustomisasi rasa fleksibel (misal: mengganti isian cokelat dengan Red Velvet atau matcha) dengan pemesanan minimal H-1 dan sistem pembayaran fleksibel[cite: 6].

---

## 📊 Analisis Ukuran Perangkat Lunak (Function Point)

Perhitungan kompleksitas fungsional sistem menggunakan metode *Function Point Analysis* (FPA)[cite: 9]:

| Komponen Fungsional | Deskripsi Fungsionalitas pada Sistem Web | Jumlah | Kompleksitas | Total Point |
| :--- | :--- | :---: | :---: | :---: |
| **External Inputs (EI)** | 1. Form pemesanan PO Box berjadwal (minimal H-1)<br>2. Form input pesanan pick-up instan (menu ready)[cite: 9] | 2[cite: 9] | 3[cite: 9] | 6[cite: 9] |
| **External Outputs (EO)** | 3. Struk/ringkasan detail pesanan & status pembayaran<br>4. Notifikasi jadwal pengambilan pesanan (pick-up/PO)[cite: 9] | 2[cite: 9] | 4[cite: 9] | 8[cite: 9] |
| **External Inquiries (EQ)** | 1. Otomatisasi penarikan data Top 3 Best-Seller di halaman utama<br>2. Katalog digital interaktif[cite: 9] | 2[cite: 9] | 3[cite: 9] | 6[cite: 9] |
| **Internal Logical Files (ILF)** | 1. Tabel Database Produk (menyimpan data menu & status ready)<br>2. Tabel Database Transaksi (pemisahan pick-up & PO berjadwal)[cite: 9] | 2[cite: 9] | 7[cite: 9] | 14[cite: 9] |
| **External Interface Files (EIF)** | Tidak ada integrasi sistem luar (*stand-alone web system*)[cite: 9] | 0 | 5 | 0 |
| **Total Unadjusted Function Point (UFP)** | **$6 + 8 + 6 + 14 = 34$ Point**[cite: 9] | | | |

---
## 🎀 Katalog Menu & Harga

<table align="center" width="100%">
  <tr>
    <th width="33%" align="center">🍡 Luckchup (Rp 2.000)</th>
    <th width="33%" align="center">🧁 Mochiw (Rp 5.000)</th>
    <th width="34%" align="center">📲 Kontak & Pemesanan</th>
  </tr>
  <tr>
    <td>
      • 🌽 <b>Jagung</b><br>
      • 🍌 <b>Pisang</b><br>
      • 🥑 <b>Alpukat</b><br>
      • 🍓 <b>Strawberry</b><br>
      • 🍒 <b>Cherry</b><br>
      • 🍑 <b>Peach</b><br>
      • 🌶️ <b>Cabai</b>
    </td>
    <td>
      • 🍪 <b>Oreo Cream</b><br>
      • 🍫 <b>Choco Cream</b><br>
      • 🍓 <b>Strawberry</b><br>
      • 🥭 <b>Mangga Cream</b><br>
      • 🍰 <b>Redvelvet</b><br>
      • 🍧 <b>Strawberry Jam</b><br>
      • 🍥 <b>Marshmallow Cream</b>
    </td>
    <td>
      <b>Official Account:</b><br><br>
      📸 <b>Instagram:</b><br>
      <a href="https://instagram.com/lukchupwulan_24"><code>@lukchupwulan_24</code></a><br><br>
      🎵 <b>TikTok:</b><br>
      <a href="https://tiktok.com/@kedaiwulan_24"><code>@kedaiwulan_24</code></a><br><br>
      💬 <b>WhatsApp:</b><br>
      <a href="https://wa.me/6289501101106"><code>0895-0110-1106</code></a>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack & Tools

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-FFB6C1?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-FF69B4?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FF1493?style=for-the-badge&logo=javascript&logoColor=white)
![Git](https://img.shields.io/badge/Git-E91E63?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-D81B60?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-C2185B?style=for-the-badge&logo=visualstudiocode&logoColor=white)

</div>

<br>

| Teknologi | Peran dalam Project |
| :--- | :--- |
| 🌸 **HTML5** | Penyusun struktur dokumen dan elemen antarmuka web |
| 🎀 **CSS** | Desain tata letak, responsivitas, dan tema *pastel pink* |
| ✨ **JavaScript** | Logika interaktif pada menu dan tombol navigasi |
| 📦 **Git & GitHub** | Kolaborasi tim, manajemen versi, dan repositori proyek |

---

## 👩‍💻 Our Team

<table align="center" width="100%">
  <tr align="center">
    <td><b>Ocha Cindikya Ayumi</b></td>
    <td><b>Latifah Hanum</b></td>
    <td><b>Qurratu Ain Nazmi</b></td>
    <td><b>Safira Ussy Mahendra</b></td>
  </tr>
  <tr align="center">
    <td><code>NIM : 230504126</code></td>
    <td><code>NIM : 230504061</code></td>
    <td><code>NIM : 230504123</code></td>
    <td><code>NIM : 230504135</code></td>
  </tr>
  <tr align="center">
    <td>
      <img src="https://img.shields.io/badge/Role-Project_Manager-FF69B4?style=flat-square" alt="Role">
    </td>
    <td>
      <img src="https://img.shields.io/badge/Role-System_Analyst-FF1493?style=flat-square" alt="Role">
    </td>
    <td>
      <img src="https://img.shields.io/badge/Role-UI%2FUX_%26_Frontend-E91E63?style=flat-square" alt="Role">
    </td>
    <td>
      <img src="https://img.shields.io/badge/Role-Developer_%26_QA-D81B60?style=flat-square" alt="Role">
    </td>
  </tr>
</table>

---

## 🎓 Academic Info

<div align="center">

![PRODI](https://img.shields.io/badge/INFORMATIKA-UNIVERSITAS_SAMUDRA-FFB6C1?style=for-the-badge&logoColor=white)

### **Mata Kuliah: Manajemen Proyek Perangkat Lunak**

**Dosen Pengampu:**  
*Cut Alna Fadhilla, S.Kom., M.Sc.*

---

</div>
