import { AppProps } from 'next/app';
import Nav from '../components/Nav'
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    );
}