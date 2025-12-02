import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Route } from "./+types/iletisim";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "İletişim - Hatice Gül" },
    {
      name: "description",
      content: "Benimle iletişime geçin ve randevu alın",
    },
  ];
}

export default function Iletisim() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              İletişim
            </h1>
            <p className="text-xl text-dark/70">
              Size yardımcı olmak için buradayım. Hemen iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">
                  Randevu Talebi
                </h2>
                <p className="text-dark/70 mb-8">
                  Formu doldurarak benimle iletişime geçebilir ve uygun randevu
                  saatlerini öğrenebilirsiniz. En kısa sürede size geri dönüş
                  yapacağım.
                </p>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-dark font-medium mb-2"
                    >
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-dark font-medium mb-2"
                    >
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-dark font-medium mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-dark font-medium mb-2"
                    >
                      Hizmet Türü *
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Seçiniz</option>
                      <option value="individual">Bireysel Terapi</option>
                      <option value="couple">Çift Terapisi</option>
                      <option value="family">Aile Terapisi</option>
                      <option value="online">Online Terapi</option>
                      <option value="group">Grup Terapisi</option>
                      <option value="training">Eğitim Programı</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-dark font-medium mb-2"
                    >
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Lütfen durumunuz hakkında kısaca bilgi verin..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-dark/70">
                      Kişisel verilerimin işlenmesini ve{" "}
                      <a href="#" className="text-primary hover:underline">
                        gizlilik politikasını
                      </a>{" "}
                      kabul ediyorum.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Gönder
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-dark mb-6">
                  İletişim Bilgileri
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">E-posta</h3>
                      <p className="text-dark/70">info@haticegul.com</p>
                      <p className="text-dark/70">randevu@haticegul.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Telefon</h3>
                      <p className="text-dark/70">+90 5XX XXX XX XX</p>
                      <p className="text-dark/50 text-sm mt-1">
                        Pazartesi - Cuma: 09:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Adres</h3>
                      <p className="text-dark/70">
                        Örnek Mahallesi, Örnek Sokak No: 123
                        <br />
                        Kadıköy, İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">
                        Çalışma Saatleri
                      </h3>
                      <p className="text-dark/70">
                        Pazartesi - Cuma: 09:00 - 19:00
                        <br />
                        Cumartesi: 10:00 - 16:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-primary/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-dark mb-4">
                    Sosyal Medya
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-dark/70 hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-dark/70 hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-dark/70 hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-96 bg-primary/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-primary/40 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-dark/50">Harita görünümü buraya eklenecek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-dark mb-3">
              Gizliliğiniz Bizim İçin Önemli
            </h3>
            <p className="text-dark/70 max-w-2xl mx-auto">
              Tüm kişisel bilgileriniz gizli tutulur ve yalnızca sizinle
              iletişim kurmak amacıyla kullanılır. Profesyonel etik kuralları
              ve KVKK düzenlemelerine tam uyum gösteriyoruz.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
