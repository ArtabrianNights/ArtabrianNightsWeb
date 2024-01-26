import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/* Import Translation JSONs */
import esHome from './locales/es/home.json';
import esToolbar from './locales/es/toolbar.json';
import esAbout from './locales/es/about.json';
import esCalendar from './locales/es/calendar.json'
import esArchive from './locales/es/archive.json'
import esFallback from './locales/es/fallback.json';

import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enToolbar from './locales/en/toolbar.json';
import enCalendar from './locales/en/calendar.json'
import enArchive from './locales/en/archive.json'

import glHome from './locales/gl/home.json';
import glToolbar from './locales/gl/toolbar.json';
import glAbout from './locales/gl/about.json';
import glCalendar from './locales/gl/calendar.json'
import glArchive from './locales/gl/archive.json'


export const defaultNS = 'home';
export const fallbackNS = 'fallback';

const lngs = {
  en: {nativeName: 'English'},
  es: {nativeName: 'Español'},
  gl: {nativeName: 'Galego'},
};

/* Init i18n */
i18next
.use(Backend)
.use(LanguageDetector)
.init({
  //lng: 'es',
  //lng: i18next.options.lng,
  debug: true,
  ns: ['home', 'toolbar', 'about', 'archive'],
  //fallbackLng: ['es', 'en'],
  fallbackLng: 'es',
  defaultNS,
  fallbackNS,
  supportedLngs: ['en', 'es', 'gl'],
  nonExplicitSupportedLngs: true,
  partialBundledLanguages: true,
  preload: ['en', 'es', 'gl'],
  resources:{
    es:{
      fallback: esFallback,
      home: esHome,
      toolbar: esToolbar,
      about: esAbout,
      calendar: esCalendar,
      archive: esArchive,
    },
    en:{
      home: enHome,
      toolbar: enToolbar,
      about: enAbout,
      calendar: enCalendar,
      archive: enArchive,
    },
    gl:{
      home: glHome,
      toolbar: glToolbar,
      about: glAbout,
      calendar: glCalendar,
      archive: glArchive,
    }
  },
  backend: {
		loadPath: './locales/{{lng}}/{{ns}}.json'
	},
});

export default i18next; 