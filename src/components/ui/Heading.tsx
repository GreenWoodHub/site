import { type HTMLAttributes, forwardRef } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  font?: "sans" | "display" | "mono";
}

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl sm:text-4xl",
  "4xl": "text-4xl sm:text-5xl",
  "5xl": "text-5xl sm:text-6xl lg:text-7xl",
};

const fonts = {
  sans: "font-sans",
  display: "font-display",
  mono: "font-mono",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      as: Component = "h2",
      size = "3xl",
      font = "display",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`font-bold text-secondary-900 ${sizes[size]} ${fonts[font]} ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";
