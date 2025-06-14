import Image from "next/image";
import Link from "next/link";

// SEO metadata for the homepage
export const metadata = {
  title: "Ketaring.bg - Професионални кетъринг услуги в България",
  description: "Нов начин да откриете качествени кетъринг услуги в България. Свързваме ресторанти с клиенти за безпроблемно кетъринг изживяване.",
  keywords: "кетъринг, ресторанти, храна за събития, кетъринг услуги, кетъринг България, доставка на храна, храна за партита, бизнес кетъринг, храна за сватби",
  author: "Ketaring.bg",
  robots: "index, follow",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketaring.bg - Професионални кетъринг услуги",
    description: "Свързваме ресторанти с клиенти за безпроблемно кетъринг изживяване в България",
  },
  alternates: {
    canonical: "https://ketaring.bg",
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Разширете обхвата си",
    description: "Свържете се с нови клиенти, които търсят качествени кетъринг услуги за своите събития."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Оптимизирани поръчки",
    description: "Получавайте и управлявайте кетъринг поръчки чрез нашата лесна за използване платформа."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Развийте бизнеса си",
    description: "Увеличете приходите си, като се възползвате от растящия пазар на кетъринг за събития."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Персонализирана подкрепа",
    description: "Присъединете се към нашата мрежа от ресторанти-партньори с персонализирано въвеждане и подкрепа."
  }
];

export default function HomePage() {
  // JSON-LD structured data for the homepage
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ketaring.bg",
    "url": "https://ketaring.bg",
    "logo": "https://img.icons8.com/color/48/000000/restaurant-menu.png",
    "description": "Платформа за кетъринг услуги, свързваща ресторанти с клиенти в България",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BG"
    },
    "email": "info@ketaring.bg",
    "offers": {
      "@type": "Offer",
      "description": "Кетъринг услуги за всякакви събития в България"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Нов начин за откриване на{' '}
                <span className="text-orange-600">качествени кетъринг услуги</span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Свързваме ресторанти с клиенти за безпроблемно кетъринг изживяване в България
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contacts"
                  className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
                >
                  Станете партньор
                </Link>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600 transition-colors">
                  Научете повече <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 sm:py-32 bg-white" id="about">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">За Ketaring.bg</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Революционизираме кетъринг услугите в България
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ketaring.bg революционизира начина, по който клиентите се свързват с кетъринг услуги в цяла България. 
                Нашата платформа улеснява клиентите да открият и поръчат качествена храна за събития от всякакъв мащаб, 
                като същевременно помага на ресторантите да разширят своя обхват в кетъринг бизнеса.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 sm:py-32 bg-gray-50" id="benefits">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">Предимства</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ключови предимства за вашия бизнес
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Открийте как Ketaring.bg може да помогне на вашия ресторант да разшири обхвата си и да увеличи приходите.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-orange-600 text-white">
                        {benefit.icon}
                      </div>
                      {benefit.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{benefit.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Готови да започнете?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-200">
                Присъединете се към нашата мрежа от ресторанти-партньори и разширете вашия бизнес още днес.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contacts"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Станете партньор
                </Link>
                <Link href="/blog" className="text-sm font-semibold leading-6 text-white hover:text-orange-200 transition-colors">
                  Прочетете нашия блог <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
