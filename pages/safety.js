import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/safety/Main';

class Safety extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Safety</title>
                    <meta name="description" content="Safety" />
                    <meta name="keywords" content="Safety"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Safety" />
                    <meta property="og:description" content="Safety" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/safety`} />
                </Head>
                <Layout>
                    <Main/>
                </Layout>
            </React.Fragment>
        );
    }
}
export default Safety;