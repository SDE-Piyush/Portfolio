import { personal } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {personal.name}. Built with Next.js & Tailwind.
        </p>
        <a
          href={personal.resumePath}
          download
          className="text-violet-400 transition hover:text-violet-300"
        >
          Download Resume PDF
        </a>
      </div>
    </footer>
  );
}
