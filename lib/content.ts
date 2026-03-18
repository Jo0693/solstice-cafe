import homeData from '../content/home.json';
import homeSeo from '../seo/home.seo.json';

export type Locale = 'fr' | 'en';

type ContentMap = Record<string, Record<Locale, unknown>>;
type SeoMap = Record<string, Record<Locale, { title: string; description: string; keywords: string }>>;

const content: ContentMap = {
  home: homeData as unknown as Record<Locale, unknown>,
};

const seo: SeoMap = {
  home: homeSeo as unknown as Record<Locale, { title: string; description: string; keywords: string }>,
};

export function getContent<T = Record<string, unknown>>(page: string, locale: Locale): T {
  const pageData = content[page];
  if (!pageData) throw new Error(`Content not found for page: ${page}`);
  return pageData[locale] as T;
}

export function getSeo(page: string, locale: Locale) {
  const pageData = seo[page];
  if (!pageData) throw new Error(`SEO not found for page: ${page}`);
  return pageData[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  return 'fr';
}
