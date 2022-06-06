import I18n from 'react-native-i18n';
import {en, fr, zh_Hans, es, de} from '../locales';

// Pour utiliser en comme code de locale par défaut
I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  zh: zh_Hans,
  es_ES: es,
  de,
};

export function translate(name: string, params?: any) {
  return I18n.t(name, params);
}

export default I18n;
