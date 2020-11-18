import QRCode  from 'qrcode.react'
import Barcode   from 'react-barcode'
function About() {
    return (<div><div>About測試</div>
    <img src="ayame.jpg"  />
    <QRCode value="http://facebook.github.io/react/" />
    <Barcode value="http://github.com/kciter" />
    </div>)
  }
  
  export default About
  