import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Main from './../components/forgot/Main';

class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Forgot Password</title>
                    <meta name="description" content="Forgot" />
                    <meta name="keywords" content="Forgot"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Forgot" />
                    <meta property="og:description" content="Forgot" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/forgot`} />
                </Head>
                <Main />
            </React.Fragment>
        );
    }
}
export default ForgotPassword;