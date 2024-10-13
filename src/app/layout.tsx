import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const arimaMaduraiSolid = localFont({
  src: "./fonts/fa-solid-900.woff2",
  variable: "--font-arima-madurai-solid",
  weight: "900",
});
const arimaMaduraiRegular = localFont({
  src: "./fonts/fa-regular-400.woff2",
  variable: "--font-arima-madurai-regular",
  weight: "400",
});
const arimaMaduraiLight = localFont({
  src: "./fonts/fa-light-300.woff2",
  variable: "--font-arima-madurai-light",
  weight: "300",
});
const arimaMaduraiBrand = localFont({
  src: "./fonts/fa-brands-400.woff2",
  variable: "--font-arima-madurai-brand",
  weight: "400",
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
      <body
        className={`${arimaMaduraiSolid.variable} ${arimaMaduraiRegular.variable} ${arimaMaduraiLight.variable} ${arimaMaduraiBrand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
