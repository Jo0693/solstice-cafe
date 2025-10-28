import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Solstice Café - Artisan Coffee in Canggu, Bali",
  description: "Experience exceptional artisan coffee in the heart of Canggu. Solstice Café brings together Balinese tradition with modern specialty coffee techniques.",
  keywords: ["coffee", "café", "Canggu", "Bali", "artisan coffee", "specialty coffee", "coffeeshop"],
  authors: [{ name: "Got You Website" }],
  openGraph: {
    title: "Solstice Café - Artisan Coffee in Canggu, Bali",
    description: "Experience exceptional artisan coffee in the heart of Canggu",
    type: "website",
    locale: "en_US",
    siteName: "Solstice Café",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
