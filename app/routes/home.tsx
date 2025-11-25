import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hatice Gül - Psikolog" },
    {
      name: "description",
      content: "Psikolog Hatice Gül - Web sitemiz çok yakında yayında!",
    },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)] p-4 font-[family-name:var(--font-nunito)]">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img
            src="/logo.png"
            alt="Hatice Gül Logo"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] tracking-wide">
            Hatice Gül
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-[var(--foreground)] opacity-90">
            Psikolog
          </h2>
        </div>

        <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full my-8 opacity-80"></div>

        <p className="text-xl md:text-2xl font-medium text-[var(--foreground)] opacity-80 max-w-md mx-auto leading-relaxed">
          Web sitemiz çok yakında yayında!
        </p>
      </div>
    </div>
  );
}
