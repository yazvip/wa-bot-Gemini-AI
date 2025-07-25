# 📲 Chatbot WhatsApp dengan Gemini AI & Time API

Ini adalah **chatbot WhatsApp** yang mengintegrasikan **Google Gemini AI**, **whatsapp-web.js**, dan **timeapi.io** untuk memberikan respons cerdas, menangani pertanyaan pelanggan, dan menampilkan waktu Jakarta secara real-time.

---

## 🚀 Fitur

✅ **Respons Berbasis AI** – Menggunakan **Google Gemini AI** untuk balasan cerdas.
✅ **Otomatisasi WhatsApp** – Dibangun dengan **whatsapp-web.js**.
✅ **API Waktu Real-Time** – Mengambil **waktu saat ini di Jakarta (GMT+7)** dari **timeapi.io**.
✅ **Dukungan Pelanggan Otomatis** – Menangani FAQ, salam, dan pembayaran.
✅ **URL Gambar Dinamis** – Menyimpan URL gambar salam dan pembayaran di **.env**.
✅ **Panel Admin** - Panel admin untuk melihat riwayat pesan dan pengaturan.
✅ **Database SQLite** - Menyimpan riwayat pesan dan pengaturan.

---

## 🛠️ Instalasi (Shared Hosting dengan cPanel)

### 1️⃣ **Unggah File**
Unggah file proyek ke akun hosting Anda.

### 2️⃣ **Jalankan Pemeriksaan Instalasi**
Buka `install.php` di browser Anda (misalnya, `https://domainanda.com/install.php`). Skrip ini akan memeriksa apakah Node.js dapat diakses.

### 3️⃣ **Siapkan Aplikasi Node.js di cPanel**
1.  Di cPanel, cari dan buka "Setup Node.js App".
2.  Buat aplikasi baru, atur direktori utama aplikasi ke direktori proyek Anda.
3.  Atur file startup aplikasi ke `server.js`.
4.  Instal dependensi dengan menjalankan `npm install`.
5.  Mulai aplikasi.

### 4️⃣ **Konfigurasi Aplikasi**
-   Akses URL aplikasi Anda. Anda akan diarahkan ke halaman untuk memasukkan kunci API dan URL gambar Anda.
-   Simpan konfigurasi. Aplikasi akan dimulai ulang.

### 5️⃣ **Akses Panel Admin**
Buka `/admin` di domain Anda (misalnya, `https://domainanda.com/admin`) untuk melihat panel admin.

---

## 📌 Penggunaan

### 🔹 **Perintah Dasar**
- `halo`, `assalamualaikum`, `selamat` → Mengirim salam dengan gambar.
- `pembayaran`, `bayar` → Mengirim kode QR pembayaran.
- `bantuan` → Menampilkan opsi yang tersedia.
- `stop` → Menghentikan respons bot.
- `lanjut` → Melanjutkan respons bot.

### 🔹 **Respons Berbasis AI**
- Bot menggunakan **Google Gemini AI** untuk menghasilkan respons untuk pertanyaan umum tentang **E-meterai**.
- Jika pengguna bertanya tentang waktu saat ini, bot mengambil **waktu Jakarta (GMT+7) secara real-time** dari **timeapi.io** dan merespons sesuai.

---

## 🔧 Struktur Proyek

```
📂 wa-bot-Gemini-AI/
│── 📜 admin/             # File panel admin
│── 📜 database.db        # Database SQLite
│── 📜 index.js           # Logika bot utama
│── 📜 server.js          # Server web
│── 📜 replies.js         # Respons bot yang telah ditentukan
│── 📜 prompt_template.js # Struktur prompt AI
│── 📜 .env               # Kunci API dan konfigurasi
│── 📜 package.json       # Dependensi Node.js
│── 📜 README.md          # Dokumentasi proyek
```

---

## 🔥 Dependensi

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) – Otomatisasi WhatsApp
- [dotenv](https://www.npmjs.com/package/dotenv) – Mengelola variabel lingkungan
- [axios](https://www.npmjs.com/package/axios) – Menangani permintaan HTTP (untuk **timeapi.io**)
- [GoogleGenerativeAI](https://www.npmjs.com/package/@google/generative-ai) – Integrasi Gemini AI
- [express](https://www.npmjs.com/package/express) - Kerangka kerja web
- [socket.io](https://www.npmjs.com/package/socket.io) - Komunikasi real-time
- [sqlite3](https://www.npmjs.com/package/sqlite3) - Database SQLite

---

## 🤝 Berkontribusi

1.  Fork repositori ini.
2.  Buat cabang baru: `git checkout -b fitur-baru`.
3.  Lakukan perubahan: `git commit -m "Menambahkan fitur baru"`.
4.  Dorong cabang Anda: `git push origin fitur-baru`.
5.  Buka Pull Request.

---

## 📜 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**.

---

## 📞 Kontak

📧 Email: wgp.pra@gmail.com
🐦 Twitter: [@galasaktii](https://twitter.com/galasaktii)
📌 GitHub: [wimboro](https://github.com/wimboro)

---
