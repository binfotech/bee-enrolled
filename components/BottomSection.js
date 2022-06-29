import React from 'react';
import styled from 'styled-components';
import Slider from 'nuka-carousel';
import c from './../Constants';
import colors from './../colors';
import fonts from './../fonts';

const SectionWrap = styled.div`
    display:flex;
    padding:80px 20px;
    flex-direction:column;
`;
const SectionContainer = styled.div`
    max-width: ${c.width};
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    column-gap:60px;
`;
const SectionImageWrap = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    & img{
        max-width:100%;
    }
`;
const SectionElementWrap = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    row-gap:30px;
    justify-content:space-around;

`;
const BItemWrap = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    column-gap:20px;
    & img{}
    & .desc{
        display:flex;
        flex-direction:column;
        row-gap:10px;
        & strong{
            font-family:${fonts.openSans}, sans-serif;
            font-size:32px;
            line-height:28px;
            font-weight:700;
            color: ${colors.txtColor};
        }
        & span{
            font-size:20px;
            font-family:${fonts.noah};
            line-height:25px;
            font-weight:600;
            color: ${colors.txtColor};
        }
    }
`;

const BottomSection = () => {
    return (
        <SectionWrap>
            <SectionContainer>
                <SectionElementWrap>
                    <BItemWrap>
                        <img src="/images/icon1.png"/>
                        <div className="desc">
                            <strong>5,616</strong>
                            <span>Maecenas euismod justo suscipit tempus eros sit.</span>
                        </div>
                    </BItemWrap>
                    <BItemWrap>
                        <img src="/images/icon3.png"/>
                        <div className="desc">
                            <strong>7+ Million</strong>
                            <span>Maecenas euismod justo suscipit tempus eros sit.</span>
                        </div>
                    </BItemWrap>
                </SectionElementWrap>
                <SectionImageWrap>
                    <img src="/images/bottom-banner.png"/>
                </SectionImageWrap>
                <SectionElementWrap>
                    <BItemWrap>
                        <img src="/images/icon2.png"/>
                        <div className="desc">
                            <strong>6,482</strong>
                            <span>Maecenas euismod justo suscipit tempus eros sit.</span>
                        </div>
                    </BItemWrap>
                    <BItemWrap>
                        <img src="/images/icon4.png"/>
                        <div className="desc">
                            <strong>20 + Hours</strong>
                            <span>Maecenas euismod justo suscipit tempus eros sit.</span>
                        </div>
                    </BItemWrap>
                </SectionElementWrap>
            </SectionContainer>
        </SectionWrap>
    )
}
export default BottomSection;