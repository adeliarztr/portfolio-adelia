# 🗂️ Portfolio Archive — Adelia Rizki Eka Putri

Web Portofolio personal dengan estetika **Archival Binder & Vintage Ledger (Tactile Stationery Neo-Brutalist)** yang dirancang presisi sesuai rancangan desain yang dilampirkan.

---

## 🎨 Konsep & Desain Visual
- **Tema**: *Archival Dossier, Manila Folder Tabs, Binder Rings, Washi Tape & Vintage Ledger*.
- **Palet Warna**:
  - Warm Parchment Background (`#fdfae1`)
  - Deep Ink Black (`#1c1c0d`)
  - Vintage Sage Green (`#476643` & `#7a9b74`)
  - Antique Amber/Mustard (`#fed262` & `#765a00`)
  - Terracotta / Maroon (`#9d413e` & `#de736d`)
- **Tipografi**:
  - Editorial Headlines: **Playfair Display** (Serif)
  - Code & Dossier Labels: **Space Mono** (Monospace)
- **Detail Taktil**:
  - Efek kertas grafik (*Graph Paper*)
  - Lubang *binder ring* 3 & 4 titik berdimensi
  - Selotip *Washi Tape* dengan rotasi dan efek blur
  - Formulir model buku kas (*Ledger Underline Input*)
  - Bayangan tegas neo-brutalism (`2px 2px #1c1c0d` & `4px 4px #1c1c0d`)

---

## 🚀 Fitur Interaktif
1. **Navigasi Responsif**:
   - Menu desktop & drawer menu khusus mobile.
   - *Scrollspy* otomatis menandai tab yang sedang aktif di layar.
2. **Tabbed Manila Binder (About Me)**:
   - Tombol tab bergaya manila folder: **📁 My Story** & **⚡ Tech Stack & Tools**.
3. **Projects Archive (Filter & Inspection Modal)**:
   - Filter antara **Latest** dan **Featured**.
   - Klik kartu atau tombol **Inspect** untuk membuka **Dossier Detail Modal** (latar belakang, deliverables, tech stack, dan link repository).
   - Tautan & Periode Proyek:
     - **Lab IVSS (2025)**: [https://github.com/RyuuShiro30/PBL-IVSS](https://github.com/RyuuShiro30/PBL-IVSS)
     - **MOYA App (2026)**: [https://github.com/FinaIsma/moya_pbl2](https://github.com/FinaIsma/moya_pbl2)
     - **PyBeginner (2026 - Sekarang)**: [https://github.com/Fii2X05/Pybeginner](https://github.com/Fii2X05/Pybeginner)
     - **PLFM Radio (2024 - 2025)**: Visual Assets & Brand Campaign (tanpa link repositori code).
4. **Interactive Ledger Contact Form**:
   - Input bergaya buku kas retro dengan animasi dispatching.
   - Tautan langsung ke WhatsApp Adelia (`+62 881-3154-922`) dan Email resmi.

---

## 📂 Struktur File
```
d:/SEMESTER 5/PortofolioWeb/
├── index.html       # Struktur HTML lengkap, semantik & SEO-friendly
├── style.css        # Efek kertas taktil, washi tape, binder ring, custom scrollbar
├── script.js        # Logika tab, filter proyek, modal pop-up, form handler, scrollspy
└── README.md        # Panduan dokumentasi
```

---

## 💻 Cara Menjalankan
1. **Langsung**: Cukup buka file `index.html` dengan peramban apa pun (Chrome, Edge, Firefox, Safari).
2. **Live Server**: Jika menggunakan VS Code atau Antigravity IDE, klik kanan pada `index.html` lalu pilih **Open with Live Server**.

---

## 🌐 Cara Deploy Gratis di Vercel
Ada 2 cara paling mudah dan 100% gratis:

### Cara 1: Lewat GitHub (Rekomendasi Utama)
1. Buat repositori baru di akun GitHub Anda (misal: `portfolio-adelia`).
2. Push file proyek ke repositori tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<username-github>/portfolio-adelia.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub.
4. Klik tombol **"Add New..."** lalu pilih **"Project"**.
5. Pilih repositori GitHub Anda dan klik **"Import"**.
6. Pada kolom *Framework Preset*, biarkan **Other** (karena website statis HTML/CSS).
7. Klik tombol biru **"Deploy"**. Dalam hitungan detik website akan aktif dengan domain gratis `*.vercel.app`.

### Cara 2: Langsung via Terminal (Vercel CLI)
Jalankan perintah ini di terminal folder proyek:
```bash
npx vercel
```
Ikuti instruksi login di peramban, lalu tekan **Enter** pada semua pertanyaan default. Website akan langsung terdeploy ke cloud!
