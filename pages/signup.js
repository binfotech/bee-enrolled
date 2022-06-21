import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Main from '../components/signup/Main';

class Signup extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Sign Up</title>
                    <meta name="description" content="SignUp"/>
                    <meta name="keywords" content="SignUp"/>
                    <meta name="author" content="Bee Enrolled"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="SignUp"/>
                    <meta property="og:description" content="SignUp"/>
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled"/>
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`}/>
                    <link rel="canonical" href={`${c.BASE_URL}/signup`}/>
                </Head>
                <Main />
            </React.Fragment>
        );
    }
}
export default Signup;