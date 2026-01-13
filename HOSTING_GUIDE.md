# 🚀 Hostinger Domain + Coolify Deployment Rehberi

## Next.js Projenizi Coolify ile Deploy Etme

Coolify'ınız varsa harika! En kolay ve profesyonel yöntem bu.

---

## 🎯 Yöntem 1: Coolify (SİZİN İÇİN - EN İYİSİ!)

Coolify, kendi sunucunuzda çalışan self-hosted PaaS. Vercel gibi ama kendi kontrolünüzde!

### 1️⃣ Git Repository'yi Hazırlayın

Projenizi GitHub/GitLab/Gitea'ya push edin:

```bash
# Eğer henüz yapmadıysanız
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

### 2️⃣ Coolify'da Yeni Proje Oluşturun

**Coolify Dashboard'da:**

1. **+ New Resource** → **Create**
2. **Public Repository** veya **Private Repository** seçin
3. Repository URL'nizi girin:
   ```
   https://github.com/yourusername/reklamatic-ai
   ```
4. **Branch:** `main` seçin
5. **Build Pack:** `Nixpacks` (Otomatik Next.js algılar) ✅

### 3️⃣ Environment Variables (İsteğe Bağlı)

Eğer `.env` dosyanız varsa:
```env
# Örnek
NEXT_PUBLIC_API_URL=https://api.reklamatic.ai
```

Coolify'da **Environment Variables** sekmesine ekleyin.

### 4️⃣ Port Ayarları

Next.js varsayılan olarak **3000** portunda çalışır.

**Coolify'da:**
- **Port:** `3000` olarak ayarlayın
- **Publicly Available:** ✅ İşaretleyin

### 5️⃣ Build & Deploy

1. **Deploy** butonuna tıklayın
2. Coolify otomatik olarak:
   - `npm install` çalıştırır
   - `npm run build` yapar
   - `npm start` ile başlatır

📊 **Build loglarını izleyin** (1-3 dakika sürer)

### 6️⃣ Domain Bağlama (Coolify → Hostinger)

#### A) Coolify'da Domain Ekleyin

1. Proje sayfanızda **Domains** sekmesine gidin
2. **Add Domain** tıklayın
3. Domain'i ekleyin:
   ```
   reklamatic.ai
   www.reklamatic.ai
   ```
4. **Let's Encrypt SSL** otomatik aktif olur ✅

#### B) Hostinger'da DNS Ayarlarını Yapın

**Hostinger Panel → Domain → DNS Kayıtları:**

Şu kayıtları ekleyin:

```
Type: A
Name: @
Value: [COOLIFY_SERVER_IP]
TTL: 14400

Type: A  
Name: www
Value: [COOLIFY_SERVER_IP]
TTL: 14400
```

**Coolify sunucu IP'nizi öğrenmek için:**
```bash
# SSH ile Coolify sunucunuza bağlanın
ssh root@your-coolify-server

# IP adresini görün
curl ifconfig.me
```

⏱️ **DNS değişikliği 10-30 dakika içinde aktif olur**

### 7️⃣ SSL Sertifikası (Otomatik!)

Coolify, Let's Encrypt ile otomatik SSL kurar. Hiçbir şey yapmanıza gerek yok! 🎉

Domain bağlandıktan sonra:
- ✅ `https://reklamatic.ai` otomatik çalışır
- ✅ `http` → `https` yönlendirmesi otomatik

### 8️⃣ Otomatik Deployment

Git'e her push yaptığınızda otomatik deploy:

**Coolify'da:**
1. **Settings** → **General**
2. **Auto Deploy** → **Enabled** ✅
3. **Webhook** URL'sini kopyalayın

**GitHub'da:**
1. **Settings** → **Webhooks** → **Add webhook**
2. Coolify webhook URL'sini yapıştırın
3. Content type: `application/json`
4. Events: `Just the push event`

Artık her `git push` yaptığınızda site otomatik güncellenir! 🚀

---

## 📋 Coolify Deployment Checklist

- [ ] Git repository hazır
- [ ] Coolify'da proje oluşturuldu
- [ ] Build başarılı (logs kontrol edildi)
- [ ] Domain Coolify'a eklendi
- [ ] Hostinger DNS kayıtları güncellendi
- [ ] SSL sertifikası aktif (yeşil kilit 🔒)
- [ ] Auto-deploy webhook kuruldu
- [ ] `https://reklamatic.ai` çalışıyor

---

## 🔥 Coolify İpuçları

### Docker Compose Kullanımı (Opsiyonel)

Daha fazla kontrol isterseniz `docker-compose.yml` ekleyin:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Performans Optimizasyonu

**Coolify Settings:**
- **Health Check:** `/` (Next.js health check)
- **Restart Policy:** `always`
- **Memory Limit:** `512MB` (yeterli)
- **CPU Limit:** `0.5` core

### Backup Stratejisi

Coolify otomatik backup almaz, o yüzden:

```bash
# Coolify sunucunuzda
# Database backup (eğer kullanıyorsanız)
pg_dump mydb > backup.sql

# Git'e her şey zaten yedekli!
```

---

## 🆘 Coolify Sorun Giderme

### "Build Failed"
```bash
# Logs kontrol edin
# Coolify Dashboard → Project → Deployments → View Logs

# Genellikle sebep:
# - package.json'da hata
# - Node.js versiyon uyumsuzluğu
```

