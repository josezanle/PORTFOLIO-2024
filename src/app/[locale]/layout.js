import { Catamaran } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ThemeProvider } from "@/contexts/providers/themeProvider";

const catamaran = Catamaran({ subsets: ["latin"] });

export const metadata = {
  title: 'Jose Rios',
  description: 'Web & Mobile Developer',
  robots: {
    follow: true,
    index: true
  },
  og: {
    title: 'Zanle Studio',
    type: 'blog',
    image: 'https://res.cloudinary.com/dubv6xkxf/image/upload/aeiqngwmonq0ewxwcvvi.png',
    // url: 'https://zanle.studio/',
    site_name: 'Jose Rios',
    description: 'Soy un desarrollador web y de aplicaciones nativas.',
    see_also: 'https://wa.me/+123456789',
    phone_number: '+123456789',
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  // Proporcionar todos los mensajes al lado del cliente
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Consultora de desarrollo de software" />
        <meta name="lang" content="es" />
        <meta name="author" content="Zanle Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* meta og */}
        <meta property="og:title" content="Zanle Studio" />
        <meta property="og:description" content="Somos una consultora de desarrollo de software, páginas web y aplicaciones Android" />
        <meta property="og:image" content="https://res.cloudinary.com/dubv6xkxf/image/upload/v1710119832/l1rf6z3z5zytvhdqnuen.png" />
        <meta property="og:url" content="https://zanle.studio/" />
        <meta property="og:site_name" content="Zanle Studio" />

        {/* meta twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zanlestudio" />
        <meta name="twitter:creator" content="@zanlestudio" />
      </head>

      <body className={catamaran.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}