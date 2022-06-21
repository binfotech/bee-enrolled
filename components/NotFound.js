import React from 'react';
import styled from 'styled-components';
import Text from './styled/Text';
import colors from './../colors';
import fonts from './../fonts';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    min-height: calc(100vh - 302px);
    margin-top: 105px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 768px) {
        margin-top: 0;
    }
`;
const NotFound = () => {
    return (
        <Container>
            <Text size='24px'>404 | Not found.</Text>
        </Container>
    )
}
export default NotFound;