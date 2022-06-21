import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from './../../colors';
import fonts from './../../fonts';
import Text from './../styled/Text';
import InputT from './../styled/Input';
import FlexContainer from './../styled/FlexContainer';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const ContactForm = styled.form`
    background: ${colors.white};
    width:50%;
    padding:40px;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    flex:1;
    box-sizing:border-box;
    @media(max-width: 767px){
        width:100%;
    }
`;
const Header = styled(Text)`
    font-size: 38px;
    font-weight: 48px;
    color: ${colors.textColor};
    text-align: left;
    font-weight:normal;
    font-family:${fonts.anni};
    margin-bottom:25px;
`;
const FormWrap = styled(FlexContainer)`
    display:flex;
    flex-direction:row;
    box-sizing:border-box;
    width: 100%;
    column-gap:30px;
`;
const Input = styled(InputT)`
    width: calc(100% - 30px);
    padding: 0 25px;
    height: 58px;
    font-family:${fonts.noah};
    font-size: 16px;
    margin-bottom:25px;
    border: 1px solid ${colors.input};
    background: ${colors.white};
    border-radius: 31px;
`;
const Flex = styled.div`
    flex: 1;
    padding: 8px;
`;
const Button = styled.button`
    font-family:${fonts.noah};
    font-size:16px;
    font-weight:600;
    padding: 12px 35px;
    border-radius: 25px;
    background: ${colors.primary};
    color: ${colors.white};
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
    & svg{
        stroke:${colors.white};
    }
    :hover{
        color: ${colors.white};
        text-decoration: none;
    }
    :active{
        color: ${colors.white};
        text-decoration: none;
    }
    :focus{
        color: ${colors.white};
        text-decoration: none;
    }
    @media(max-width:889px){
        font-size:14px;
    }
    @media(max-width: 767px){
        display:flex;
        line-height:25px;
        font-size:16px;
    }
`;
class ContactFormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            mobile: '',
            email: '',
            message: '',
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
        if(!this.state.fname || !this.state.fname.trim()){
            MySwal.fire({
                html: 'Please enter your first name',
                icon: 'error',
                confirmButtonColor: colors.primary
            });
            return false;
        }
        if(!this.state.lname || !this.state.lname.trim()){
            MySwal.fire({
                html: 'Please enter your last name',
                icon: 'error',
                confirmButtonColor: colors.primary
            });
            return false;
        }
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
        if(!this.state.message || !this.state.message.trim()){
            MySwal.fire({
                html: 'Please enter your message',
                icon: 'error',
                confirmButtonColor: colors.primary
            });
            return false;
        }
        return true;
    }
    submit = async () => {
        try{
            const response = await axios.post('/web/contact', {
                fname: this.state.fname,
                lname: this.state.lname,
                mobile: this.state.mobile,
                email: this.state.email,
                message: this.state.message
            });
            this.setState({submitting:false,fname:'',lname:'',mobile:'',email:'',message:''})
            MySwal.fire({
                html: 'Your enquiry has been submitted',
                icon: 'success',
                confirmButtonColor: colors.primary
            });
        }catch(e){
            this.setState({submitting: false});
            let error = 'Your enquiry could not be submitted';
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
            <ContactForm onSubmit={this.onSubmit}>
                <Header>Send us a Message</Header>
                <FormWrap>
                    <Input type="text" name='fname' onChange={this.onChange} placeholder='First name' value={this.state.fname}/>
                    <Input type="text" name='lname' onChange={this.onChange} placeholder='Last name' value={this.state.lname}/>
                </FormWrap>
                <FormWrap>
                    <Input type="email" name='email' onChange={this.onChange} placeholder='Email' value={this.state.email}/>
                    <Input type='tel' name='mobile' onChange={this.onChange} placeholder='Phone Number' value={this.state.mobile}/>                
                </FormWrap>
                <FormWrap>
                    <Input name='message' onChange={this.onChange} placeholder='Enter Message' value={this.state.message}/>
                </FormWrap>
                <Button type='submit'>
                    <span>Submit</span>
                    <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none"  stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>          
                </Button>
            </ContactForm>
        );
    }
}
export default ContactFormContainer;