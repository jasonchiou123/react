import Head from 'next/head'
import Link from 'next/link'
import { Origin,Horoscope  } from "circular-natal-horoscope-js"
function HomePage() {
 
  const origin = new Origin({
    year: 2020,
    month: 11, // 0 = January, 11 = December!
    date: 1,
    hour: 16,
    minute: 30,
    latitude: 40.00,
    longitude: -70.00
  });

  const customOrbs = {
    conjunction: 8,
    opposition: 8,
    trine: 8,
    square: 7,
    sextile: 6,
    quincunx: 5,
    quintile: 1,
    septile: 1,
    "semi-square": 1,
    "semi-sextile": 1,
  };

  const horoscope = new Horoscope({
    origin: origin,
    houseSystem: "whole-sign",
    zodiac: "tropical",
    aspectPoints: ['bodies', 'points', 'angles'],
    aspectWithPoints: ['bodies', 'points', 'angles'],
    aspectTypes: ["major", "minor"],
    customOrbs: customOrbs,
    language: 'en'
  });

  var star =horoscope.CelestialBodies.sun.label;
  //var pp=horoscope.CelestialPoints.northnode;
 
  //console.log("Hurray! You have drawn your horoscope.", drawn);

    return (
     <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p><Link href="/about?a=1&b=我"><a>here</a></Link></p>
    star= {star} !!
    <svg id="horoscope"></svg>
  </div>
   )
}
  
  export default HomePage
  