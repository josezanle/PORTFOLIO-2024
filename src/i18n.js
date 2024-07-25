import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({locale}) => {
    // read from `cookies()`, `headers()`, etc.

    if(!locales.includes(locale)) notFound()

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});