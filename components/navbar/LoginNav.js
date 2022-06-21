import React from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "./../../colors";
import fonts from "./../../fonts";
import c from "./../../Constants";
import FlexContainer from "./../styled/FlexContainer";
import Wrapper from "./../styled/Wrapper";
import Anchor from "./../styled/Anchor";
import Button from "./../styled/Button";

const NavWrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
`;
const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  padding: 10px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Logo = styled.a`
  width: 200px;
  @media (max-width: 767px) {
    width: auto;
  }
`;
const LogoImage = styled.img`
  @media (max-width: 767px) {
    width: 200px;
    height: auto;
  }
`;
const Navigation = styled.div`
  padding: 10px 0;
  box-sizing: border-box;
  @media (max-width: 767px) {
    position: absolute;
    display: none;
    left: 0;
    right: 0;
    top: calc(100% - 10px);
    background: ${colors.whiteF6};
    text-align: left;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0;
    z-index: 1;
    &.show {
      display: block;
    }
  }
`;
const FlexNavigation = styled(FlexContainer)`
  column-gap: 30px;
  align-items: center;
  @media (max-width: 889px) {
    column-gap: 15px;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
  }
`;
const NavLink = styled(Anchor)`
  z-index: 1;
  cursor: pointer;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.txtColor};
  :hover {
    color: ${colors.txtColor};
    text-decoration: none;
  }
  :active {
    color: ${colors.txtColor};
    text-decoration: none;
  }
  :focus {
    color: ${colors.txtColor};
    text-decoration: none;
  }
  @media (max-width: 889px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    display: flex;
    line-height: 25px;
    font-size: 16px;
  }
`;
const Signup = styled(Anchor)`
  z-index: 1;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 25px;
  border-radius: 25px;
  background: ${colors.primary};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  & svg {
    stroke: ${colors.white};
  }
  :hover {
    color: ${colors.white};
    text-decoration: none;
  }
  :active {
    color: ${colors.white};
    text-decoration: none;
  }
  :focus {
    color: ${colors.white};
    text-decoration: none;
  }
  @media (max-width: 889px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    display: flex;
    line-height: 25px;
    font-size: 16px;
  }
`;
const MobileMenu = styled.button`
  display: none;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showNavigation: true,
    };
  }
  componentDidMount() {
    let showNavigation = true;
    if (window.innerWidth < 768) {
      showNavigation = false;
    }
    this.setState({ showNavigation });
    window.addEventListener("resize", this.resizeListener);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeListener, false);
  }
  toggleMenu = () =>
    this.setState({ showNavigation: !this.state.showNavigation });

  resizeListener = () => {
    const width = window.innerWidth;
    if (width < 768) {
      this.setState({ showNavigation: false });
    } else if (width >= 768) {
      this.setState({ showNavigation: true });
    }
  };
  render() {
    return (
      <NavWrapper>
        <Container>
          <Logo href={c.BASE_URL}>
            <LogoImage src="/images/logo.svg" height="55" alt="Bee-Enrolled" />
          </Logo>
          <MobileMenu type="button" onClick={this.toggleMenu}>
            <svg width="40" height="40" viewBox="0 0 20 16" fill="none">
              <rect width="20.0002" height="2.6667" fill={colors.primary} />
              <rect
                y="6.66699"
                width="20.0002"
                height="2.6667"
                fill={colors.primary}
              />
              <rect
                y="13.333"
                width="20.0002"
                height="2.6667"
                fill={colors.primary}
              />
            </svg>
          </MobileMenu>
          <Navigation className={this.state.showNavigation ? "show" : "hide"}>
            <FlexNavigation items="center" justify="center">
              <NavLink href={`${c.BASE_URL}`}>
                <svg width="16.098" height="16.099" viewBox="0 0 16.098 16.099">
                  <path
                    d="M15.825,14.386l-3.116-3.117a7.046,7.046,0,1,0-1.42,1.42l3.117,3.117a1,1,0,1,0,1.419-1.419Zm-8.731-2.3a5.014,5.014,0,1,1,5.014-5.014A5.014,5.014,0,0,1,7.094,12.087Z"
                    transform="translate(0 0)"
                  />
                </svg>
                <span>Find Classes</span>
              </NavLink>
              <NavLink href={`${c.BASE_URL}/help`}>
                <svg width="16.25" height="16.25" viewBox="0 0 16.25 16.25">
                  <path d="M8.125,0A8.125,8.125,0,1,0,16.25,8.125,8.125,8.125,0,0,0,8.125,0Zm0,14.219a6.094,6.094,0,1,1,6.094-6.094A6.094,6.094,0,0,1,8.125,14.219Z" />
                  <circle
                    cx="1.016"
                    cy="1.016"
                    r="1.016"
                    transform="translate(7.113 10.833)"
                  />
                  <path
                    d="M11.142,4.965A2.878,2.878,0,0,0,7.757,7.8a1.016,1.016,0,0,0,2.031,0,.845.845,0,1,1,1.251.745,2.25,2.25,0,0,0-1.38,2.138,1.016,1.016,0,0,0,2.031,0,.862.862,0,0,1,.011-.148,1.254,1.254,0,0,1,.319-.212,2.876,2.876,0,0,0-.875-5.349Z"
                    transform="translate(-2.505 -1.589)"
                  />
                </svg>
                <span>Help</span>
              </NavLink>
              <NavLink href={`${c.BASE_URL}/signin`}>
                <svg width="16.048" height="16.048" viewBox="0 0 16.048 16.048">
                  <path
                    d="M3.017,10.909h7.648l-1.8,1.8,1.418,1.419,2.8-2.8a2.006,2.006,0,0,0,0-2.837L10.278,5.679,8.859,7.1,10.664,8.9H3.017Z"
                    transform="translate(-1 -1.882)"
                  />
                  <path
                    d="M13.708,0H2.34A2.359,2.359,0,0,0,0,2.375V5.283H2.006V2.375a.352.352,0,0,1,.334-.369H13.708a.352.352,0,0,1,.334.366v11.3a.352.352,0,0,1-.334.366H2.34a.352.352,0,0,1-.334-.366V10.766H0v2.91a2.359,2.359,0,0,0,2.34,2.372H13.708a2.359,2.359,0,0,0,2.34-2.375V2.375A2.359,2.359,0,0,0,13.708,0Z"
                    transform="translate(0)"
                  />
                </svg>
                <span>Login</span>
              </NavLink>
              <Signup href={`${c.BASE_URL}/signup`}>
                <span>Join Us</span>
                <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917">
                  <g transform="translate(-1438.971 -1655.477)">
                    <path
                      d="M630,777.424l7.237,6.881L630,791.513"
                      transform="translate(820.538 879.467)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="bevel"
                      stroke-width="2"
                    />
                    <line
                      x2="17.22"
                      transform="translate(1439.971 1663.936)"
                      fill="none"
                      stroke-linecap="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </Signup>
            </FlexNavigation>
          </Navigation>
        </Container>
      </NavWrapper>
    );
  }
}
export default Navbar;
