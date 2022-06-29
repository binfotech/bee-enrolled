import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from './../../colors';
import fonts from './../../fonts';
import c from './../../Constants';
import FlexContainer from './../styled/FlexContainer';
import Wrapper from './../styled/Wrapper';
import Anchor from './../styled/Anchor';
import Button from './../styled/Button';

const NavWrapper = styled.div`
    padding:0 20px;
    box-sizing:border-box;
    box-shadow: 0px 0px 20px #00000014;
`;
const Container = styled.div`
    max-width:1440px;
    height:100%;
    padding:10px 0;
    margin:0 auto;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    justify-content:space-between;
`;
const Logo = styled.a`
    width:200px;
    @media(max-width:767px){
        width:auto;
    }
`;
const LogoImage = styled.img`
    @media(max-width:767px){
        width:200px;
        height:auto;
    }
`;
const Navigation = styled.div`
    padding:10px 0;
    box-sizing:border-box;
    @media(max-width: 767px){
        position:absolute;
        display:none;
        left:0;
        right:0;
        top:calc(100% - 10px);
        background:${colors.whiteF6};
        text-align:left;
        padding:20px;
        box-shadow:0px 4px 4px rgba(0,0,0,0.25);
        border-radius:0;
        z-index:1;
        &.show{display:block;}
    }
`;
const FlexNavigation = styled(FlexContainer)`
    column-gap:30px;
    align-items:center;
    @media(max-width:889px){
        column-gap:15px;
    }
    @media(max-width:767px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 15px;
    }
`;
const NavLink = styled(Anchor)`
    z-index:1;
    cursor: pointer;
    line-height:40px;
    font-size:16px;
    font-weight:600;
    font-family: ${fonts.noah};
    color: ${colors.txtColor};
    :hover{
        color: ${colors.txtColor};
        text-decoration: none;
    }
    :active{
        color: ${colors.txtColor};
        text-decoration: none;
    }
    :focus{
        color: ${colors.txtColor};
        text-decoration: none;
    }
    @media(max-width:889px){
        font-size:14px;
    }
    @media(max-width: 767px){
        display:flex;
        line-height:25px;
        font-size:16px;
    }
`;
const Signup = styled(Anchor)`
    z-index:1;
    cursor: pointer;
    font-size:16px;
    font-weight:600;
    padding: 12px 25px;
    border-radius: 25px;
    font-family: ${fonts.noah};
    background: ${colors.primary};
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    & svg{
        stroke:${colors.white};
    }
    :hover{
        color: ${colors.white};
        text-decoration: none;
    }
    :active{
        color: ${colors.white};
        text-decoration: none;
    }
    :focus{
        color: ${colors.white};
        text-decoration: none;
    }
    @media(max-width:889px){
        font-size:14px;
    }
    @media(max-width: 767px){
        display:flex;
        line-height:25px;
        font-size:16px;
    }
`;
const MobileMenu = styled.button`
    display:none;
    padding:0;
    margin:0;
    background:transparent;
    border:none;
    @media(max-width:767px){
        display:flex;
    }
`;

class Navbar extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            showNavigation: true
        };
    }
    componentDidMount(){
        let showNavigation = true;
        if(window.innerWidth < 768){
            showNavigation = false;
        }
        this.setState({showNavigation});
        window.addEventListener('resize',this.resizeListener);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.resizeListener,false);
    }
    toggleMenu = () => this.setState({showNavigation:!this.state.showNavigation});

    resizeListener = () => {
        const width = window.innerWidth;
        if(width < 768){
            this.setState({showNavigation:false})
        }else if(width >= 768){
            this.setState({showNavigation:true})
        }
    }
    render(){
        return (
            <NavWrapper>
                <Container>
                    <Logo href={c.BASE_URL}>
                        <LogoImage src='/images/logo.svg' height='55' alt='Bee-Enrolled'/>
                    </Logo>
                    <MobileMenu type="button" onClick={this.toggleMenu}>
                        <svg width="40" height="40" viewBox="0 0 20 16" fill="none"><rect width="20.0002" height="2.6667" fill={colors.primary}/><rect y="6.66699" width="20.0002" height="2.6667" fill={colors.primary}/><rect y="13.333" width="20.0002" height="2.6667" fill={colors.primary}/></svg>
                    </MobileMenu>
                    <Navigation className={(this.state.showNavigation) ? 'show' : 'hide' }>
                        <FlexNavigation items="center" justify="center">
                            <NavLink href={`${c.BASE_URL}`}>Teachers</NavLink>
                            <NavLink href={`${c.BASE_URL}`}>Tutors</NavLink>
                            <NavLink href={`${c.BASE_URL}/help`}>Help</NavLink>
                            <NavLink href={`${c.BASE_URL}/login`}>Login</NavLink>
                            <Signup href={`${c.BASE_URL}/signup`}>
                                <span>Join Us</span>
                                <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none"  stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>          
                            </Signup>
                        </FlexNavigation>
                    </Navigation>
                </Container>
            </NavWrapper>
        )
    }
}
export default Navbar;