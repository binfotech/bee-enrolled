import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';
import c from "./../../Constants";
import colors from './../../colors';
import fonts from './../../fonts';
import InputT from './../styled/Input';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const SignupForm = styled.form`
    background: ${colors.white};
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    align-items:center;
`;
const Header = styled.h1`
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
    margin-bottom:25px;
    & svg{
        stroke:${colors.white};
    }
`;
const BottomPara = styled.div`
    font-size: 16px;
    font-family: ${fonts.noah};
    color: ${colors.txtLightColor};
    font-weight: 600;
    margin-bottom: 20px;
    & a{
        color: ${colors.txtLightColor};
        text-decoration:none;
    }
`;
const OrText = styled.div`
    font-size: 20px;
    font-family: ${fonts.noah};
    color: ${colors.txtColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    font-weight: 600;
    margin-bottom: 20px;
    &:before{
        position:absolute;
        content:'';
        left:0;
        right:0;
        top:13px;
        border-bottom:1px solid ${colors.txtColor};
    }
    & span{
        background:${colors.white};
        padding:0 25px;
        z-index:1;
    }
`;
const GoogleBtn = styled.button`
    background: ${colors.white};
    border: 1px solid ${colors.txtColor};
    color: ${colors.txtColor};
    border-radius: 40px;
    margin-bottom: 15px;
    display: flex;
    align-items:center;
    column-gap:15px;
    width: 100%;
    height: 45px;
    font-family: ${fonts.noah};
    font-size: 18px;
    font-weight: 600;
    justify-content:center;
    @media(max-width: 767px){
        font-size: 14px;
    }
`;
const FacebookBtn = styled.button`
    background: ${colors.fbBg};
    border: 1px solid ${colors.fbBg};
    color: ${colors.white};
    border-radius: 40px;
    display: flex;
    align-items:center;
    column-gap:15px;
    width: 100%;
    height: 45px;
    font-family: ${fonts.noah};
    font-size: 18px;
    font-weight: 600;
    justify-content:center;
    @media(max-width: 767px){
        font-size: 14px;
    }
`;

