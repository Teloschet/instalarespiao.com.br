import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
    localePrefix: 'never',
  })
  const response = handleI18nRouting(request)

  return response
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}