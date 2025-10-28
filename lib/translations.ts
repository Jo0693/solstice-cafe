import enCommon from '@/locales/en/common.json';
import frCommon from '@/locales/fr/common.json';

export type Locale = 'en' | 'fr';

export const translations = {
  en: enCommon,
  fr: frCommon,
};

export type TranslationKeys = keyof typeof enCommon;
