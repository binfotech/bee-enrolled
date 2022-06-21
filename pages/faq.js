import React from 'react';
import Head from 'next/head';
import c from './../Constants';
import Layout from './../components/Layout';
import Main from './../components/faq/Main';

class Faq extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            faqs: [
                {
                    id:1,
                    title: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio. Nulla lacinia aliquet ipsum, at egestas augue euismod vitae. Mauris in orci et elit ultricies tincidunt. Vivamus sed ultrices ligula. Nam vitae nulla ultricies, pretium nibh in, pretium libero. Phasellus a sapien tristique, rutrum odio id, molestie ex. Aenean faucibus blandit sodales. Integer non scelerisque neque, a dignissim quam.'
                },
                {
                    id:2,
                    title: 'Pellentesque ex ex, varius sit amet iaculis eu, suscipit id ligula.',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio. Nulla lacinia aliquet ipsum, at egestas augue euismod vitae. Mauris in orci et elit ultricies tincidunt. Vivamus sed ultrices ligula. Nam vitae nulla ultricies, pretium nibh in, pretium libero. Phasellus a sapien tristique, rutrum odio id, molestie ex. Aenean faucibus blandit sodales. Integer non scelerisque neque, a dignissim quam.'
                },
                {
                    id:3,
                    title: 'Aenean vulputate semper risus, a rutrum lectus placerat ut. Nulla mattis diam sed arcu vulputate rutrum.',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio. Nulla lacinia aliquet ipsum, at egestas augue euismod vitae. Mauris in orci et elit ultricies tincidunt. Vivamus sed ultrices ligula. Nam vitae nulla ultricies, pretium nibh in, pretium libero. Phasellus a sapien tristique, rutrum odio id, molestie ex. Aenean faucibus blandit sodales. Integer non scelerisque neque, a dignissim quam.'
                },
                {
                    id:4,
                    title: 'Nulla lacinia aliquet ipsum, at egestas augue euismod vitae. Mauris in orci et elit ultricies tincidunt. Vivamus sed ultrices ligula.',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio. Nulla lacinia aliquet ipsum, at egestas augue euismod vitae. Mauris in orci et elit ultricies tincidunt. Vivamus sed ultrices ligula. Nam vitae nulla ultricies, pretium nibh in, pretium libero. Phasellus a sapien tristique, rutrum odio id, molestie ex. Aenean faucibus blandit sodales. Integer non scelerisque neque, a dignissim quam.'
                },
                {
                    id:5,
                    title: 'Morbi iaculis odio mi, in volutpat sapien accumsan id.',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio. Nulla lacinia aliquet ipsum, at egestas augue euismod vitae. Mauris in orci et elit ultricies tincidunt. Vivamus sed ultrices ligula. Nam vitae nulla ultricies, pretium nibh in, pretium libero. Phasellus a sapien tristique, rutrum odio id, molestie ex. Aenean faucibus blandit sodales. Integer non scelerisque neque, a dignissim quam.'
                }
            ]
        }
    }
    render(){
        return (
            <React.Fragment>
                <Head>
                    <meta charset="utf-8" />
                    <title>Faq</title>
                    <meta name="description" content="Faq" />
                    <meta name="keywords" content="Faq"/>
                    <meta name="author" content="Bee Enrolled" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Faq" />
                    <meta property="og:description" content="Faq" />
                    <meta property="og:url" content={c.BASE_URL} />
                    <meta property="og:site_name" content="Bee Enrolled" />
                    <meta property="og:image" content={`${c.BASE_URL}/images/logo.png`} />
                    <link rel="canonical" href={`${c.BASE_URL}/faq`} />
                </Head>
                <Layout>
                    <Main faqs={this.state.faqs}/>
                </Layout>
            </React.Fragment>
        );
    }
}
export default Faq;