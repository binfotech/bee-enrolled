import React from 'react';
import Form from './Form';
import Navbar from '../navbar/Navbar';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    column-gap:40px;

    & .banner{
        display:flex;
        flex-direction:column;
        flex:1;
        & img{
            max-width:100%;
            object-fit:cover;
        }
    }
    & .bi-form-wrap{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        flex:1;
        box-sizing:border-box;
    }

    @media(max-width:767px){
        flex-direction:column;
        row-gap:20px;
    }
`;

const Main = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <div className="banner">
                    <img src="/images/login.jpg" alt=""/>
                </div>
                <div className="bi-form-wrap">
                    <Form/>
                </div>
            </Container>
        </>
    );
};
export default Main;