import { Link } from "react-router";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hatice Gül - Psikolog" },
    {
      name: "description",
      content: "Profesyonel psikolojik danışmanlık ve terapi hizmetleri",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Kendinize Değer Verin,{" "}
              <span className="text-primary">Hayatınızı Değiştirin</span>
            </h1>
            <p className="text-xl text-dark/70 mb-8">
              Profesyonel psikolojik danışmanlık ile içsel dengenizi bulun ve
              daha mutlu bir yaşam sürün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/iletisim"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Randevu Alın
              </Link>
              <Link
                to="/hakkimda"
                className="bg-white text-dark px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors border border-dark/10"
              >
                Hakkımda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark mb-4">Hizmetlerim</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Farklı alanlarda uzmanlaşmış profesyonel destek
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dark/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Bireysel Terapi
              </h3>
              <p className="text-dark/70">
                Kişisel gelişim, depresyon, anksiyete ve diğer duygusal
                sorunlarda profesyonel destek.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dark/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Çift Terapisi
              </h3>
              <p className="text-dark/70">
                İlişkilerde yaşanan sorunları çözmek ve iletişimi güçlendirmek
                için çift danışmanlığı.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dark/5">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">
                Online Eğitimler
              </h3>
              <p className="text-dark/70">
                Psikolojik sağlık ve kişisel gelişim konularında eğitim
                programları.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/hizmetlerim"
              className="text-primary font-semibold hover:underline"
            >
              Tüm Hizmetleri Görüntüle →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-dark mb-4">
                Neden Benimle Çalışmalısınız?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">
                    Uzman Deneyim
                  </h3>
                  <p className="text-dark/70">
                    10+ yıllık profesyonel deneyim ile güvenilir destek
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">
                    Kişiye Özel Yaklaşım
                  </h3>
                  <p className="text-dark/70">
                    Her danışanın ihtiyaçlarına özel tedavi planları
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">
                    Gizlilik Garantisi
                  </h3>
                  <p className="text-dark/70">
                    Tüm görüşmeler tamamen gizli ve profesyonel etik kurallarına
                    uygun
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-2">
                    Esnek Randevu Saatleri
                  </h3>
                  <p className="text-dark/70">
                    Online ve yüz yüze seanslar için esnek randevu imkanı
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              İlk Adımı Atmaya Hazır mısınız?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Bugün bir randevu alın ve daha iyi bir yarına başlayın.
            </p>
            <Link
              to="/iletisim"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-light transition-colors"
            >
              Hemen İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
