import React,{ useState } from 'react';
import { IntlProvider,addLocaleData,FormattedMessage } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData([...en, ...zh]);
import en_US from './class/en.js';
import zh_TW from './class/zh.js';

function I18n() {
    //預設用browser語系:
    const [locale, setLocale] = useState(navigator.language);
    let messages;
    // 根據使用者選擇的語系 locale 切換使用不同的 messages
    if (locale.includes('zh')) {
      messages = zh_TW;
    } else {
      messages = en_US;
    }

	return (
    <IntlProvider key={locale} locale={locale} messages={messages}>
    <FormattedMessage id="app.learn" />
        <button onClick={() => setLocale('en')}>英文</button>
        <button onClick={() => setLocale('zh')}>中文</button>      
    {this.props.children}
    </IntlProvider>
	)
}
export default I18n