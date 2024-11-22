import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as Localization from 'react-native-localize';

import en from './dictionaries/en';
import es from './dictionaries/es';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en,
    es
};
const fallbackLanguage = 'en';
const {languageTag} = Localization.findBestLanguageTag(Object.keys({en, es})) || {};

i18n.use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        fallbackLng: fallbackLanguage,
        lng: languageTag,
        interpolation: {
            escapeValue: false,
        },
    }).then();

export default i18n;
