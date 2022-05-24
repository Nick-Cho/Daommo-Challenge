import "bootstrap/dist/css/bootstrap.min.css"
import '../public/assets/css/styles.css'
import Nav from "../components/Nav"
function MyApp({Component, pageProps}){

  return(
    <>
      <Nav/>
      <Component {...pageProps}/>
    </>
  )
  }

export default MyApp;