class SignupFormContainer extends React.Component{
    state = {
        name: '',
        email: '',
        password: '',
        submitting: false
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
        if(!this.state.name || !this.state.name.trim()){
            MySwal.fire({
                html: 'Please enter your name',
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
        if(!this.state.password || !this.state.password.trim()){
            MySwal.fire({
                html: 'Please enter your password',
                icon: 'error',
                confirmButtonColor: colors.primary
            });
            return false;
        }
        return true;
    }
    submit = async() => {
        try{
            const response = await axios.post('/web/register', {
                name: this.state.name,      
                email: this.state.email,
                password: this.state.password
            });
            this.setState({submitting:false,name:'',email:'',password:''})
            if(response.status === 200){
                const {user,token,message} = response.data;
                localStorage.setItem("bi-token",token);
                localStorage.setItem('user',JSON.stringify(user));
                MySwal.fire({
                    html: 'Registered Successfuly...',
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
    responseFacebook = async(fbResponse) => {
        if(fbResponse.accessToken){
            try{
                const response = await axios.post('/web/sociallogin',{
                    type: 'facebook',
                    user_id: fbResponse.userID,
                    name: fbResponse.name,
                    email: fbResponse.email,
                    profile_picture: `http://graph.facebook.com/${fbResponse.userID}/picture?type=large&width=720&height=720`,
                    access_token: fbResponse.accessToken
                });
                if(response.status === 200){
                    const {user,token,message} = response.data;
                    localStorage.setItem("bi-token",token);
                    localStorage.setItem('user',JSON.stringify(user));
                    MySwal.fire({
                        html: 'Login Successfuly...',
                        icon: 'success',
                        confirmButtonColor: colors.primary
                    });
                }
            }catch(e){
                let error = '';
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
    }
    responseGoogle = async(gResponse) => {
        if(gResponse.accessToken){
            try{
                const response = await axios.post('/web/sociallogin',{
                    type: 'google',
                    user_id: gResponse.profileObj.googleId,
                    name: gResponse.profileObj.name,
                    email: gResponse.profileObj.email,
                    profile_picture: gResponse.profileObj.imageUrl,
                    access_token: gResponse.accessToken
                });
                if(response.status === 200){
                    const {user,token,message} = response.data;
                    localStorage.setItem("bi-token",token);
                    localStorage.setItem('user',JSON.stringify(user));
                    MySwal.fire({
                        html: 'Login Successfuly...',
                        icon: 'success',
                        confirmButtonColor: colors.primary
                    });
                }
            }catch(e){
                let error = '';
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
    }
    render(){
        return (
            <SignupForm onSubmit={this.onSubmit}>
                <Header>Create Account</Header>
                <Para>Contrary to popular belief, Lorem Ipsum is not simply.</Para>
                <Input name='name' onChange={this.onChange}  placeholder='Enter your name' value={this.state.name}/>
                <Input name='email' onChange={this.onChange} placeholder='Enter your email' value={this.state.email}/>
                <Input name='password' type="password" onChange={this.onChange} placeholder='Enter your password' value={this.state.password}/>
                <Button type='submit'>
                    <span>Register Now</span>
                    <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none"  stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>
                </Button>
                <BottomPara>Already have an account? <a href={`${c.BASE_URL}/login`}>Login</a></BottomPara>
                <OrText><span>or log in with</span></OrText>
                <GoogleLogin
                    clientId={c.googleClientId}
                    buttonText="Continue with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    render={renderProps => (
                        <GoogleBtn onClick={renderProps.onClick}>
                            <svg width="18.702" height="19.084" viewBox="0 0 18.702 19.084"><path d="M139.71,108.712a8.177,8.177,0,0,0-.2-1.951H130.55V110.3h5.259a4.663,4.663,0,0,1-1.951,3.1l-.018.119,2.833,2.194.2.02a9.329,9.329,0,0,0,2.841-7.019" transform="translate(-121.008 -98.958)" fill="#4285f4"/><path d="M22.449,164.025a9.1,9.1,0,0,0,6.319-2.311l-3.011-2.333a5.647,5.647,0,0,1-3.308.954,5.744,5.744,0,0,1-5.428-3.965l-.112.009-2.945,2.279-.039.107a9.535,9.535,0,0,0,8.524,5.259" transform="translate(-12.907 -144.941)" fill="#34a853"/><path d="M4.114,77.529A5.874,5.874,0,0,1,3.8,75.642,6.173,6.173,0,0,1,4.1,73.755L4.1,73.628,1.115,71.312l-.1.046a9.522,9.522,0,0,0,0,8.566l3.1-2.4" transform="translate(0 -66.1)" fill="#fbbc05"/><path d="M22.449,3.689A5.288,5.288,0,0,1,26.139,5.11l2.693-2.629A9.168,9.168,0,0,0,22.449,0a9.535,9.535,0,0,0-8.524,5.259l3.085,2.4a5.768,5.768,0,0,1,5.439-3.965" transform="translate(-12.907)" fill="#eb4335"/></svg>
                            <span>Continue with Google</span>
                        </GoogleBtn>
                    )}
                />
                <FacebookLogin
                    appId={c.fbAppId}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    render={renderProps => (
                        <FacebookBtn onClick={renderProps.onClick}>
                            <svg width="9.709" height="19.463" viewBox="0 0 9.709 19.463"><path d="M0,9.816V6.569H2.154V5.958c.064-1.029.032-2.09.193-3.086A3.026,3.026,0,0,1,4.6.4,19.223,19.223,0,0,1,9.677.075V3.322h-1.7c-1.254.032-1.511.257-1.511,1.543V6.537H9.709c-.129,1.125-.257,2.186-.386,3.247H6.43v9.742H2.122V9.816Z" transform="translate(0 -0.063)" fill="#fff"/></svg>
                            <span>Continue with Facebook</span>
                        </FacebookBtn>
                    )}
                />
            </SignupForm>
        );
    }
}
export default SignupFormContainer;