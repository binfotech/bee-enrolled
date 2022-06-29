import React from "react";
import styled from "styled-components";
import axios from "axios";
import colors from "./../../colors";
import fonts from './../../fonts';
import c from "./../../Constants";
import Text from "./../styled/Text";
import Icon from "./../styled/Icon";
import FlexContainer from "./../styled/FlexContainer";
import Anchor from "./../styled/Anchor";
import clock from "../../lib/clock";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    background: ${colors.footerBg};
    z-index: 9999;
`;
const FooterTopContainer = styled.div`
    max-width: ${c.width};
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:row;
    column-gap:60px;
    padding: 80px 20px;
`;
const FooterInfoElements = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
    & p{
        color: ${colors.white};
        font-size: 14px;
        line-height:24px;
        font-family:${fonts.noah};
        margin:20px 0;
    }
    & ul.social-media{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
        align-items:center;
        column-gap:15px;
        & li{display:flex;
            & a{
                display:flex;
                width:40px;
                height:40px;
                align-items:center;
                justify-content:center;
                border-radius:20px;
                font-size:16px;
                color: ${colors.social};
                border: 1px solid ${colors.social};
                & i{color: ${colors.social};}
                &:hover{
                    color: ${colors.primary};
                    border-color: ${colors.primary};
                    & i{color: ${colors.primary};}
                }

            }
        }
    }
`;
const FooterLinkElements = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
    & h5{
        color: ${colors.white};
        font-size: 22px;
        line-height:28px;
        margin:0 0 25px;
        font-weight: 600;
        font-family: ${fonts.noah};
    }
    & ul{
        list-style:none;
        margin:0;
        padding:0;
        display:flex;
        flex-direction:column;
        & li{display:flex;
            & a{
                display:flex;
                align-items:center;
                font-size:18px;
                line-height:35px;
                font-family:${fonts.noah};
                color:${colors.white};
                &:hover{
                    color:${colors.primary};
                }

            }
        }
    }
`;
const FooterContactElements = styled.div`
    display:flex;
    flex-direction:column;
    flex: 1;
    & h5{
        color: ${colors.white};
        font-size: 22px;
        line-height:28px;
        margin:0 0 25px;
        font-weight: 600;
        font-family: ${fonts.noah};
    }
    & p{
        color: ${colors.white};
        font-size: 18px;
        line-height:22px;
        margin:0 0 15px;
        display:flex;
        column-gap:10px;
        align-items:center;
        font-family:${fonts.noah};
        & i{color: ${colors.primary};}
    }
`;
const FooterBottom = styled.div`
    width: 100%;
    padding: 20px 0 15px;
    border-top:1px solid #373E43;
`;
const FooterBottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:${fonts.noah};
    color:${colors.social};
    font-size:14px;
`;
class Footer extends React.Component {
    render() {
        return (
            <FooterContainer>
                <FooterTopContainer>
                    <FooterInfoElements>
                        <img src="/images/logo.svg" alt="BeeEnrolled"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mollis mauris, eu semper erat. Maecenas euismod justo suscipit, tempus eros sit amet, condimentum lectus. Vestibulum ornare sed sapien porttitor lacinia.</p>
                        <ul className="social-media">
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </FooterInfoElements>
                    <FooterLinkElements>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <a href={`${c.BASE_URL}/about-us`}>About Us</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/contact-us`}>Contact Us</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/faq`}>Faq's</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/why-choose-us`}>Why Choose Us</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/work-with-us`}>Work With Us</a>
                            </li>
                            <li>
                                <a href="#">Explore Classes</a>
                            </li>
                        </ul>
                    </FooterLinkElements>
                    <FooterLinkElements>
                        <h5>Support</h5>
                        <ul>
                            <li>
                                <a href={`${c.BASE_URL}/help`}>Help</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/safety`}>Safety</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/privacy-policy`}>Privacy Policy</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/terms-conditions`}>Terms and Conditions</a>
                            </li>
                            <li>
                                <a href={`${c.BASE_URL}/disclaimer`}>Disclamers</a>
                            </li>
                        </ul>
                    </FooterLinkElements>
                    <FooterContactElements>
                        <h5>Contact Us</h5>
                        <p className="address"><i className="fas fa-map-marker-alt"></i>361 Forest Road Louisville, KY 40207</p>
                        <p className="phone"><i className="fas fa-phone"></i>(987)456-1230</p>
                        <p className="email"><i className="fas fa-envelope"></i>info@beeenrolled.com</p>
                    </FooterContactElements>
                </FooterTopContainer>        
                <FooterBottom>
                    <FooterBottomContainer>© 2022 Bee Enrolled. All Rights Reserved.</FooterBottomContainer>
                </FooterBottom>
            </FooterContainer>
        );
    }
}
export default Footer;
