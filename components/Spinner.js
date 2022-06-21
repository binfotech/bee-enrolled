import React from 'react';
import colors from './../colors';
import CenterContainer from './styled/CenterContainer';
import Icon from './styled/Icon';

const Spinner = () => (
    <CenterContainer>
        <Icon className='fas fa-cog fa-spin fa-2x' color={colors.text}/>
    </CenterContainer>
)
export default Spinner;