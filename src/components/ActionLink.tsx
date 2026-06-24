import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  code: string;
  icon?: ReactNode;
  variant?: "solid" | "line";
};

export function ActionLink({ children, className = "", code, icon, variant = "line", ...props }: ActionLinkProps) {
  return (
    <a className={`craft-button craft-button-${variant} ${className}`.trim()} {...props}>
      <span className="craft-button__code">{code}</span>
      <span className="craft-button__label">{children}</span>
      {icon ? <span className="craft-button__mark">{icon}</span> : null}
    </a>
  );
}
