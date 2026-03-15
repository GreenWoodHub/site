import { type HTMLAttributes, type ElementType, forwardRef } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-xl",
  full: "max-w-full",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, as: Component = "div", size = "lg", children, ...props },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={`mx-auto px-4 sm:px-6 lg:px-8 ${containerSizes[size]} ${className || ""}`}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Container.displayName = "Container";
