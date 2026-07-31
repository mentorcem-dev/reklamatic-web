import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Gizlilik Politikası", description: "Reklamatic.ai web sitesi taleplerinde ve hizmetlerinde kişisel verilerin işlenmesi.", alternates: { canonical: "https://reklamatic.ai/privacy", languages: { tr: "https://reklamatic.ai/privacy", en: "https://reklamatic.ai/en/privacy", "x-default": "https://reklamatic.ai/privacy" } } };

export default function PrivacyPageTr() {
  return (
    <LegalPage eyebrow="REKLAMATIC.AI" title="Gizlilik Politikası" updated="27 Temmuz 2026" updatedLabel="Son güncelleme" otherHref="/terms" otherLabel="Koşullar" languageHref="/en/privacy" languageLabel="English">
      <h2>Veri sorumlusu</h2>
      <p>Reklamatic.ai burada açıklanan kişisel verilerden sorumludur. Gizlilik taleplerinizi <a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a> adresine iletebilirsiniz.</p>
      <h2>Web sitesi ve satış talepleri</h2>
      <p>Kampanya özeti hazırlarken girdiğiniz ad, iş e-postası, telefon veya WhatsApp numarası, şirket, pazar, bütçe aralığı, kaynak bağlantısı ve mesaj yalnızca kendi e-posta uygulamanızda bir e-posta oluşturmak için kullanılır. Form verileri bu web sitesine yüklenmez veya burada saklanmaz. E-postayı gönderirseniz Reklamatic talebinizi yanıtlamak, kapsam hazırlamak ve iş yazışmalarını yürütmek amacıyla bilgileri işler.</p>
      <h2>İletişim, saklama ve paylaşım</h2>
      <p>Sağladığınız kanala göre e-posta, telefon veya WhatsApp üzerinden yanıt verebiliriz. Talep kayıtları yalnızca iş ilişkisi, yasal yükümlülükler ve uyuşmazlıkların çözümü için makul süre boyunca saklanır. E-posta, barındırma, analiz veya mesajlaşma sağlayıcıları sınırlı veriyi işleyebilir; kişisel verileri satmayız.</p>
      <h2>Haklarınız</h2>
      <p>Bilgilerinize erişim, düzeltme veya silme talep edebilir; işlemeye itiraz edebilir, kısıtlama isteyebilir ya da uygulanabildiği ölçüde onayınızı geri çekebilirsiniz. Yasal saklama yükümlülükleri silmeyi sınırlayabilir. İlgili veri koruma makamına başvurma hakkınız da saklıdır.</p>
      <h2>Reklamatic Publisher</h2>
      <p>TikTok hesabı bağlayan yetkili kullanıcılar için Reklamatic Publisher; hesap kimliklerini, izinleri, OAuth bilgilerini, seçilen video dosyalarını, yükleme durumunu ve sınırlı güvenlik kayıtlarını yalnızca talep edilen yayın akışını sağlamak ve korumak amacıyla işler. Erişim TikTok ayarlarından kaldırılabilir.</p>
      <h2>Güvenlik ve değişiklikler</h2>
      <p>Makul teknik ve organizasyonel önlemler uygularız; ancak internet üzerinden hiçbir aktarım tamamen risksiz değildir. Hizmetler veya yasal gereklilikler değiştikçe bu metni güncelleyebiliriz.</p>
    </LegalPage>
  );
}
