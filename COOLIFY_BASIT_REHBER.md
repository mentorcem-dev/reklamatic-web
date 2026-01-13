# 🚀 Coolify ile Basit Deploy - Hostinger

## Senin Durumun

✅ Hostinger'dan sunucu aldın
✅ Coolify yönetim paneli var
✅ Domain var (reklamatic.ai)

Şimdi sadece projeyi yükleyip çalıştıracağız!

---

## 🎯 Adım Adım Deploy

### 1️⃣ Projeyi Build Et

Bilgisayarında:

```bash
cd /Users/cemgulcag/.gemini/antigravity/playground/outer-horizon
npm run build
```

Bu komut production için hazır hale getirir.

### 2️⃣ Projeyi ZIP'le

```bash
# .next ve node_modules hariç her şeyi zip'le
zip -r reklamatic.zip . -x "node_modules/*" ".git/*" ".next/*"
```

### 3️⃣ Coolify Paneline Gir

Hostinger'ın verdiği Coolify paneline gir:
- URL: `https://coolify.your-server.com` gibi bir şey olmalı
- Veya Hostinger panel üzerinden "Coolify" butonuna tıkla

### 4️⃣ Yeni Proje Oluştur

**Coolify'da:**

1. **+ New Resource** tıkla
2. **Dockerfile** veya **Simple Deployment** seç
3. Projeye isim ver: `reklamatic-ai`

### 5️⃣ Dosyaları Yükle (2 Yöntem)

#### Yöntem A: Coolify File Upload (Kolay)

1. Coolify'da **Upload** sekmesi varsa oradan `reklamatic.zip` yükle
2. Unzip et

#### Yöntem B: FTP/SFTP (Klasik)

**Hostinger'dan SFTP bilgilerini al:**
- Host: `your-server.com`
- Port: `22`
- User: `root` veya verilen kullanıcı
- Password: Hostinger'dan verilen şifre

**FileZilla veya Cyberduck ile:**
1. SFTP bağlan
2. Projeyi `/var/www/reklamatic` gibi bir klasöre at

### 6️⃣ Coolify'da Ayarla

#### A) Dockerfile Yöntemi (Önerilen)

Projeye `Dockerfile` ekle:

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm ci --only=production

# App files
COPY . .

# Build
RUN npm run build

# Port
EXPOSE 3000

# Start
CMD ["npm", "start"]
```

Coolify'da:
- **Build Type:** Dockerfile
- **Port:** 3000

#### B) Manuel Kurulum

SSH ile sunucuya bağlan:

```bash
ssh root@your-hostinger-server
```

Projeyi kur:

```bash
cd /var/www/reklamatic
npm install
npm run build

# PM2 ile başlat
npm install -g pm2
pm2 start npm --name "reklamatic" -- start
pm2 save
pm2 startup
```

### 7️⃣ Domain Bağla

#### Coolify'da:

1. **Domains** sekmesi
2. **Add Domain:** `reklamatic.ai`
3. **Add Domain:** `www.reklamatic.ai`
4. **SSL:** Let's Encrypt otomatik aktif ✅

#### Hostinger DNS:

**Hostinger Panel → Domains → DNS/Nameservers:**

```
Type: A
Name: @
Value: [SUNUCU_IP]
TTL: 14400

Type: A
Name: www
Value: [SUNUCU_IP]
TTL: 14400
```

**Sunucu IP'ni öğrenmek için:**
- Hostinger panel → Server Info
- Veya SSH: `curl ifconfig.me`

---

## 🎉 Hepsi Bu!

10-20 dakika sonra:
- ✅ `https://reklamatic.ai` çalışır
- ✅ SSL otomatik aktif
- ✅ Site hızlı!

---

## 🔄 Güncellemeleri Nasıl Yaparım?

### Yöntem 1: Manuel

```bash
# Bilgisayarında
npm run build
zip -r update.zip . -x "node_modules/*" ".git/*"

# Sunucuda
ssh root@server
cd /var/www/reklamatic
# Yeni dosyaları kopyala
pm2 restart reklamatic
```

### Yöntem 2: Git (Onerilir)

**Sunucuda bir kere kur:**

```bash
cd /var/www
git clone https://github.com/yourusername/reklamatic.git
cd reklamatic
npm install
npm run build
pm2 start npm --name "reklamatic" -- start
```

**Her güncelleme:**

```bash
# Bilgisayarında
git add .
git commit -m "Update"
git push

# Sunucuda
cd /var/www/reklamatic
git pull
npm install
npm run build
pm2 restart reklamatic
```

Veya **Coolify'da Auto Deploy kur:**
- Settings → Git Webhook
- Her push'ta otomatik günceller!

---

## ❓ Sık Sorulan Sorular

### "Sunucu IP'mi bilmiyorum"

```bash
# Hostinger panel → Server Management → IP Address
# Veya SSH ile:
ssh root@server
curl ifconfig.me
```

### "Coolify panele nasıl girerim?"

- Hostinger panel → Coolify butonu
- Veya `https://your-server-ip:8000`
- Veya Hostinger'ın verdiği subdomain

### "npm komutu çalışmıyor sunucuda"

```bash
# Node.js kur
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### "Domain açılmıyor"

DNS kontrol:
```bash
# Bilgisayarında
nslookup reklamatic.ai

# IP doğru mu bak
```

⏱️ DNS değişikliği 10-30 dakika sürer, sabırlı ol!

---

## 🎯 Özet

1. ✅ `npm run build` yap
2. ✅ Dosyaları Coolify/SFTP ile yükle
3. ✅ Coolify'da domain ekle
4. ✅ Hostinger DNS'i ayarla
5. ✅ 20 dakika bekle
6. ✅ Siteye gir: `https://reklamatic.ai` 🎉

**Sorun mu var?** Hostinger support'a sor veya PM2 logs bak:
```bash
pm2 logs reklamatic
```

Başarılar! 💪
