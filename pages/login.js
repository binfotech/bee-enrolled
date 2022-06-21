import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Main from '../components/login/Main';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Sign In</title>
                    <meta name="description" content="SignIn"/>
                    <meta name="keywords" content="SignIn"/>
                    <meta name="author" content="Bee Enrolled"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="SignIn"/>
                    <meta property="og:description" content="SignIn"/>
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled"/>
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`}/>
                    <link rel="canonical" href={`${c.BASE_URL}/signin`}/>
                </Head>
                <Main />
            </React.Fragment>
        );
    }
}
export default Login;