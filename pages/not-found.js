import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import NotFound_ from './../components/not-found';

class NotFound extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <title>Page Not Found</title>
                </Head>
                <Layout>
                    <NotFound_ />
                </Layout>
            </React.Fragment>
        );
    }
}
export default NotFound;