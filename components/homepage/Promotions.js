import React from "react";
import styled from "styled-components";
import c from "./../../Constants";
import colors from "./../../colors";
import fonts from './../../fonts';

const PromotionWrap = styled.div`
    display: flex;
    padding: 40px 20px 140px;
    flex-direction: column;
    background: ${colors.white};
    & .container {
        max-width: ${c.width};
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
`;
const PromotionDiv = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${colors.promoBg};
    border-radius: 25px 25px 0 0;
    align-items: center;
    padding: 40px 48px;
    position: relative;
    column-gap: 20px;
    & .left {
        flex: 1;
        display: flex;
        flex-direction: column;
        & h2 {
            font-size: 38px;
            line-height: 52px;
            font-weight:normal;
            font-family: ${fonts.anni};
            margin: 0 0 20px;
            color: ${colors.white};
        }
        & p {
            font-size: 16px;
            line-height: 26px;
            margin: 0;
            font-weight: 600;
            font-family: ${fonts.noah};
            color: ${colors.white};
        }
    }
    & button {
        cursor: pointer;
        font-size: 20px;
        line-height:27px;
        font-weight: 600;
        font-family: ${fonts.noah};
        padding: 12px 25px;
        border-radius: 25px;
        background: ${colors.white};
        color: ${colors.primary};
        box-shadow: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 15px;
        & svg{
            stroke:${colors.primary};
        }
    }
    &:after {
        position: absolute;
        content: "";
        background-image: url("/images/Mask.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        left: 0;
        right: 0;
        top: 100%;
        width: 100%;
        height: 90px;
    }
`;
const Promotions = () => {
    return (
        <PromotionWrap>
            <div className="container">
                <PromotionDiv>
                    <div className="left">
                        <h2>Quisque sollicitudin est quis tortor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mollis mauris, eu semper erat. Maecenas euismod justo suscipit. Suspendisse vitae mollis mauris, eu semper erat.</p>
                    </div>
                    <button>
                        <span>CONTACT US</span>
                        <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>
                    </button>
                </PromotionDiv>
            </div>
        </PromotionWrap>
    );
};
export default Promotions;