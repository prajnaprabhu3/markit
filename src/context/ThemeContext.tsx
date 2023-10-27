"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export default function ThemeContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class">
      {/* <ThemeSwitcher /> */}
      {children}
    </ThemeProvider>
  );
}
