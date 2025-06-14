import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';
import Image from 'next/image';

// SEO metadata for better search engine optimization
export const metadata = {
  title: 'Блог - Ketaring.bg | Експертни статии за кетъринг',
  description: 'Открийте нашите най-нови статии за кетъринг услуги, ресторантьорски бизнес, храна за събития и стратегии за растеж. Експертни съвети за успешен кетъринг бизнес в България.',
  keywords: 'блог, кетъринг, ресторанти, храна за събития, кетъринг услуги, България, бизнес съвети, ресторантьорски бизнес',
  author: 'Ketaring.bg Team',
  robots: 'index, follow',
  openGraph: {
    title: 'Блог - Ketaring.bg | Експертни статии за кетъринг',
    description: 'Открийте нашите най-нови статии за кетъринг услуги, ресторантьорски бизнес и стратегии за растеж.',
    type: 'website',
    url: 'https://ketaring.bg/blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Ketaring.bg блог за кетъринг услуги',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог - Ketaring.bg | Експертни статии за кетъринг',
    description: 'Открийте нашите най-нови статии за кетъринг услуги и ресторантьорски бизнес.',
  },
  alternates: {
    canonical: 'https://ketaring.bg/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ketaring.bg Блог - Експертни статии за кетъринг",
    "description": "Открийте нашите най-нови статии за кетъринг услуги, ресторантьорски бизнес, храна за събития и стратегии за растеж.",
    "url": "https://ketaring.bg/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Ketaring.bg",
      "logo": "/logo.png"
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role
      },
      "datePublished": post.datetime,
      "dateModified": post.datetime,
      "image": post.imageUrl,
      "url": `https://ketaring.bg${post.href}`,
      "genre": post.category.title,
      "publisher": {
        "@type": "Organization",
        "name": "Ketaring.bg"
      }
    }))
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
                Нашият <span className="text-orange-600">блог</span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-600">
                Експертни съвети и стратегии за успешен кетъринг бизнес в България
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {posts.length > 0 ? (
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <article key={post.id} className="flex flex-col items-start justify-between group">
                    <div className="relative w-full">
                      <Image
                        width={384}
                        height={256}
                        alt={post.title}
                        src={post.imageUrl}
                        className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                          {post.date}
                        </time>
                        <span className="relative z-10 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-600 hover:bg-orange-100 transition-colors">
                          {post.category.title}
                        </span>
                      </div>
                      <div className="group relative">
                        <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          <Link href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h2>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <Image
                          width={40}
                          height={40}
                          alt={post.author.name} 
                          src={post.author.imageUrl} 
                          className="size-10 rounded-full bg-gray-100" 
                        />
                        <div className="text-sm/6">
                          <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto max-w-md">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Все още няма публикувани статии</h3>
                  <p className="mt-2 text-gray-500">
                    Скоро ще публикуваме експертни статии за кетъринг услуги и ресторантьорски бизнес.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contacts"
                      className="inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
                    >
                      Свържете се с нас
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        {posts.length > 0 && (
          <section className="bg-orange-600">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Готови да започнете?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-200">
                  Присъединете се към нашата мрежа от ресторанти-партньори и разширете вашия кетъринг бизнес.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/contacts"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                  >
                    Станете партньор
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-white hover:text-orange-200 transition-colors">
                    Научете повече <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
  