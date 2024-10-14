import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const arima = localFont({
  src: "./fonts/arima-font.ttf",
  variable: "--font-arima",
});

export const metadata: Metadata = {
  title: "BarbeX - Hair Salon",
  description: "A Hair salon for the people who love their hairs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${arima.variable}`}>{children}</body>
    </html>
  );
}
