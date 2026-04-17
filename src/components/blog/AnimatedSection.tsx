interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

// Renders children as-is (server-safe, always visible).
// For animated version, import with client:load in MDX.
export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return <div>{children}</div>;
}
