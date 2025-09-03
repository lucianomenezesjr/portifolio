import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google';
import { Toaster } from 'sonner';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portifolio - Luciano Jr",
  description: "Portifolio de Luciano Jr - Desenvolvedor Full Stack",
};

const font = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={font.className}>
        {children}
        <Toaster richColors position="bottom-left" theme="dark" />
        <Footer />
      </body>
    </html>
  );
}
