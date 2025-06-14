import Link from "next/link";

// SEO metadata for the about page
export const metadata = {
  title: "За нас - Ketaring.bg | Кетъринг платформа в България",
  description: "Ketaring.bg революционизира начина, по който клиентите се свързват с кетъринг услуги в цяла България. Научете повече за нашата мисия и визия.",
  keywords: "за нас, Ketaring.bg, кетъринг платформа, България, мисия, визия, ресторанти, партньори",
  author: "Ketaring.bg",
  robots: "index, follow",
  openGraph: {
    title: "За нас - Ketaring.bg | Кетъринг платформа в България",
    description: "Революционизираме начина, по който клиентите се свързват с кетъринг услуги в цяла България.",
    type: "website",
    url: "https://ketaring.bg/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "За нас - Ketaring.bg",
    description: "Революционизираме начина, по който клиентите се свързват с кетъринг услуги в цяла България.",
  },
  alternates: {
    canonical: "https://ketaring.bg/about",
  },
};

const team = [
  {
    name: "Георги Петров",
    role: "Основател и CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description: "С над 10 години опит в ресторантьорския бизнес, Георги води визията на Ketaring.bg."
  }
];

const values = [
  {
    title: "Качество",
    description: "Работим само с проверени ресторанти, които предоставят висококачествена храна и услуги.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Надеждност",
    description: "Гарантираме, че всяка поръчка ще бъде изпълнена в срок и с най-високо качество.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Иновации",
    description: "Постоянно развиваме нашата платформа, за да предложим най-добрите решения.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

export default function AboutPage() {
  // JSON-LD structured data for the about page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "За нас - Ketaring.bg",
    "description": "Революционизираме начина, по който клиентите се свързват с кетъринг услуги в цяла България",
    "url": "https://ketaring.bg/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ketaring.bg",
      "description": "Платформа за кетъринг услуги, свързваща ресторанти с клиенти в България",
      "foundingDate": "2024"
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
                За <span className="text-orange-600">Ketaring.bg</span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Революционизираме начина, по който клиентите се свързват с кетъринг услуги в цяла България
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">Нашата мисия</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Свързваме хората с най-добрата храна
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ketaring.bg революционизира начина, по който клиентите се свързват с кетъринг услуги в цяла България. 
                Нашата платформа улеснява клиентите да открият и поръчат качествена храна за събития от всякакъв мащаб, 
                като същевременно помага на ресторантите да разширят своя обхват в кетъринг бизнеса.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Вярваме, че всяко събитие заслужава изключителна храна и безупречно обслужване. Затова работим неуморно, 
                за да създадем платформа, която прави кетъринг услугите достъпни, надеждни и лесни за използване.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">Нашите ценности</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Принципите, които ни водят напред
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Всичко, което правим, се основава на тези фундаментални ценности.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {values.map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <dt className="flex items-center justify-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-orange-600 text-white mb-4">
                        {value.icon}
                      </div>
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="flex-auto">{value.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-orange-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Готови да се присъедините към нас?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-200">
                Станете част от нашата мрежа от ресторанти-партньори и помогнете ни да променим кетъринг индустрията в България.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contacts"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Свържете се с нас
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