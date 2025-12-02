import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Route } from "./+types/hakkimda";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hakkımda - Hatice Gül" },
    {
      name: "description",
      content: "Psikolog Hatice Gül hakkında detaylı bilgi",
    },
  ];
}

export default function Hakkimda() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Hakkımda
            </h1>
            <p className="text-xl text-dark/70">
              Psikolojik sağlığınız için yanınızdayım
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-primary/10 rounded-2xl aspect-square flex items-center justify-center">
                  <svg
                    className="w-48 h-48 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-dark">
                  Merhaba, Ben Hatice Gül
                </h2>
                <p className="text-dark/70 leading-relaxed">
                  10 yılı aşkın süredir psikolojik danışmanlık alanında çalışıyorum.
                  İnsanların içsel dünyalarını keşfetmelerine, duygusal
                  zorluklarla başa çıkmalarına ve daha sağlıklı bir yaşam
                  sürmelerine yardımcı olmak benim için bir tutku.
                </p>
                <p className="text-dark/70 leading-relaxed">
                  Danışanlarımla çalışırken kişiye özel, empatik ve çözüm
                  odaklı bir yaklaşım benimsiyorum. Her bireyin benzersiz bir
                  hikayesi olduğuna inanıyor ve bu hikayelere saygıyla
                  yaklaşıyorum.
                </p>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-dark/5">
                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
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
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                  Eğitim
                </h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-dark">
                      Klinik Psikoloji Yüksek Lisans
                    </h4>
                    <p className="text-dark/70 text-sm">
                      İstanbul Üniversitesi, 2018
                    </p>
                  </li>
                  <li className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-dark">
                      Psikoloji Lisans
                    </h4>
                    <p className="text-dark/70 text-sm">
                      Ankara Üniversitesi, 2015
                    </p>
                  </li>
                  <li className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-dark">
                      Bilişsel Davranışçı Terapi Sertifikası
                    </h4>
                    <p className="text-dark/70 text-sm">2019</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-dark/5">
                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Deneyim
                </h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-dark">
                      Özel Klinikte Psikolog
                    </h4>
                    <p className="text-dark/70 text-sm">2018 - Devam Ediyor</p>
                  </li>
                  <li className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-dark">
                      Online Terapi Platformu
                    </h4>
                    <p className="text-dark/70 text-sm">2020 - Devam Ediyor</p>
                  </li>
                  <li className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-dark">
                      Araştırma Görevlisi
                    </h4>
                    <p className="text-dark/70 text-sm">2015 - 2018</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Approach */}
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-dark mb-6 text-center">
                Terapötik Yaklaşımım
              </h2>
              <p className="text-dark/70 leading-relaxed text-center max-w-3xl mx-auto mb-8">
                Çalışmalarımda kanıta dayalı terapi yöntemlerini kullanıyor,
                her danışanın bireysel ihtiyaçlarına göre tedavi planı
                oluşturuyorum. Bilişsel Davranışçı Terapi'yi (BDT) temel alarak,
                şema terapi, kabul ve kararlılık terapisi gibi modern yaklaşımları
                da entegre ediyorum.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-dark mb-2">
                    Çözüm Odaklı
                  </h3>
                  <p className="text-dark/70 text-sm">
                    Somut hedefler belirleyip bunlara ulaşma yolunda birlikte
                    çalışıyoruz
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">💝</span>
                  </div>
                  <h3 className="font-semibold text-dark mb-2">Empatik</h3>
                  <p className="text-dark/70 text-sm">
                    Yargılamadan, anlamaya odaklanarak sizinle buradayım
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary text-2xl">📊</span>
                  </div>
                  <h3 className="font-semibold text-dark mb-2">
                    Kanıta Dayalı
                  </h3>
                  <p className="text-dark/70 text-sm">
                    Bilimsel araştırmalarla desteklenen yöntemler kullanıyorum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
