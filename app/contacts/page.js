// SEO metadata for the contacts page
export const metadata = {
  title: "Контакти - Ketaring.bg | Свържете се с нас",
  description: "Свържете се с екипа на Ketaring.bg. Станете наш партньор-ресторант или получете повече информация за нашите кетъринг услуги в България.",
  keywords: "контакти, Ketaring.bg, свържете се, партньор ресторант, кетъринг услуги, България, информация",
  author: "Ketaring.bg",
  robots: "index, follow",
  openGraph: {
    title: "Контакти - Ketaring.bg | Свържете се с нас",
    description: "Свържете се с екипа на Ketaring.bg за партньорство или повече информация за кетъринг услуги.",
    type: "website",
    url: "https://ketaring.bg/contacts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакти - Ketaring.bg",
    description: "Свържете се с екипа на Ketaring.bg за партньорство или повече информация.",
  },
  alternates: {
    canonical: "https://ketaring.bg/contacts",
  },
};

import Link from 'next/link';
import ContactForm from './ContactForm'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Имейл",
    value: "info@ketaring.bg",
    link: "mailto:info@ketaring.bg"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Локация",
    value: "София, България",
    link: null
  }
];

export default function ContactsPage() {
  // JSON-LD structured data for the contacts page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Контакти - Ketaring.bg",
    "description": "Свържете се с екипа на Ketaring.bg за партньорство или повече информация",
    "url": "https://ketaring.bg/contacts",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ketaring.bg",
      "email": "info@ketaring.bg",
      "telephone": "+359888888888",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "София",
        "addressCountry": "Bulgaria"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 bg-gradient-to-r from-orange-50 to-orange-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Свържете се с <span className="text-orange-600">нас</span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Станете наш партньор-ресторант или получете повече информация за нашите услуги
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-orange-600">Свържете се с нас</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Готови сме да ви помогнем
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Интересувате се да станете ресторант-партньор? Имате въпроси за нашите услуги? 
                Свържете се с нас и ще ви отговорим възможно най-скоро.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-8">Информация за контакт</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-600 text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{item.title}</p>
                        {item.link ? (
                          <Link
                            href={item.link} 
                            className="text-lg text-orange-600 hover:text-orange-700 transition-colors"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <p className="text-lg text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 