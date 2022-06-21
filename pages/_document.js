import Document,{Html,Head,Main,NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components';
import c from './../Constants';
import colors from './../colors';

export default class CustomDocument extends Document{
    static getInitialProps(context){
        const sheet = new ServerStyleSheet();
        const page = context.renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags, host: context.req ? context.req.host ? context.req.host : '' : '' };
    }
    render(){
        return (
            <Html lang='en'>
                <Head>
                    <link rel="dns-prefetch" href="//fonts.googleapis.com"/>
                    <link rel="dns-prefetch" href="//www.googletagmanager.com"/>
                    <link rel="dns-prefetch" href="//www.google-analytics.com"/>
                    <link rel="dns-prefetch" href="//www.google-adservices.com"/>
                    <link rel="dns-prefetch" href="//www.google.com"/>
                    <link rel="dns-prefetch" href="//www.google.co.in"/>
                    <link rel="dns-prefetch" href="//schema.org"/>
                    <link rel="dns-prefetch" href="//www.youtube.com"/>
                    <link rel="dns-prefetch" href="//www.linkedin.com"/>
                    <link rel="dns-prefetch" href="//twitter.com"/>
                    <link rel="dns-prefetch" href="//stripe.com"/>
                    <link rel="dns-prefetch" href="//use.fontawesome.com"/>
                    <link rel="dns-prefetch" href="//www.instagram.com"/>
                    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="shortcut icon" href="/images/favicon.png"/>
                </Head>
                <body>
                    {this.props.styleTags}
                    <Main/>
                    <NextScript/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                </body>
            </Html>
        );
    }
}