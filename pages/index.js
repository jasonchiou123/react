import Head from 'next/head'
import Link from 'next/link'
/*
import GlobalHook  from './class/GlobalHook'
import WebSocket from './class/WebSocket'
import Chat from './class/Chat'
import I18n from './class/I18n'
*/

function HomePage() {
/*
    <GlobalHook>
    <I18n>
    <WebSocket />
    <Chat />
    </I18n>
    </GlobalHook>
*/
    return (
     <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p><Link href="/about?a=1&b=我"><a>here</a></Link></p>

  </div>
   )
}
  
  export default HomePage
  