import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/privacy-policy/Main';

class PrivacyPolicy extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>PrivacyPolicy</title>
                    <meta name="description" content="PrivacyPolicy" />
                    <meta name="keywords" content="PrivacyPolicy"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="PrivacyPolicy" />
                    <meta property="og:description" content="PrivacyPolicy" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`}/>
                    <link rel="canonical" href={`${c.BASE_URL}/privacy-policy`} />
                </Head>
                <Layout>
                    <Main/>
                </Layout>
            </React.Fragment>
        );
    }
}
export default PrivacyPolicy;