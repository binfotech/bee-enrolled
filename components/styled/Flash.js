import styled from 'styled-components';
import Text from './Text';
const Flash = styled(Text)`
    display: ${props => props.show ? 'block' : 'none'};
    font-size: 12px;
`;
export default Flash;