import '../styles/globals.css'; // global styling
import HeaderComponent from '../components/layout/header';   //common all over pages
import FooterComponent from '../components/layout/footer';  //common all over pages
function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent></HeaderComponent>
        <Component {...pageProps} />
      <FooterComponent></FooterComponent>
    </>
  )
}

export default MyApp
