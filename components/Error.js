import React from 'react';
import styled from 'styled-components';
import Text from './styled/Text';
import colors from './../colors';
import fonts from './../fonts';

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Error = () => (
    <Container>
        <Text size='21px' color='red'>oops! something went wrong.</Text>
    </Container>
);
export default Error;