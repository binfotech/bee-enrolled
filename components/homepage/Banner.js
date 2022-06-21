import React from "react";
import styled from "styled-components";
import colors from "./../../colors";
import fonts from './../../fonts';
import c from "./../../Constants";
import FlexContainer from "../styled/FlexContainer";

const Wrapper = styled.div`
    padding:0 20px;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 750px;
    background-image: url("/images/banner.jpg");
    background-repeat: no-repeat;
    background-position: center;
`;
const Container = styled.div`
    max-width: ${c.width};
    width:100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const H1 = styled.h1`
    font-size: 24px;
    line-height: 26px;
    font-family:${fonts.anni};
    font-weight:normal;
    color: ${colors.txtColor};
    & span{
        line-height:95px;
        font-size: 67px;
        color:${colors.primary};
    }
`;
const SubHeading = styled.div`
    font-size:38px;
    line-height:45px;
    font-weight:600;
    margin: 0 0 20px;
    font-family:${fonts.noah};
    color: ${colors.txtColor};
`;
const Para = styled.p`
    font-size: 20px;
    line-height:26px;
    font-weight:600;
    margin: 0 0 30px;
    color:${colors.txtColor};
    font-family:${fonts.noah};
`;
const BrowseButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    cursor: pointer;
    font-family:${fonts.noah};
    font-weight:600;
    font-size:20px;
    line-height:27px;
    padding: 10px 30px;
    border-radius: 30px;
    border: 1px solid ${colors.primary};
    background: ${colors.primary};
    color: ${colors.white};
    & svg{
        stroke:${colors.white};
    }
    :hover {
        border-color: ${colors.descColor};
        background: ${colors.descColor};
        color: ${colors.white};
    }
`;
const JoinUsButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    cursor: pointer;
    font-family:${fonts.noah};
    font-weight:600;
    font-size:20px;
    line-height:27px;
    padding: 10px 30px;
    border-radius: 30px;
    border: 1px solid ${colors.descColor};
    background: ${colors.descColor};
    color: ${colors.white};
    & svg{
        stroke:${colors.white};
    }
    :hover {
        border-color: ${colors.primary};
        background: ${colors.primary};
        color: ${colors.white};
    }
`;

const Banner = (props) => {
    return (
        <Wrapper>
            <Container>
                <H1>WELCOME TO <br/><span>BeeEnrolled!</span></H1>
                <SubHeading>Come learn with us!</SubHeading>
                <Para>Helping children reach higher, seek further, and shine brighter.</Para>
                <FlexContainer direction="row" columnGap="20px">
                    <BrowseButton>
                        <span>Browse Classes</span>
                        <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>
                    </BrowseButton>
                    <JoinUsButton>
                        <span>Join Us</span>
                        <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>
                    </JoinUsButton>
                </FlexContainer>
            </Container>
        </Wrapper>
    );
};
export default Banner;