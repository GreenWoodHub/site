import { type HTMLAttributes, type ElementType, forwardRef } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?:
    | "default"
    | "muted"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  weight?: "normal" | "medium" | "semibold" | "bold";
}

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const colors = {
  default: "text-secondary-600 dark:text-slate-400",
  muted: "text-secondary-500 dark:text-slate-500",
  primary: "text-primary-600 dark:text-primary-400",
  secondary: "text-secondary-700 dark:text-slate-300",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  danger: "text-red-600 dark:text-red-400",
};

const weights = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      as: Component = "p",
      size = "md",
      color = "default",
      weight = "normal",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`${sizes[size]} ${colors[color]} ${weights[weight]} ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = "Text";
