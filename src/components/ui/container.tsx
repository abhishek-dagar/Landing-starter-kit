import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      {children}
    </div>
  );
} 