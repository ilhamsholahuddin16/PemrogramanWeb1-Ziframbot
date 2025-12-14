# 🤖 ZiframeBot - Chatbot Service Website

Website penyedia jasa chatbot berbasis rule-based menggunakan HTML, CSS (Tailwind), dan JavaScript (Vanilla JS).

## 📋 Deskripsi Project

ZiframeBot adalah solusi chatbot cerdas yang dirancang untuk membantu bisnis melayani pelanggan 24/7. Website ini menampilkan layanan chatbot dengan fitur demo interaktif, dokumentasi lengkap, dan informasi produk.

## ✨ Fitur Utama

- **Landing Page** - Hero section, value proposition, dan keunggulan produk
- **Features Page** - Penjelasan detail fitur-fitur chatbot
- **Demo Chat Page** - Chatbot interaktif yang bisa dicoba langsung
- **Documentation Page** - Panduan integrasi dan konfigurasi
- **About Page** - Informasi tentang layanan dan filosofi
- **Contact Page** - Form kontak dan informasi komunikasi

## 🛠️ Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman semantic |
| CSS3 | Custom animations dan effects |
| Tailwind CSS | Utility-first CSS framework (via CDN) |
| JavaScript (Vanilla) | Chatbot engine dan interaksi UI |
| JSON | Konfigurasi rules chatbot |
| LocalStorage | Penyimpanan chat history |

## 📂 Struktur Folder

```
project_web/
│
├── index.html          # Landing page
├── features.html       # Halaman fitur
├── chat.html          # Demo chatbot
├── docs.html          # Dokumentasi
├── about.html         # Tentang layanan
├── contact.html       # Halaman kontak
│
├── style.css          # Custom CSS (animations, effects)
├── script.js          # Chatbot engine & logic
├── rules.json         # Aturan percakapan chatbot
│
└── README.md          # File ini
```

## 🚀 Cara Menjalankan

### Metode 1: Buka Langsung di Browser
1. Clone atau download repository ini
2. Buka file `index.html` di browser favorit Anda
3. Navigasi ke halaman lain melalui menu navigasi

### Metode 2: Menggunakan Live Server (Recommended)
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Website akan terbuka di `http://localhost:5500`

### Metode 3: Menggunakan Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Buka browser dan akses http://localhost:8000
```

## 🤖 Cara Menggunakan Chatbot

1. Buka halaman **Demo** (`chat.html`)
2. Ketik pertanyaan di kolom input
3. Tekan Enter atau klik tombol "Kirim"
4. Chatbot akan merespons berdasarkan rules yang telah dikonfigurasi

### Contoh Pertanyaan:
- "Halo"
- "Apa itu chatbot?"
- "Fitur apa saja yang ada?"
- "Bagaimana cara integrasi?"
- "Berapa harganya?"

## ⚙️ Konfigurasi Chatbot

Edit file `rules.json` untuk menambah atau mengubah aturan percakapan:

```json
{
  "rules": [
    {
      "keywords": ["keyword1", "keyword2"],
      "response": "Respons chatbot untuk keyword tersebut"
    }
  ],
  "fallback": "Respons default jika tidak ada keyword yang cocok"
}
```

## 🎨 Customization

### Mengubah Warna
Edit Tailwind config di setiap file HTML:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1',    // Ubah warna primary
        'secondary': '#8b5cf6',  // Ubah warna secondary
      }
    }
  }
}
```

### Mengubah Font
Ganti Google Fonts di tag `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@400;700&display=swap" rel="stylesheet">
```

## 📱 Responsive Design

Website ini fully responsive dan telah dioptimasi untuk:
- 📱 Mobile (375px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## 🌟 Fitur Chatbot

- ✅ Rule-based matching engine
- ✅ Keyword recognition (case-insensitive)
- ✅ Typing indicator animation
- ✅ Auto-scroll to latest message
- ✅ Chat history dengan localStorage
- ✅ Clear chat functionality
- ✅ Responsive chat UI
- ✅ Message bubbles dengan animasi

## 📄 Halaman Website

### 1. Landing Page (`index.html`)
- Hero section dengan CTA
- Why section (6 benefits)
- Value proposition
- Stats showcase

### 2. Features Page (`features.html`)
- 6 fitur utama dengan detail
- Technical features
- CTA section

### 3. Demo Chat Page (`chat.html`)
- Interactive chatbot
- Sidebar dengan tips dan contoh pertanyaan
- Stats display
- Chat history

### 4. Documentation Page (`docs.html`)
- Getting started guide
- Integration steps
- Rules configuration
- How it works diagram
- Advanced features

### 5. About Page (`about.html`)
- Mission statement
- Design philosophy
- Technology stack
- Value proposition

### 6. Contact Page (`contact.html`)
- Contact form (UI only, no backend)
- Contact information
- Social media links
- FAQ section

## 🔧 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Edge (Latest)
- ✅ Safari (Latest)

## 📝 Catatan Penting

- Website ini **tidak menggunakan backend** atau database
- Chatbot bekerja sepenuhnya di **client-side**
- Chat history disimpan di **localStorage** browser
- Form kontak hanya **UI mockup** (tidak mengirim email)
- Semua data bersifat **dummy/placeholder**

## 🎓 Project Info

Project ini dibuat sebagai demonstrasi website penyedia jasa chatbot dengan fokus pada:
- Clean code structure
- Modern UI/UX design
- Responsive layout
- Interactive features
- Professional presentation

## 📧 Kontak

Untuk pertanyaan atau feedback:
- Email: contact@ziframebot.com
- Website: [ZiframeBot Demo](chat.html)

## 📜 License

© 2024 ZiframeBot. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan HTML, Tailwind CSS, dan Vanilla JavaScript**