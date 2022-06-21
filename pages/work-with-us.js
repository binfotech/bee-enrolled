import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/work-with-us/Main';

class WorkWithUs extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Work With Us</title>
                    <meta name="description" content="Work With Us" />
                    <meta name="keywords" content="Work With Us"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Work With Us" />
                    <meta property="og:description" content="Work With Us" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/work-with-us`} />
                </Head>
                <Layout>
                    <Main/>
                </Layout>
            </React.Fragment>
        );
    }
}
export default WorkWithUs;