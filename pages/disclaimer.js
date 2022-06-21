import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/disclaimer/Main';

class Disclaimer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Disclaimer</title>
                    <meta name="description" content="Disclaimer" />
                    <meta name="keywords" content="Disclaimer"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Disclaimer" />
                    <meta property="og:description" content="Disclaimer" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/disclaimer`} />
                </Head>
                <Layout>
                    <Main/>
                </Layout>
            </React.Fragment>
        );
    }
}
export default Disclaimer;