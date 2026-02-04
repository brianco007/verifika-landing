import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verifika - Control de Asistencia con GPS y Prueba Fotográfica",
  description: "Control de asistencia en tiempo real con prueba fotográfica y ubicación GPS. Sin mentiras, sin excusas, sin pérdidas. Verifica que tus empleados estén donde dicen estar.",
  keywords: ["control de asistencia", "GPS", "prueba fotográfica", "gestión de empleados", "verificación de ubicación", "tiempo real"],
  authors: [{ name: "FreireTech" }],
  openGraph: {
    title: "Verifika - Control de Asistencia con GPS",
    description: "Control de asistencia en tiempo real con prueba fotográfica y ubicación GPS. Sin mentiras, sin excusas, sin pérdidas.",
    url: "https://verifika-landing.vercel.app/",
    siteName: "Verifika",
    images: [
      {
        url: "/images/screenshot1.jpeg",
        width: 1200,
        height: 630,
        alt: "Dashboard de control de asistencia Verifika",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verifika - Control de Asistencia con GPS",
    description: "Control de asistencia en tiempo real con prueba fotográfica y ubicación GPS.",
    images: ["/images/screenshot1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/verifika-logo.webp",
    apple: "/images/verifika-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
