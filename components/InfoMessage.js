import styled from 'styled-components';
import Text from './styled/Text';
import colors from './../colors';
import fonts from './../fonts';

const InfoMessage = styled(Text)`
    display: ${props => props.show ? 'display' : 'none'};
    color: ${props => props.success ? 'green' : 'red'};
    text-align: center;
`;
export default InfoMessage;