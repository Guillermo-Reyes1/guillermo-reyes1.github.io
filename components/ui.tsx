import type { ReactNode } from "react";
import type { ProjectStatus } from "@/content/types";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-line/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-10 flex items-baseline gap-3">
          <span className="font-mono text-sm text-accent-text">{index}</span>
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight text-fg-strong sm:text-3xl"
          >
            {title}
          </h2>
          <span aria-hidden className="ml-2 h-px flex-1 bg-line" />
        </div>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

const statusStyles: Record<ProjectStatus, string> = {
  Shipped: "bg-accent text-[#00223e]",
  "In progress": "border border-accent text-accent-text",
  "Spec/Design": "border border-dashed border-line text-muted",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
