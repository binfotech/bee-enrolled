import React from 'react';
import Head from 'next/head'
import axios from 'axios';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/homepage/Main';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render(){ 
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>HomePage</title>
                    <meta name="description" content="HomePage" />
                    <meta name="keywords" content="HomePage"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="HomePage" />
                    <meta property="og:description" content="HomePage" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}`} />
                </Head>
                <Layout>
                    <Main/>
                </Layout>
            </React.Fragment>
        );
    }
}
export default HomePage;