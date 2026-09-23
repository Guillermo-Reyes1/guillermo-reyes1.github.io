import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-28 sm:px-8 sm:py-36">
      <p className="font-mono text-sm text-accent-text">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg-strong sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-lg text-muted">
        The link may be old, or the URL may have a typo.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-btn px-5 text-sm font-semibold text-btn-fg transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
