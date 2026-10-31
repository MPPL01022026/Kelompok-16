# Dokumentasi Perhitungan Function Point
## Web Mochi & Lukchup

Dokumentasi ini berisi perhitungan ukuran perangkat lunak menggunakan metode **Function Point Analysis (FPA)** untuk proyek **Web Mochi & Lukchup**.

---

### 1. Parameter Pengukuran & Unadjusted Function Point (UFP)

| Parameter Pengukuran (Measurement Parameter) | Deskripsi Fungsionalitas Sistem | Jumlah | Tingkat Kompleksitas | Bobot | Total Point |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **External Inputs (EI) / Number of User Inputs** | Form PO Box berjadwal (H-1) & Form input pesanan pick-up instan | 6 | Simple | 3 | 14 |
| **External Outputs (EO) / Number of User Outputs** | Struk/ringkasan detail pesanan & Notifikasi jadwal pengambilan | 3 | Average | 4 | 15 |
| **External Inquiries (EQ) / Number of User Inquiries** | Otomatisasi Top 3 Best-Seller & Katalog digital (10 Mochi & 7 Lukchup) | 3 | Simple | 3 | 10 |
| **Internal Logical Files (ILF) / Number of Files** | Tabel Database Produk & Tabel Database Transaksi | 4 | Simple | 7 | 34 |
| **External Interface Files (EIF) / Number of External Interfaces** | Tidak ada integrasi sistem luar | 0 | Simple | 5 | 0 |
| **Total Row (Count Total / UFP)** | | | | | **73** |

---

### 2. 14 Characteristics / Complexity Adjustment Factors ($F_i$)

Total nilai karakteristik penyesuaian ($\sum F_i$) dari 14 parameter adalah **25**:

| Faktor Kompleksitas | Skor ($F_i$) |
| :--- | :---: |
| **F1:** Data Communications (Komunikasi Data) | 3 |
| **F2:** Distributed Data Processing (Pemrosesan Data Terdistribusi) | 0 |
| **F3:** Performance (Kinerja Sistem) | 2 |
| **F4:** Heavily Used Configuration (Penggunaan Konfigurasi Padat) | 1 |
| **F5:** Transaction Rate (Frekuensi Transaksi) | 2 |
| **F6:** On-line Data Entry (Entri Data On-line) | 3 |
| **F7:** End-user Efficiency (Efisiensi Pengguna Akhir) | 3 |
| **F8:** On-line Update (Pembaruan Data On-line) | 3 |
| **F9:** Complex Processing (Pemrosesan Kompleks) | 1 |
| **F10:** Reusability (Kemampuan Penggunaan Kembali Kode) | 2 |
| **F11:** Installation Ease (Kemudahan Instalasi) | 2 |
| **F12:** Operational Ease (Kemudahan Operasional) | 2 |
| **F13:** Multiple Sites (Penggunaan di Banyak Lokasi) | 0 |
| **F14:** Facilitate Change (Kemudahan Perubahan/Fleksibilitas) | 1 |
| **Total $F_i$ (SUM $F_i$)** | **25** |

---

### 3. Rumus Perhitungan Akhir Function Point (FP)

$$\text{Function Point (FP)} = \text{UFP} \times (0.65 + 0.01 \times \text{Total } F_i)$$

* **Count Total (UFP):** $73$[cite: 1]
* **Total $F_i$:** $25$[cite: 1]
* **Hasil Akhir (FP):** $73 \times (0.65 + 0.01 \times 25) = 73 \times 0.90 = \mathbf{65.7}$[cite: 1]
