import React from 'react';
import styled from 'styled-components';
import c from './../../Constants';
import colors from "./../../colors";
import fonts from './../../fonts';
import FlexContainer from './../styled/FlexContainer';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;
const Breadcrumbs = styled.div`
    display:flex;
    flex-direction:column;
    background-image:url('/images/contact-banner.jpg');
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
const Container = styled.div`
    max-width:${c.width};
    width:100%;
    margin:0 auto;
    padding:40px 20px;
`;
const Para = styled.p`
    margin:0 0 20px;
    color:${colors.textColor};
    font-family:${fonts.openSans}, sans-serif;
    font-size:16px;
    line-height:28px;
`;
const Main = () => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <h1>Privacy Policy</h1>
            </Breadcrumbs>
            <Container>
                <FlexContainer direction='column'>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Para>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Para>
                    <Para>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Para>
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}
export default Main;