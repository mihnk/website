/**
 * All user-facing copy lives here — never inside a component.
 *
 * Adding a locale means adding one entry to `locales` and one block to
 * `ui`; TypeScript then reports every string the new locale is missing.
 *
 * `‑` is a non-breaking hyphen: it keeps compounds like "cloud-native"
 * from splitting across lines while still reading and copying as a hyphen.
 */

export const defaultLocale = 'en' as const;

export const locales = ['en', 'tr', 'sv'] as const;

export type Locale = (typeof locales)[number];

/** Shown in the locale selector, and used for `hreflang`. */
export const localeNames: Record<Locale, string> = {
  en: 'EN',
  tr: 'TR',
  sv: 'SV',
};

/** Full IETF tags for the `lang` attribute and `og:locale`. */
export const localeTags: Record<Locale, string> = {
  en: 'en',
  tr: 'tr',
  sv: 'sv',
};

export const ui = {
  en: {
    'site.title': 'mihnk — open-source cloud-native infrastructure tools',
    'site.description':
      'Practical, vendor-neutral tooling for Kubernetes and cloud-native environments.',

    'home.headline.1.accent': 'Open-source',
    'home.headline.1.rest': ' tools',
    'home.headline.2.accent': '',
    'home.headline.2.rest': 'for cloud-native',
    'home.headline.3': 'infrastructure.',
    'home.description':
      'Practical, vendor‑neutral tooling for Kubernetes and cloud‑native environments.',

    'nav.github': 'GitHub',
    'nav.contact': 'Contact',

    'principles.label': 'Principles',
    'principles.practical.term': 'Practical',
    'principles.practical.detail': 'Built for real-world operations.',
    'principles.neutral.term': 'Vendor-neutral',
    'principles.neutral.detail': 'Portable across environments.',
    'principles.declarative.term': 'Declarative',
    'principles.declarative.detail': 'Predictable and manageable by design.',

    'notfound.title': 'Page not found — mihnk',
    'notfound.description': 'The page you requested could not be found.',
    'notfound.route': 'no route',
    'notfound.message': 'This path doesn’t lead anywhere.',
    'notfound.return': 'mihnk',

    'footer.contact': 'contact',
    'footer.security': 'security',

    'locale.label': 'Language',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
  },

  tr: {
    'site.title': 'mihnk — açık kaynaklı cloud-native altyapı araçları',
    'site.description':
      'Kubernetes ve cloud-native ortamlar için pratik, sağlayıcıdan bağımsız araçlar.',

    'home.headline.1.accent': '',
    'home.headline.1.rest': 'Cloud-native altyapı için',
    'home.headline.2.accent': 'açık kaynaklı',
    'home.headline.2.rest': '',
    'home.headline.3': 'araçlar.',
    'home.description':
      'Kubernetes ve cloud‑native ortamlar için pratik, sağlayıcıdan bağımsız araçlar.',

    'nav.github': 'GitHub',
    'nav.contact': 'İletişim',

    'principles.label': 'İlkeler',
    'principles.practical.term': 'Pratik',
    'principles.practical.detail': 'Gerçek operasyon koşulları için tasarlandı.',
    'principles.neutral.term': 'Sağlayıcıdan bağımsız',
    'principles.neutral.detail': 'Ortamlar arasında taşınabilir.',
    'principles.declarative.term': 'Bildirimsel',
    'principles.declarative.detail': 'Tasarımı gereği öngörülebilir ve yönetilebilir.',

    'notfound.title': 'Sayfa bulunamadı — mihnk',
    'notfound.description': 'İstediğiniz sayfa bulunamadı.',
    'notfound.route': 'rota yok',
    'notfound.message': 'Bu yol hiçbir yere çıkmıyor.',
    'notfound.return': 'mihnk',

    'footer.contact': 'iletişim',
    'footer.security': 'güvenlik',

    'locale.label': 'Dil',
    'theme.light': 'Açık',
    'theme.dark': 'Koyu',
  },

  sv: {
    'site.title': 'mihnk — verktyg med öppen källkod för cloud native-infrastruktur',
    'site.description':
      'Praktiska, leverantörsoberoende verktyg för Kubernetes och cloud native-miljöer.',

    'home.headline.1.accent': '',
    'home.headline.1.rest': 'Verktyg med öppen',
    'home.headline.2.accent': 'källkod',
    'home.headline.2.rest': ' för cloud',
    'home.headline.3': 'native-infrastruktur.',
    'home.description':
      'Praktiska, leverantörsoberoende verktyg för Kubernetes och cloud native‑miljöer.',

    'nav.github': 'GitHub',
    'nav.contact': 'Kontakt',

    'principles.label': 'Principer',
    'principles.practical.term': 'Praktiskt',
    'principles.practical.detail': 'Byggt för verklig drift.',
    'principles.neutral.term': 'Leverantörsoberoende',
    'principles.neutral.detail': 'Portabelt mellan miljöer.',
    'principles.declarative.term': 'Deklarativt',
    'principles.declarative.detail': 'Förutsägbart och hanterbart av design.',

    'notfound.title': 'Sidan hittades inte — mihnk',
    'notfound.description': 'Sidan du efterfrågade kunde inte hittas.',
    'notfound.route': 'ingen rutt',
    'notfound.message': 'Den här vägen leder ingenstans.',
    'notfound.return': 'mihnk',

    'footer.contact': 'kontakt',
    'footer.security': 'säkerhet',

    'locale.label': 'Språk',
    'theme.light': 'Ljust',
    'theme.dark': 'Mörkt',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLocale];
