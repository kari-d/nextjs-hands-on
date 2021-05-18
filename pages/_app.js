import '../styles/global.css'

//React HOC
//use _app.js for using Global Styles
export default function App({Component, pageProps}) {
    return <Component {...pageProps} />
}