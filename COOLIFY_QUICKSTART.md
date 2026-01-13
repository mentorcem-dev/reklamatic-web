# 🚀 Coolify Hızlı Başlangıç

## 5 Dakikada Deploy!

### 1. Git'e Push
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Coolify'da Yeni Proje
- **+ New Resource** → Repository URL yapıştır
- **Build Pack:** Nixpacks (otomatik)
- **Deploy** tıkla ✅

### 3. Domain Bağla

**Coolify:**
```
Domains → Add: reklamatic.ai
```

**Hostinger DNS:**
```
A Record → @ → [COOLIFY_IP]
A Record → www → [COOLIFY_IP]
```

**IP Bulmak için:**
```bash
ssh root@coolify-server
curl ifconfig.me
```

### 4. 10-30 Dakika Bekle
DNS propagation için...

### 5. Bitir! 🎉
```
https://reklamatic.ai ✅
```

---

## Otomatik Deploy Kur

**Coolify:**
Settings → Auto Deploy → ON

**GitHub:**
Settings → Webhooks → Coolify webhook URL'i ekle

Artık `git push` = otomatik deploy! 💪

---

## Hızlı Sorun Giderme

❌ **Build başarısız?**
→ Coolify logs kontrol et

❌ **Domain açılmıyor?**
→ `dig reklamatic.ai` ile DNS kontrol et

❌ **SSL yok?**
→ Coolify, 5-10 dakika sonra otomatik kurar

---

## Coolify Avantajları

✅ Kendi kontrolünüzde (self-hosted)
✅ Otomatik SSL (Let's Encrypt)
✅ Git-based deployment
✅ Docker ile izole
✅ Kolay rollback
✅ Monitoring built-in
✅ Vercel'den daha ucuz!

---

**Tam detaylar:** `HOSTING_GUIDE.md` dosyasına bakın.
