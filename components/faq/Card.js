import React from 'react'
import styled from 'styled-components'
import colors from './../../colors'
import fonts from './../../fonts';
import Text from './../styled/Text'
import Icon from './../styled/Icon'
import FlexContainer from './../styled/FlexContainer'

const CardWrap = styled.div`
    margin-bottom:15px;
    border-radius:10px;
    background:${colors.white};
    box-shadow: 0px 0px 20px ${colors.shadow};
    display:flex;
    flex:1;
    flex-direction:column;

    & .header{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        column-gap:20px;
        padding:20px;
        cursor:pointer;
        font-family:${fonts.openSans};
        font-weight:600;
    }
    & .description{
        display:none;
        padding:0 30px 30px;
        line-height:28px;
    }
    &.active .description{
        display:block;
    }

`;
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeCard: null
        }
    }
    toggleCard = (cardId) => {
        console.log(cardId);
        if(this.state.activeCard === cardId){
            this.setState({activeCard: null});
        }else{
            this.setState({activeCard: cardId});
        }
    }
    render() {
        return (
            <CardWrap key={this.props.cardId} className={`${((this.props.cardId === this.state.activeCard) ? 'active' : '')}`}>
                <div className="header" onClick={() => this.toggleCard(this.props.cardId)}>
                    <h4>Q. {this.props.question}</h4>
                    {(this.props.cardId === this.state.activeCard) ?
                        <Icon className="fas fa-minus-circle"/>
                        :
                        <Icon className="fas fa-plus-circle"/>
                    }
                </div>
                <div class="description" dangerouslySetInnerHTML={{__html: this.props.answer}}/>
            </CardWrap>
        )
    }
}

export default Card