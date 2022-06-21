import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/help/Main';

class Help extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Help</title>
                    <meta name="description" content="Help" />
                    <meta name="keywords" content="Help"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Help" />
                    <meta property="og:description" content="Help" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/help`} />
                </Head>
                <Layout>
                    <Main />
                </Layout>
            </React.Fragment>
        );
    }
}
export default Help;