// import { Montserrat } from "next/font/google";
import { Raleway, Playfair } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ThemeProvider } from "@/contexts/providers/themeProvider";

// const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const playfair = Playfair({ subsets: ["latin"] });

export const metadata = {
  title: "Jose Rios",
  description: "",
  robots: {
    follow: true,
    index: true
  },
};

export default async function RootLayout({ children, params: { locale } }) {
  // Proporcionar todos los mensajes al lado del cliente
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${raleway.className} ${playfair.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}