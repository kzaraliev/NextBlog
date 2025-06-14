import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import Header from "./_components/header";
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ketaring.bg - Професионални кетъринг услуги в България",
  description: "Нов начин да откриете качествени кетъринг услуги в България. Свързваме ресторанти с клиенти за безпроблемно кетъринг изживяване.",
  keywords: "кетъринг, ресторанти, храна за събития, кетъринг услуги, кетъринг България, доставка на храна, храна за партита, бизнес кетъринг",
  author: "Ketaring.bg",
  robots: "index, follow",
  language: "Bulgarian",
  openGraph: {
    title: "Ketaring.bg - Професионални кетъринг услуги в България",
    description: "Свързваме ресторанти с клиенти за безпроблемно кетъринг изживяване. Разширете вашия бизнес с Ketaring.bg!",
    type: "website",
    url: "https://ketaring.bg",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ketaring.bg - Професионални кетъринг услуги",
      },
    ],
    siteName: "Ketaring.bg",
    locale: "bg_BG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketaring.bg - Професионални кетъринг услуги",
    description: "Свързваме ресторанти с клиенти за безпроблемно кетъринг изживяване в България",
    images: ["https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://ketaring.bg",
  },
  icons: {
    icon: "https://img.icons8.com/color/48/000000/restaurant-menu.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ketaring.bg",
              "description": "Водещата платформа за кетъринг услуги в България. Свързваме ресторанти и клиенти за незабравими кулинарни преживявания.",
              "url": "https://ketaring.bg",
              "logo": "https://img.icons8.com/color/48/000000/restaurant-menu.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+359-888-123-456",
                "contactType": "customer service",
                "email": "info@ketaring.bg"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BG",
                "addressLocality": "София"
              },
              "sameAs": [
                "https://www.facebook.com/ketaringbg",
                "https://www.instagram.com/ketaringbg",
                "https://www.linkedin.com/company/ketaringbg"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#FF5733" height={3} showSpinner={false} />
        <Header />
        {children}
        <Footer />
        
        {/* EmailJS Script */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        />
      </body>
    </html>
  );
}
