import React from 'react';
import styled from 'styled-components';
import colors from './../colors';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    background: ${colors.black};
    opacity: 0.8;
`;

const Backdrop = (props) => {
    return props.show ? <Wrapper onClick={() => props.close()} /> : null;
}

export default Backdrop;