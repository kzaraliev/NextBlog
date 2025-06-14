import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import { notFound } from 'next/navigation';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Статията не е намерена - Ketaring.bg',
      description: 'Заявената блог статия не може да бъде намерена.'
    };
  }

  return {
    title: `${post.title} | Ketaring.bg Блог`,
    description: post.description,
    keywords: `${post.category.title}, ${post.title}, кетъринг, блог, ${post.author.name}, Ketaring.bg, ресторанти, храна за събития`,
    author: post.author.name,
    robots: 'index, follow',
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://ketaring.bg/blog/${post.slug}`,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      authors: [post.author.name],
      publishedTime: post.datetime,
      modifiedTime: post.datetime,
      section: post.category.title,
      siteName: 'Ketaring.bg',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
      creator: `@ketaringbg`,
      site: '@ketaringbg',
    },
    alternates: {
      canonical: `https://ketaring.bg/blog/${post.slug}`,
    },
  };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.imageUrl,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ketaring.bg',
      logo: {
        '@type': 'ImageObject',
        url: 'https://img.icons8.com/color/48/000000/restaurant-menu.png'
      }
    },
    datePublished: post.datetime,
    dateModified: post.datetime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ketaring.bg/blog/${post.slug}`,
    },
    genre: post.category.title,
    wordCount: post.content.split(' ').length,
    url: `https://ketaring.bg/blog/${post.slug}`,
    inLanguage: 'bg-BG',
    about: {
      '@type': 'Thing',
      name: 'Кетъринг услуги'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          
          {/* Breadcrumb for SEO */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">Начало</Link>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <Link href="/blog" className="hover:text-orange-600 transition-colors">Блог</Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Category */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-700/10">
              {post.category.title}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {post.title}
          </h1>

          {/* Meta information */}
          <div className="mt-6 flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-500">
              {post.date}
            </time>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">
              {Math.ceil(post.content.split(' ').length / 200)} мин четене
            </span>
          </div>

          {/* Author */}
          <div className="mt-6 flex items-center gap-x-4">
            <img
              alt={post.author.name}
              src={post.author.imageUrl}
              className="size-12 rounded-full bg-gray-50"
            />
            <div className="text-sm/6">
              <p className="font-semibold text-gray-900">{post.author.name}</p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-10 mb-10">
            <img
              alt={post.title}
              src={post.imageUrl}
              className="aspect-video w-full rounded-2xl bg-gray-100 object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <img
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Автор: {post.author.name}</p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Back to blog link */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-x-2 text-sm font-semibold text-orange-600 hover:text-orange-800 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Назад към всички статии
            </Link>
          </div>
        </div>
      </article>

      {/* Related CTA Section */}
      <section className="bg-orange-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Харесва ли ви статията?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-200">
              Присъединете се към нашата мрежа от ресторанти-партньори и получавайте още експертни съвети за кетъринг бизнеса.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contacts"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Станете партньор
              </Link>
              <Link href="/blog" className="text-sm font-semibold leading-6 text-white hover:text-orange-200 transition-colors">
                Още статии <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
