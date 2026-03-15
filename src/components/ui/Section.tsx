import { type HTMLAttributes, type ElementType, forwardRef } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  background?: "white" | "secondary" | "primary" | "gradient";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const backgrounds = {
  white: "bg-white",
  secondary: "bg-secondary-50",
  primary: "bg-primary-50",
  gradient: "bg-gradient-to-br from-primary-50 to-white",
};

const paddings = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-24 lg:py-32",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      as: Component = "section",
      background = "white",
      padding = "lg",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`${backgrounds[background]} ${paddings[padding]} ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Section.displayName = "Section";
