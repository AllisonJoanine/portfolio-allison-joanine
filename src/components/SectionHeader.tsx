import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, children, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
