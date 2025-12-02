import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Route } from "./+types/hizmetlerim";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hizmetlerim - Hatice Gül" },
    {
      name: "description",
      content: "Sunduğum profesyonel psikolojik danışmanlık hizmetleri",
    },
  ];
}

export default function Hizmetlerim() {
  const services = [
    {
      title: "Bireysel Terapi",
      icon: "👤",
      description:
        "Depresyon, anksiyete, travma, öfke kontrolü gibi duygusal zorluklar ve kişisel gelişim için birebir terapi seansları.",
      features: [
        "Anksiyete ve panik atak tedavisi",
        "Depresyon ve duygu durum bozuklukları",
        "Travma ve PTSD tedavisi",
        "Öz güven ve benlik saygısı çalışmaları",
        "Stres yönetimi",
        "Kişisel gelişim ve öz farkındalık",
      ],
    },
    {
      title: "Çift Terapisi",
      icon: "💑",
      description:
        "İlişki sorunları, iletişim problemleri ve çatışma çözümü için çiftlere özel danışmanlık hizmeti.",
      features: [
        "İletişim becerilerini geliştirme",
        "Çatışma çözümü stratejileri",
        "Güven inşası ve bağlanma sorunları",
        "Evlilik öncesi danışmanlık",
        "İlişkide duygusal yakınlığı artırma",
        "Ayrılık ve boşanma süreci desteği",
      ],
    },
    {
      title: "Aile Terapisi",
      icon: "👨‍👩‍👧‍👦",
      description:
        "Aile içi iletişim sorunları, çocuk yetiştirme ve aile dinamikleri için profesyonel destek.",
      features: [
        "Ebeveyn-çocuk ilişkisi danışmanlığı",
        "Ergenlik dönemi destek",
        "Aile içi çatışma yönetimi",
        "Boşanma sonrası aile dinamikleri",
        "Üvey aile uyumu",
        "Kuşaklar arası sorunlar",
      ],
    },
    {
      title: "Online Terapi",
      icon: "💻",
      description:
        "Nerede olursanız olun, güvenli ve etkili online terapi seansları ile size ulaşıyorum.",
      features: [
        "Güvenli video görüşme platformu",
        "Esnek seans saatleri",
        "Evden konfor içinde terapi",
        "Yurtdışından erişim imkanı",
        "Acil durumlarda destek",
        "Mesajlaşma desteği (belirli paketlerde)",
      ],
    },
    {
      title: "Grup Terapisi",
      icon: "👥",
      description:
        "Benzer deneyimleri paylaşan bireylerin bir araya geldiği destekleyici grup seansları.",
      features: [
        "Sosyal anksiyete grubu",
        "Depresyon destek grubu",
        "Kadın destek grubu",
        "İlişki becerileri grubu",
        "Öfke yönetimi grubu",
        "Yas ve kayıp destek grubu",
      ],
    },
    {
      title: "Atölye ve Eğitimler",
      icon: "📚",
      description:
        "Psikolojik sağlık, kişisel gelişim ve farkındalık konularında eğitim programları.",
      features: [
        "Stres yönetimi atölyesi",
        "Duygusal zeka geliştirme",
        "İletişim becerileri eğitimi",
        "Mindfulness ve farkındalık",
        "Ebeveynlik becerileri",
        "İş yerinde ruh sağlığı seminerleri",
      ],
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
              Hizmetlerim
            </h1>
            <p className="text-xl text-dark/70">
              Size en uygun destek türünü birlikte belirleyeceğiz
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-dark/5 overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-3xl">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                          {service.title}
                        </h2>
                        <p className="text-dark/70 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
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
                              <span className="text-dark/70 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-center">
              Terapi Süreci Nasıl İşler?
            </h2>
            <p className="text-dark/70 text-center mb-12 max-w-2xl mx-auto">
              Sizinle çalışma sürecim şeffaf ve yapılandırılmış bir şekilde
              ilerler
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold text-dark mb-2">
                  İlk İletişim
                </h3>
                <p className="text-dark/70 text-sm">
                  Randevu oluşturarak veya mesaj göndererek başlayın
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold text-dark mb-2">
                  Değerlendirme
                </h3>
                <p className="text-dark/70 text-sm">
                  İlk seansta durumunuzu birlikte değerlendiririz
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold text-dark mb-2">Plan</h3>
                <p className="text-dark/70 text-sm">
                  Size özel tedavi planı oluşturur ve hedefler belirleriz
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-semibold text-dark mb-2">Terapi</h3>
                <p className="text-dark/70 text-sm">
                  Düzenli seanslarla hedeflerinize doğru ilerliyoruz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hangi hizmetin size uygun olduğundan emin değil misiniz?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Endişelenmeyin! İlk görüşmede birlikte değerlendirip size en
              uygun yöntemi belirleyeceğiz.
            </p>
            <Link
              to="/iletisim"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors"
            >
              Ücretsiz Ön Görüşme Alın
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
