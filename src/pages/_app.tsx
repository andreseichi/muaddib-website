import type { AppProps } from "next/app";
import { Inter as FontSans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className={cn("font-sans", fontSans.variable)}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
