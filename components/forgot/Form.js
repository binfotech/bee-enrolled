import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from './../../colors';
import fonts from './../../fonts';
import InputT from './../styled/Input';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const ForgotForm = styled.form`
    background: ${colors.white};
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    align-items:center;
`;
const H1 = styled.h1`
    font-size: 42px;
    line-height: 50px;
    color: ${colors.primary};
    text-align: center;
    font-weight:normal;
    font-family:${fonts.anni};
    margin-bottom:15px;
`;
const Para = styled.p`
    text-align:center;
    color:${colors.textColor};
    font-size: 20px;
    line-height: 28px;
    font-family: ${fonts.noah};
    font-weight:600;
    margin: 0 0 25px;
`;
const Input = styled(InputT)`
    width: calc(100% - 30px);
    padding: 0 25px;
    height: 58px;
    font-size: 16px;
    margin-bottom:25px;
    border: 1px solid ${colors.input};
    background: ${colors.white};
    border-radius: 31px;
`;
const Button = styled.button`
    width: 100%;
    padding: 13px 25px;
    font-size: 16px;
    line-height:22px;
    border: none;
    color:${colors.white};
    background: ${colors.primary};
    border-radius: 50px;
    font-weight:600;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    & svg{
        stroke:${colors.white};
    }
`;

class ForgotFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            submitting: false
        };
    }
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value,msg: ''});
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.submitting){
            return;
        }
        if(!this.validate()){
            return;
        }
        this.setState({submitting: true},this.submit);
    }
    validate = () => {
        if(!this.state.email || !this.state.email.trim()){
            MySwal.fire({
                html: 'Please enter your email',
                icon: 'error',
                confirmButtonColor: colors.primary
            });
            return false;
        }
        const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRE.test(this.state.email)){
            MySwal.fire({
                html: 'Please enter a valid email',
                icon: 'error',
                confirmButtonColor: colors.primary
            });
            return false;
        }
        return true;
    }
    submit = async() => {
        try{
            const response = await axios.post('/web/forgot-password',{email: this.state.email});
            this.setState({submitting:false,email:''});
            if(response.status === 200){
                MySwal.fire({
                    html: response.data.message,
                    icon: 'success',
                    confirmButtonColor: colors.primary
                });
            }
        }catch(e){
            this.setState({submitting: false});
            let error = 'Sorry Something went wrong';
            if(e.response && e.response.data.message){
                error = e.response.data.message;
            }
            MySwal.fire({
                html: error,
                icon: 'error',
                confirmButtonColor: colors.primary
            });
        }
    }
    render(){
        return (
            <ForgotForm onSubmit={this.onSubmit}>
                <H1>Forgot Password</H1>
                <Para>Enter the email address associated with you account.</Para>
                <Input name='email' onChange={this.onChange} placeholder='Enter Email' value={this.state.email}/>
                <Button type='submit'>
                    <span>Reset Password</span>
                    <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none"  stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>
                </Button>
            </ForgotForm>
        );
    }
}
export default ForgotFormContainer;