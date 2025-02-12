import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const montserratAlternate = Montserrat_Alternates({
  variable: "--font-alt",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sébastien Gaudard",
  description: "Freelance Fullstack Developer specialized in modern technologies such as Next.js, React, Vue.js, and TypeScript. With expertise in both frontend and backend development, I help my clients build high-performance, scalable applications optimized for user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratAlternate.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
