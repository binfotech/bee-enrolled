import React from 'react';
import styled from 'styled-components';
import c from './../../Constants';
import Banner from './Banner';
import Classes from './Classes';
import Promotions from './Promotions';
import Teachers from './Teachers';
import Skills from './Skills';
import Testimonial from './../Testimonial';
import BottomSection from './../BottomSection';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobile: false
        };
    }
    componentDidMount(){
        const width = window.innerWidth;
        if(width < 768){
            this.setState({mobile: true})
        }
        window.addEventListener('resize',this.onResize);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.onResize,false);
    }
    onResize = () => {
        const width = window.innerWidth;
        if(width <= 768 && !this.state.mobile){
            this.setState({mobile:true});
        }else if(width > 768 && this.state.mobile){
            this.setState({mobile:false});
        }
    }
    render(){
        return (
            <>
                <Banner/>
                <Classes/>
                <Promotions/>
                <Testimonial/>
                <Teachers/>
                <Skills/>
                <BottomSection/>
            </>
        );
    }
}
export default Main;