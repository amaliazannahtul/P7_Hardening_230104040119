# Praktikum 7 – Hardening API (Express.js)

Nama  : Amalia Zannahtul Putria  
NIM   : 230104040119  
Mata Kuliah : Web Service Engineering  

---

##  Deskripsi
Project ini merupakan hasil Praktikum 7 pada mata kuliah Web Service Engineering
yang membahas **Hardening API** menggunakan **Node.js dan Express.js**.

Hardening dilakukan untuk meningkatkan keamanan API dengan menerapkan:
- Helmet
- CORS
- Rate Limiting
- Environment Variable (.env)
- Logging request

---

##  Teknologi yang Digunakan
- Node.js
- Express.js
- Helmet
- CORS
- express-rate-limit
- dotenv
- morgan

---

##  Struktur Folder
P7_Hardening_230104040119
│
├── app.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md

---

## ⚙️ Konfigurasi Environment
Buat file `.env` berdasarkan `.env.example` dengan isi:

```env
PORT=4000
NODE_ENV=development
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=15
ALLOWED_ORIGIN=http://localhost:4000

Cara Menjalankan Project
1. Install dependency:
npm install
2. Jalankan server:
node app.js
3. Server akan berjalan di:
http://localhost:4000

Endpoint yang Tersedia
1. Health Check
GET /api/health
Response:

{
  "status": "UP",
  "uptime": 12.34,
  "timestamp": "2025-xx-xxTxx:xx:xx.xxxZ"
}

Kesimpulan

Dengan penerapan hardening menggunakan middleware keamanan,
API menjadi lebih aman dari serangan dasar seperti abuse request,
akses tidak sah, dan kebocoran konfigurasi.