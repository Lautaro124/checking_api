import { type NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['en', 'es']
export const defaultLocale = 'es'

function getLocale(request: Request): string {
  const headers = new Headers(request.headers)
  const acceptLanguage = headers.get('accept-language')
  if (acceptLanguage != null) {
    headers.set('accept-language', acceptLanguage.replaceAll('_', '-'))
  }

  const headersObject = Object.fromEntries(headers.entries())
  const languages = new Negotiator({ headers: headersObject }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request)
  const pathname = request.nextUrl.pathname
  if (locales.includes(pathname.split('/')[1])) {
    return NextResponse.next()
  }

  const newUrl = new URL(`/${locale}/${pathname}`, request.nextUrl)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)'
    // Optional: only run on root (/) URL
    // '/'
  ]
}
