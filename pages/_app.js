import '/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return(
        <>
            <Head>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="/styles/globals.css"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
