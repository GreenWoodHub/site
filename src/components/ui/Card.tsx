import { type HTMLAttributes, type ElementType, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  variant?: "default" | "outline" | "elevated" | "ghost";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const variants = {
  default: "bg-white border border-secondary-100",
  outline: "bg-transparent border-2 border-secondary-200",
  elevated: "bg-white shadow-lg",
  ghost: "bg-transparent",
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      as: Component = "div",
      variant = "default",
      padding = "md",
      hover = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`rounded-2xl ${variants[variant]} ${paddings[padding]} ${
          hover
            ? "transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
            : ""
        } ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Card.displayName = "Card";
