import { Link, useLocation } from "react-router";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/hakkimda", label: "Hakkımda" },
    { path: "/hizmetlerim", label: "Hizmetlerim" },
    { path: "/blog", label: "Blog" },
    { path: "/egitimler", label: "Eğitimler" },
    { path: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Hatice Gül Logo"
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-dark/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-dark">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
