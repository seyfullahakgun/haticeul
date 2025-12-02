import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Hatice Gül</h3>
            <p className="text-light/70 text-sm">
              Profesyonel psikolojik danışmanlık ve terapi hizmetleri
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/hakkimda"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  to="/hizmetlerim"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  Hizmetlerim
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="text-light/70 hover:text-primary transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-light/70">
              <li>Email: info@haticegul.com</li>
              <li>Telefon: +90 XXX XXX XX XX</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light/10 mt-8 pt-8 text-center text-sm text-light/50">
          <p>&copy; {new Date().getFullYear()} Hatice Gül. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
