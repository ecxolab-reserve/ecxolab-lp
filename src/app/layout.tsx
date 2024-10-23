import { dmSans, engobe } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECXOLAB",
  description: "Your challengers, our solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${engobe.variable} ${dmSans.className} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
