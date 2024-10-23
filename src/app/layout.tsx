import { dmSans, engobe } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'ECXOLAB',
  description: 'Your challengers, our solutions.',
  openGraph: {
    title: 'ECXOLAB',
    description: 'Your challengers, our solutions.',
    url: 'https://www.ecxolab.com/',
    images: [
      {
        url: 'https://www.ecxolab.com/meta-image.jpg',
        alt: 'Imagem representando nossa empresa'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ECXOLAB',
    description: 'Your challengers, our solutions.',
    images: ['https://www.ecxolab.com/meta-image.jpg']
  }
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
