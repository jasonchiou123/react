import React,{ useState,useEffect } from 'react';
import { IntlProvider,FormattedMessage  } from 'react-intl';
import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/locale-data/en'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/en' 

import en_US from './en';
import zh_TW from './zh';

import { Button  } from 'react-native';

function I18n(props) {
  
    //預設用browser語系: navigator.language
    const [locale, setLocale] = useState('en');
    // 根據使用者選擇的語系 locale 切換使用不同的 messages
    let messages = {}
messages['en'] = en_US;
messages['zh'] = zh_TW;
 
	return (
    <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
    <FormattedMessage  id="app.learn" />
        <Button title='英文' onPress={() =>setLocale('en')} />
        <Button title='中文' onPress={() =>setLocale('zh')} />      
    {props.children}
    </IntlProvider>
	)
}
export default I18n