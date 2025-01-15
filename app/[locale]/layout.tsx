import type { Metadata } from "next";
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import './globals.css'

export const metadata: Metadata = {
  title: "Instalarespiao.com.br",
  description: "Instalarespiao.com.br",
};

const locales = ['en', 'pt']

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  if (!locales.includes(locale)) notFound()
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
