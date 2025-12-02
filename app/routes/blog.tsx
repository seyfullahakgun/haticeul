import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import type { Route } from "./+types/blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Hatice Gül" },
    {
      name: "description",
      content: "Psikoloji, kişisel gelişim ve ruh sağlığı hakkında yazılar",
    },
  ];
}

export default function Blog() {
  const blogPosts = [
    {
      title: "Anksiyete ile Başa Çıkmanın 7 Etkili Yolu",
      excerpt:
        "Günlük hayatta anksiyeteyi yönetmek için uygulayabileceğiniz pratik stratejiler...",
      date: "15 Ocak 2024",
      category: "Anksiyete",
      readTime: "5 dk",
    },
    {
      title: "Sağlıklı İlişkilerin Temelleri",
      excerpt:
        "Uzun süreli ve mutlu bir ilişki için gerekli olan temel unsurları keşfedin...",
      date: "8 Ocak 2024",
      category: "İlişkiler",
      readTime: "7 dk",
    },
    {
      title: "Öz Şefkat Nedir ve Neden Önemlidir?",
      excerpt:
        "Kendinize karşı daha şefkatli olmayı öğrenmek ruh sağlığınızı nasıl etkiler...",
      date: "2 Ocak 2024",
      category: "Kişisel Gelişim",
      readTime: "6 dk",
    },
    {
      title: "Stres Yönetimi: Modern Hayatın Kaçınılmaz Gerçeği",
      excerpt:
        "Stresle savaşmak yerine onu yönetmeyi öğrenmek için etkili teknikler...",
      date: "28 Aralık 2023",
      category: "Stres",
      readTime: "8 dk",
    },
    {
      title: "Çocuklarda Duygusal Zeka Gelişimi",
      excerpt:
        "Çocuğunuzun duygusal zekasını geliştirmek için ebeveyn olarak neler yapabilirsiniz...",
      date: "22 Aralık 2023",
      category: "Ebeveynlik",
      readTime: "6 dk",
    },
    {
      title: "Depresyon: Sessiz Çığlık",
      excerpt:
        "Depresyonun belirtilerini tanımak ve yardım istemek için doğru adımları atmak...",
      date: "15 Aralık 2023",
      category: "Depresyon",
      readTime: "9 dk",
    },
  ];

  const categories = [
    "Tümü",
    "Anksiyete",
    "Depresyon",
    "İlişkiler",
    "Kişisel Gelişim",
    "Stres",
    "Ebeveynlik",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-light to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              Blog
            </h1>
            <p className="text-xl text-dark/70">
              Psikoloji ve kişisel gelişim üzerine yazılar
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "Tümü"
                      ? "bg-primary text-white"
                      : "bg-white text-dark/70 hover:bg-primary/10 border border-dark/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dark/5 overflow-hidden group cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-primary/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-dark/50">{post.date}</span>
                      <span className="text-dark/50">• {post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-dark/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <button className="text-primary font-semibold text-sm hover:underline">
                      Devamını Oku →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12">
              <button className="w-10 h-10 rounded-lg bg-white border border-dark/10 text-dark/50 hover:bg-primary/5 transition-colors">
                ←
              </button>
              <button className="w-10 h-10 rounded-lg bg-primary text-white font-semibold">
                1
              </button>
              <button className="w-10 h-10 rounded-lg bg-white border border-dark/10 text-dark hover:bg-primary/5 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-lg bg-white border border-dark/10 text-dark hover:bg-primary/5 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-lg bg-white border border-dark/10 text-dark/50 hover:bg-primary/5 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-dark/70 mb-6">
              E-posta bültenime abone olun, yeni içerikler hemen kutunuzda olsun
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
