import styled from 'styled-components';
import colors from './../../colors';
import fonts from './../../fonts';

const Wrapper = styled.header`
    width: ${props => props.width || '100%'};
    position: ${props => props.position || 'relative'};
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    background: ${props => props.background || colors.white};
    z-index: ${props => props.zIndex || '10'};
    @media(max-width:767px){
        position: relative;
    }
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    box-shadow: ${props => props.shadow || '0px 0px 7px 3px '+colors.shadow};
`;

export default Wrapper;