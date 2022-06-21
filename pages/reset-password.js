import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import c from './../Constants';
import Main from './../components/reset-password/Main';

class ResetPassword extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8"/>
                    <title>ResetPassword</title>
                    <meta name="description" content="ResetPassword"/>
                    <meta name="keywords" content="ResetPassword"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="ResetPassword"/>
                    <meta property="og:description" content="ResetPassword"/>
                    <meta property="og:site_name" content="Bee Enrolled"/>
                    <meta property='og:image' content={`${c.BASE_URL}/images/logo.png`}/>
                    <link rel="canonical" href={`${c.BASE_URL}/reset`} />
                </Head>
                <Main token={this.props.token}/>
            </React.Fragment>
        );
    }
}
export async function getServerSideProps(context){
    const res = context.res;
    const req = context.req;
    const token  = context.query.token
    try{
        let response = await axios.get(`${c.BASE_URL}/web/reset-password-token`,{params:{token:token}});
    }catch(e){
        if(e.response.status == 401){
            res.writeHead(301,{location:'/not-found'});
            res.end();
            return;
        }
    }
    return {
        props: {token:token}
    }
}
export default ResetPassword