**Çözüm:** `package.json`'a engine ekleyin:
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

### "Site Çok Yavaş"
```bash
# Coolify sunucunuzda
docker stats

# Eğer CPU %100'se:
# Coolify'da Memory/CPU limitleri artırın
```

### Domain Bağlanmıyor
```bash
# DNS kontrol
dig reklamatic.ai

# IP doğru mu? Coolify IP ile eşleşmeli
# Eğer farklıysa: Hostinger DNS'e tekrar bakın
```

---

## 🎯 Alternatif Yöntemler

Coolify yoksa veya farklı bir yöntem istiyorsanız:

---

## 🔥 Yöntem 1: Vercel (ÖNERİLEN - EN KOLAY)

Next.js'in yaratıcısı Vercel, en iyi performansı sağlar ve ÜCRETSIZ!

### 1. Vercel'e Deploy
```bash
# Vercel CLI'yi yükleyin
npm i -g vercel

# Deploy edin
vercel
```

### 2. Hostinger Domain'i Vercel'e Bağlayın

**Hostinger Panelinde:**
1. **Domain** → **DNS / Nameservers**
2. **DNS Records** seçin
3. Tüm mevcut A kayıtlarını silin
4. Yeni kayıtlar ekleyin:

```
Type: A
Name: @
Value: 76.76.21.21
TTL: 14400

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 14400
```

**Vercel Panelinde:**
1. **Settings** → **Domains**
2. Domain adınızı ekleyin (örn: reklamatic.ai)
3. Vercel'in DNS talimatlarını takip edin
4. `www.reklamatic.ai` ve `reklamatic.ai` iki domain'i de ekleyin

⏱️ **DNS propagation 24-48 saat sürebilir**

---

## 🔧 Yöntem 2: VPS ile Node.js Hosting

Hostinger VPS veya Business Hosting'iniz varsa:

### 1. SSH ile Bağlanın
```bash
ssh root@your-vps-ip
```

### 2. Node.js Kurun
```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Projeyi Upload Edin
```bash
# Git kullanarak
git clone your-repo-url
cd outer-horizon

# Veya FTP/SFTP ile dosyaları yükleyin
```

### 4. Dependencies Kurun ve Build Edin
```bash
npm install
npm run build
```

### 5. PM2 ile Çalıştırın
```bash
# PM2'yi global kurun
npm install -g pm2

# Uygulamayı başlatın
pm2 start npm --name "reklamatic" -- start

# Sistem açılışında otomatik başlat
pm2 startup
pm2 save
```

### 6. Nginx Reverse Proxy Yapılandırın
```bash
sudo nano /etc/nginx/sites-available/reklamatic.ai
```

Şu içeriği ekleyin:
```nginx
server {
    listen 80;
    server_name reklamatic.ai www.reklamatic.ai;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktif edin:
```bash
sudo ln -s /etc/nginx/sites-available/reklamatic.ai /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. SSL Sertifikası (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d reklamatic.ai -d www.reklamatic.ai
```

---

## 📦 Yöntem 3: Static Export (Sınırlı Özellikler)

Next.js'i static HTML'e çevirip normal hosting'e koyabilirsiniz, ancak bazı özellikler çalışmaz.

### 1. next.config.mjs Düzenleyin
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 2. Export Edin
```bash
npm run build
```

### 3. `out` Klasörünü Upload Edin
`out` klasöründeki tüm dosyaları Hostinger File Manager ile `public_html` dizinine yükleyin.

**⚠️ Dikkat:** Bu yöntemde API routes, server-side rendering çalışmaz!

---

## 🌐 Hostinger DNS Ayarları

Hangi yöntemi seçerseniz seçin, DNS ayarlarınız şöyle olmalı:

### Vercel için:
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

### VPS için:
```
A Record: @ → YOUR_VPS_IP
A Record: www → YOUR_VPS_IP
```

---

## ✅ Domain Bağlama Kontrol Listesi

- [ ] Hostinger'da domain satın alındı
- [ ] DNS ayarları yapılandırıldı
- [ ] Proje build edildi (`npm run build`)
- [ ] Hosting platformu seçildi (Vercel/VPS/Static)
- [ ] SSL sertifikası kuruldu (HTTPS için)
- [ ] Domain propagation beklendi (24-48 saat)
- [ ] `https://yourwebsite.com` test edildi

---

## 🎯 ÖNERİM

**Vercel kullanın!** Çünkü:
- ✅ Ücretsiz
- ✅ Otomatik SSL
- ✅ Edge Network (Süper hızlı)
- ✅ Next.js için optimize
- ✅ Otomatik deployment (Git push ile)
- ✅ Preview URLs
- ✅ Kolay domain bağlama

---

## 🆘 Sorun Giderme

### "Site Açılmıyor"
- DNS propagation'ı bekleyin (dig reklamatic.ai komutuyla kontrol edin)
- Browser cache'i temizleyin
- Incognito modda deneyin

### "SSL Hatası"
- Certbot'u tekrar çalıştırın
- Vercel'de otomatik SSL açık mı kontrol edin

### "500 Internal Server Error"
- PM2 logs kontrol edin: `pm2 logs`
- Node.js versiyonunu kontrol edin: `node -v` (18+ olmalı)

---

## 📞 İletişim

Sorularınız için: info@reklamatic.ai
