import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Route } from "./+types/egitimler";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eğitimler - Hatice Gül" },
    {
      name: "description",
      content: "Psikoloji ve kişisel gelişim eğitim programları",
    },
  ];
}

export default function Egitimler() {
  const trainings = [
    {
      title: "Stres Yönetimi Atölyesi",
      duration: "4 hafta",
      format: "Online",
      level: "Başlangıç",
      price: "2.500 TL",
      description:
        "Günlük hayatta karşılaştığınız stresi tanımayı ve etkili yöntemlerle yönetmeyi öğrenin.",
      topics: [
        "Stres nedir ve nasıl etkilenir",
        "Nefes ve gevşeme teknikleri",
        "Bilişsel yeniden yapılandırma",
        "Zaman yönetimi ve öncelikler",
        "Sağlıklı sınırlar koymak",
        "Mindfulness pratiği",
      ],
      features: ["4 hafta canlı ders", "Kayıtlı video erişimi", "Atölye materyalleri", "Sertifika"],
    },
    {
      title: "Duygusal Zeka Geliştirme Programı",
      duration: "6 hafta",
      format: "Hibrit",
      level: "Orta",
      price: "3.500 TL",
      description:
        "Duygularınızı tanıyın, yönetin ve ilişkilerinizde daha etkili iletişim kurun.",
      topics: [
        "Duygusal zeka nedir",
        "Öz farkındalık geliştirme",
        "Duyguları yönetme becerileri",
        "Empati ve sosyal beceriler",
        "Motivasyon ve hedef belirleme",
        "İlişkilerde duygusal zeka",
      ],
      features: ["6 hafta program", "Birebir koçluk seansı", "Uygulama ödevleri", "Sertifika"],
    },
    {
      title: "Etkili İletişim Becerileri",
      duration: "3 hafta",
      format: "Online",
      level: "Başlangıç",
      price: "2.000 TL",
      description:
        "Hem özel hem iş hayatınızda daha etkili iletişim kurmanızı sağlayacak temel becerileri edinin.",
      topics: [
        "Aktif dinleme teknikleri",
        "Ben dili kullanımı",
        "Sözsüz iletişim",
        "Yapıcı geri bildirim verme",
        "Çatışma çözümü",
        "Asertif iletişim",
      ],
      features: ["3 hafta eğitim", "Pratik egzersizler", "Grup çalışmaları", "Dijital sertifika"],
    },
    {
      title: "Mindfulness ve Farkındalık",
      duration: "8 hafta",
      format: "Online",
      level: "Başlangıç",
      price: "3.000 TL",
      description:
        "MBSR (Mindfulness Based Stress Reduction) temelli farkındalık meditasyonu programı.",
      topics: [
        "Farkındalık meditasyonu temelleri",
        "Beden taraması",
        "Nefes farkındalığı",
        "Düşünceleri gözlemleme",
        "Günlük yaşamda mindfulness",
        "Şefkatli farkındalık",
      ],
      features: ["8 hafta rehberli meditasyon", "Günlük pratik rehberi", "Ses kayıtları", "Sertifika"],
    },
    {
      title: "Ebeveynlik Becerileri Atölyesi",
      duration: "5 hafta",
      format: "Hibrit",
      level: "Başlangıç",
      price: "2.800 TL",
      description:
        "Çocuğunuzla daha sağlıklı bir bağ kurmak ve etkili ebeveynlik becerileri geliştirmek için.",
      topics: [
        "Çocuk gelişim dönemleri",
        "Olumlu disiplin teknikleri",
        "Duygusal koçluk",
        "Sınır koyma ve tutarlılık",
        "Çocuklarla etkili iletişim",
        "Öz bakım ve ebeveyn stresi",
      ],
      features: ["5 hafta eğitim", "Çift katılımı opsiyonu", "Pratik örnekler", "Kaynak dokümanları"],
    },
    {
      title: "Anksiyete ile Başa Çıkma",
      duration: "6 hafta",
      format: "Online",
      level: "Başlangıç",
      price: "2.800 TL",
      description:
        "Anksiyete semptomlarını azaltmak için kanıta dayalı stratejiler ve teknikler öğrenin.",
      topics: [
        "Anksiyeyi anlamak",
        "Endişe döngüsünü kırmak",
        "Bilişsel teknikler",
        "Maruziyet terapisi prensipleri",
        "Gevşeme teknikleri",
        "Panik atak yönetimi",
      ],
      features: ["6 hafta program", "Çalışma kitabı", "Acil durum stratejileri", "Destek grubu erişimi"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Eğitimler
            </h1>
            <p className="text-xl text-dark/70">
              Kişisel gelişiminiz için profesyonel eğitim programları
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-dark/70">Mezun Katılımcı</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <p className="text-dark/70">Memnuniyet Oranı</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-dark/70">Farklı Program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {trainings.map((training, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-dark/5 overflow-hidden flex flex-col"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-bold text-dark">
                        {training.title}
                      </h2>
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap ml-2">
                        {training.price}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1 bg-white rounded-full text-dark/70">
                        ⏱️ {training.duration}
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-dark/70">
                        📍 {training.format}
                      </span>
                      <span className="px-3 py-1 bg-white rounded-full text-dark/70">
                        📊 {training.level}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow">
                    <p className="text-dark/70 mb-6">{training.description}</p>

                    <h3 className="font-semibold text-dark mb-3">
                      Eğitim İçeriği:
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {training.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <svg
                            className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-dark/70">{topic}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-dark/5 pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {training.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-primary/5 text-primary rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 bg-light">
                    <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Kayıt Ol
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Kurumsal Eğitimler
            </h2>
            <p className="text-dark/70 mb-8 text-lg">
              Ekibiniz için özelleştirilmiş eğitim programları sunuyorum.
              İş yerinde ruh sağlığı, stres yönetimi, takım iletişimi ve
              liderlik becerileri konularında firmalar için özel atölyeler
              düzenliyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Teklif Alın
              </button>
              <button className="bg-white text-dark px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors border border-dark/10">
                Referansları Görün
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-dark/5">
                <h3 className="font-semibold text-dark mb-2">
                  Eğitimler online mı yoksa yüz yüze mi?
                </h3>
                <p className="text-dark/70 text-sm">
                  Programlarımızın çoğu online olarak düzenlenmektedir. Bazı
                  eğitimler hibrit format ile hem online hem yüz yüze seçeneği
                  sunmaktadır.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-dark/5">
                <h3 className="font-semibold text-dark mb-2">
                  Eğitimleri kaçırırsam ne olur?
                </h3>
                <p className="text-dark/70 text-sm">
                  Tüm canlı dersler kaydedilir ve katılımcılara paylaşılır.
                  Dilediğiniz zaman kayıtları izleyebilirsiniz.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-dark/5">
                <h3 className="font-semibold text-dark mb-2">
                  Sertifika alabilir miyim?
                </h3>
                <p className="text-dark/70 text-sm">
                  Evet, eğitim programını tamamlayan tüm katılımcılara dijital
                  katılım sertifikası verilmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
