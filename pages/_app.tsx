import '../styles/global.css'
import { AppProps } from 'next/app'

//React HOC
//use _app.js for using Global Styles
export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}