import React from 'react';
import styled from 'styled-components';
import c from './../../Constants';
import Text from './../styled/Text';
import FlexContainer from './../styled/FlexContainer';
const Container = styled.div`
    max-width:${c.width};width:100%;margin:0 auto;padding:40px 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:280px;
`;
const FlexItem = styled.div`
    flex:1;
`;
const NotFound = () => {
    return (
        <Container>
            <FlexContainer direction='column' align='center' justify='center' padding='16px'>
                <Text size='24px' margin='0 0 16px'>We are Sorry. The Page You're Looking for Can't be Found.</Text>
            </FlexContainer>
        </Container>
    )
}
export default NotFound;