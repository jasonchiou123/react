import Head from 'next/head'
import Link from 'next/link'
import Provider  from './class/myContext'
import WSclient from './class/WebSocket'
import Chat from './class/Chat'
import I18n from './class/I18n'

function HomePage() {
 
    return (
     <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p><Link href="/about?a=1&b=我"><a>here</a></Link></p>
    
   <Provider>
   <I18n>
   <WSclient server="ws://localhost:88" />
   <Chat />
  </I18n>
  </Provider>
     </div>
   )
}
  
  export default HomePage
  