import { dmSans, engobe } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECXOLAB",
  description:
    "ECXOLAB is a software development company focused on innovative, user-friendly solutions with an emphasis on design and scalability",
  openGraph: {
    title: "ECXOLAB: Your challengers, our solutions.",
    description:
      "ECXOLAB is a software development company focused on innovative, user-friendly solutions with an emphasis on design and scalability.",
    url: "https://www.ecxolab.com/",
    images: [
      {
        url: "https://www.ecxolab.com/meta-image.jpg",
        alt: "ECXOLAB Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ECXOLAB: Your challengers, our solutions.",
    description:
      "ECXOLAB is a software development company focused on innovative, user-friendly solutions with an emphasis on design and scalability.",
    images: ["https://www.ecxolab.com/meta-image.jpg"],
  },
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
