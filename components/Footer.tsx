import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
