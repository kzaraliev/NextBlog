import Link from "next/link";

const navigation = {
    main: [
      { name: 'За нас', href: '/about' },
      { name: 'Блог', href: '/blog' },
      { name: 'Контакти', href: '/contacts' },
      { name: 'Партньори', href: '/contacts' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/konstantin-zaraliev-9826a4262/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img
                  alt="Ketaring.bg"
                  src="https://img.icons8.com/color/48/000000/restaurant-menu.png"
                  className="h-8 w-auto mr-2"
                />
                <span className="text-xl font-bold text-orange-400">Ketaring.bg</span>
              </div>
              <p className="text-gray-300 mb-4">
                Нов начин за откриване на качествени кетъринг услуги в България
              </p>
              <div className="flex gap-x-6">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name} 
                    href={item.href} 
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <item.icon aria-hidden="true" className="size-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Свържете се с нас</h4>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@ketaring.bg
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400">Бързи връзки</h4>
              <nav className="space-y-3">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Ketaring.bg. Всички права запазени.
              </p>
              <p className="text-gray-500 text-xs text-center md:text-right">
                Кетъринг услуги в България | Храна за събития | Ресторанти за кетъринг | Храна за фирмени събития | Кетъринг за сватби
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  