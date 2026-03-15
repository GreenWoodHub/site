import { type HTMLAttributes, type ElementType, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  as?: ElementType;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md";
}

const variants = {
  default: "bg-secondary-100 text-secondary-700",
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-200 text-secondary-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
};

const sizes = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3.5 py-1 text-sm",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      as: Component = "span",
      variant = "default",
      size = "md",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`inline-flex items-center font-semibold rounded-full ${variants[variant]} ${sizes[size]} ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Badge.displayName = "Badge";
