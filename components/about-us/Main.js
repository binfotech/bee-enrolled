import React from 'react';
import styled from 'styled-components';
import c from './../../Constants';
import colors from './../../colors';
import fonts from './../../fonts';
import Text from './../styled/Text';
import FlexContainer from './../styled/FlexContainer';
import Testimonial from './../Testimonial';
import BottomSection from './../BottomSection';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;
const Breadcrumbs = styled.div`
    margin-bottom:60px;
    display:flex;
    flex-direction:column;
    background-image:url('/images/about-banner.jpg');
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
    height:350px;
    justify-content:center;
    padding:0 20px;
    position:relative;
    &:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background:#0000002e;
    }
    & h1{
        z-index:1;
        max-width: ${c.width};
        width:100%;
        color:${colors.white};
        font-family:${fonts.openSans}, sans-serif;
        font-size:60px;
        font-weight:600;
        margin: 0 auto;
    }
    @media(max-width:767px){
        height:250px;
    }
`;
const AdaptiveContainer = styled(FlexContainer)`
    padding:40px 0;
    column-gap:80px;
    box-sizing:border-box;
    align-items:center;
    @media(max-width:991px){
        flex-direction:column;
        row-gap:20px;
        margin-bottom:30px;
    }
`;
const FlexLeftTextContainer = styled(FlexContainer)`
    padding-left:20px;
    display:flex;
    flex-direction:column;
    flex:1;
    row-gap:0;
    box-sizing:border-box;
    & *{
        align-self:flex-end;
        max-width:600px;
        width:100%;
        text-align:left;
    }
`;
const FlexTextContainer = styled(FlexContainer)`
    padding-right:20px;
    display:flex;
    flex-direction:column;
    flex:1;
    row-gap:0;
    box-sizing:border-box;
    & *{max-width:600px;width:100%;}
`;
const H2 = styled.h2`
    text-align: left;
    font-size:38px;
    line-height:48px;
    font-weight:normal;
    font-family:${fonts.anni};
    margin-bottom:20px;
    color: ${colors.txtColor};
`;

const Main = () => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <h1>About Us</h1>
            </Breadcrumbs>
            <AdaptiveContainer>
                <FlexLeftTextContainer>
                    <H2>About BeeEnrolled</H2>
                    <Text size="18px" height="1.6" margin='0 0 30px' weight='600' style={{fontFamily:fonts.noah}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mollis mauris.</Text>
                    <Text size="16px" height="1.6" margin='0 0 30px' weight='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio, bibendum eget libero sed, consectetur congue risus. Nullam congue erat eu neque laoreet, et feugiat arcu vulputate. Nulla non metus purus. </Text>
                    <Text size="16px" height="1.6" margin='0 0 20px' weight='400'> Praesent tempus blandit ex, vel porttitor ex pellentesque id. Vestibulum ac ullamcorper tellus. Cras dictum est sapien, at cursus turpis porttitor a. Cras pharetra dui in nisi elementum, ac semper ligula tristique.</Text>
                </FlexLeftTextContainer>
                <FlexContainer direction='row' flex='1'>
                    <img src="/images/about-img1.png" alt=""/>
                </FlexContainer>
            </AdaptiveContainer>
            <AdaptiveContainer>
                <FlexContainer direction='row' justify="flex-end" flex='1'>
                    <img src="/images/about-img2.jpg" alt=""/>
                </FlexContainer>
                <FlexTextContainer>
                    <H2>Our Mission</H2>
                    <Text size="16px" height="1.8" margin='0 0 30px' weight='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio.</Text>
                    <H2>Our Vision</H2>
                    <Text size="16px" height="1.8" margin='0 0 30px' weight='400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis eleifend magna in faucibus. Suspendisse potenti. Curabitur facilisis luctus neque sit amet tristique. Suspendisse euismod at ex vitae consequat. Suspendisse tincidunt tortor quis consequat dapibus. Vestibulum libero odio.</Text>
                </FlexTextContainer>
            </AdaptiveContainer>
            <Testimonial/>
            <BottomSection/>
        </Wrapper>
    );
}
export default Main;