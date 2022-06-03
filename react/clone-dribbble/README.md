# Dokumentasi

[Dribbble](https://dribbble.com) clone dengan HTML + CSS + JS sebelumnya, tetapi dibuat ulang dengan ReactJS.

Adapun fitur interaktif yang dimiliki yaitu:

- **Load designs data**, yaitu koleksi designs di load di awal menggunakan data array.
- **Toggle dark mode**, yaitu mengubah tema website dari light menjadi dark, dan sebaliknya.
- **Filter designs by category**, yaitu mem-filter designs berdasarkan kategori.
- **Love a design**, yaitu pengguna dapat meng-klik icon *love* pada salah satu design atau sebaliknya. Mirip dengan *like* pada sosial media.

## Structure

Projek ini terbagi menjadi beberapa bagian yaitu:
- `public`: Folder di mana file HTML utama nya disimpan. HTML "kosong" ini akan diisi dengan code React nya saat jalan.
- `src`: Folder yang merupakan core dari aplikasi react ini. Berisikan:
  - `assets`: Folder yang berisikan gambar/svg yang akan digunakan pada webpage.
  - `component`: Folder berisikan code untuk komponen-komponen web.
  - `data`: Folder berisikan data untuk webpage.
  - `index.css`: File yang memberikan styling pada webpage.
  - `App.js`: File yang menjadi titik masuk aplikasinya.

## Get Started

Untuk menjalankan, ikuti tahap-tahap berikut:

1. Download folder react ini.
2. Jalankan command `npm install` untuk meng-install library/dependency yang dibutuhkan (contoh: react). Sebuah folder `node_modules` akan terbuat.
3. Jalankan command `npm run start` untuk menjalankan aplikasi.

## Hasil Website

### Light mode

![Light mode](./screenshot_hasil/hasil_tampilan_light_mode.png)

### Dark mode

![Dark mode](./screenshot_hasil/hasil_tampilan_dark_mode.png)
