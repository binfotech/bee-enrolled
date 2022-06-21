import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/about-us/Main';

class AboutUs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>AboutUs</title>
                    <meta name="description" content="AboutUs" />
                    <meta name="keywords" content="AboutUs"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="AboutUs" />
                    <meta property="og:description" content="AboutUs" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/about-us`} />
                </Head>
                <Layout>
                    <Main />
                </Layout>
            </React.Fragment>
        );
    }
}
export default AboutUs;