import React from 'react';
import styled from 'styled-components';
import c from './../../Constants';
import colors from "./../../colors";
import fonts from './../../fonts';
import Card from './Card';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
`;
const Breadcrumbs = styled.div`
    display:flex;
    flex-direction:column;
    background-image:url('/images/faq-banner.jpg');
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
    height:350px;
    justify-content:center;
    padding:0 20px;
    position:relative;
    &:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background:#0000002e;
    }
    & h1{
        z-index:1;
        max-width: ${c.width};
        width:100%;
        color:${colors.white};
        font-family:${fonts.openSans}, sans-serif;
        font-size:60px;
        font-weight:600;
        margin: 0 auto;
    }
    @media(max-width:767px){
        height:250px;
    }
`;
const Container = styled.div`
    max-width:${c.width};
    margin:0 auto;
    padding:40px 20px;
    width:100%;
`;
const FaqTopBar = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:40px;
    margin-bottom:30px;
    justify-content:space-between;
    & h2{
        font-size:38px;
        line-height:48px;
        font-weight:normal;
        font-family:${fonts.anni};
        margin:0 0 20px;
        color: ${colors.txtColor};
    }
    & input{
        cursor: pointer;
        font-size:16px;
        font-weight:500;
        padding: 12px 25px;
        border-radius: 25px;
        box-shadow:none;
        border:1px solid ${colors.input};
        width: 300px;
        box-sizing: border-box;
    }
`;
const FaqBottom = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    column-gap:20px;
    margin-bottom:50px;
    & .column{
        border-radius: 14px;
        width: calc(25% - 15px);
        padding:20px;
        display:flex;
        flex-direction:column;
        position:relative;
        background:${colors.white};
        box-shadow: 0px 0px 20px ${colors.shadow};
        align-items:center;
        justify-content:center;
        font-size:18px;
        font-weight:600;
        font-family:${fonts.noah};
        color: ${colors.txtColor};
        border-bottom: 10px solid ${colors.white};
        &.active{
            border-color:${colors.primary};
        }
        &:hover{
            border-color:${colors.primary};
        }
        & svg{
            margin-bottom:20px;
        }
    }
`;
const Main = (props) => {
    const questionsCard = props.faqs.map((question) => <Card cardId={question.id} question={question.title} answer={question.description}/>)
    return (
        <Wrapper>
            <Breadcrumbs>
                <h1>FAQs</h1>
            </Breadcrumbs>
            <Container>
                <FaqTopBar>
                    <h2>How Can We Help You</h2>
                    <input type="text" placeholder="Search by Name, Keyword.."/>
                </FaqTopBar>
                <FaqBottom>
                    <div className="column active">
                    <svg width="60.062" height="59.997" viewBox="0 0 60.062 59.997">
                            <path  d="M57.17,95.908H3.027A3.838,3.838,0,0,1,.1,92.981V88.535c.485-1.049,1.487-.783,2.348-.83V50.374a3.51,3.51,0,0,1,3.631-3.663H8.13a1.175,1.175,0,1,1,.016,2.332c-.72.016-1.44-.016-2.16,0a1.1,1.1,0,0,0-1.143.892,11.024,11.024,0,0,0-.016,1.44H17.835c.141,0,.344-.063.391-.157.313-.7.579-1.424.877-2.144a1.645,1.645,0,0,0-.2-.031,1.188,1.188,0,0,1-1.19-1.252,1.2,1.2,0,0,1,1.346-1.1A9.632,9.632,0,0,0,20.4,46.68a1.426,1.426,0,0,0,.8-.344A12.463,12.463,0,0,1,39.013,46.3a1.2,1.2,0,0,0,.97.407c4.633-.016,9.251-.016,13.884-.016,2.536,0,3.929,1.409,3.929,3.96v37.05h1.049a1.177,1.177,0,0,1,1.3,1.268c.016,1.174.031,2.348,0,3.522a3.35,3.35,0,0,1-1.8,2.958C57.937,95.642,57.546,95.751,57.17,95.908ZM42.55,53.739a1.4,1.4,0,0,0-.031.172v.3a12.42,12.42,0,0,1-5.291,11.067.939.939,0,0,0-.313.657c-.031,1.972,0,3.944-.016,5.917a3.982,3.982,0,0,1-4.148,4.132H27.477A3.985,3.985,0,0,1,23.266,71.8c-.016-1.91-.016-3.835,0-5.745a.979.979,0,0,0-.454-.908,12.085,12.085,0,0,1-5.04-8.249c-.157-1.033-.141-2.082-.2-3.146H4.8V82.978H55.354V53.739Zm-8,14.228c0-.845.047-1.644-.016-2.442a2,2,0,0,1,1.08-2.051A10.061,10.061,0,0,0,39.889,52.55,10.126,10.126,0,1,0,24.706,63.6a1.716,1.716,0,0,1,.908,1.675c-.047.892-.016,1.784-.016,2.692ZM2.432,90.038v1.831c0,1.362.329,1.675,1.706,1.675h51.9a4.34,4.34,0,0,0,.642-.016,1.124,1.124,0,0,0,1.049-1.017c.047-.814.016-1.628.016-2.442-.11-.016-.157-.047-.219-.047H38.308a.872.872,0,0,0-.517.266,2.376,2.376,0,0,1-1.847.877H24.221a2.146,2.146,0,0,1-1.753-.8.944.944,0,0,0-.845-.376H3.058A2.484,2.484,0,0,1,2.432,90.038ZM46.01,85.4H4.811v2.3H22.624c1.064,0,1.3.157,1.69,1.158H35.9c.36-.97.61-1.158,1.628-1.158H46.01C46.01,86.892,46.01,86.156,46.01,85.4ZM41.079,49.028c.266.657.563,1.237.751,1.831.125.423.344.517.751.517,4.085-.016,8.155-.016,12.24-.016.188,0,.376-.016.595-.031v-.642c0-1.362-.329-1.675-1.706-1.675H41.768C41.549,49.028,41.345,49.028,41.079,49.028ZM25.63,70.362c0,.579-.016,1.127,0,1.659a1.587,1.587,0,0,0,1.612,1.6c1.91.031,3.819.016,5.729,0a1.546,1.546,0,0,0,1.55-1.33c.063-.626.016-1.268.016-1.925ZM55.386,85.4H48.42v2.27h6.965Z" transform="translate(0 -35.911)" fill="#eeb111"/>
                            <path  d="M163.163,220.1h8.906c0,.657.047,1.3-.016,1.925a1.546,1.546,0,0,1-1.55,1.331q-2.864.047-5.729,0a1.607,1.607,0,0,1-1.612-1.6C163.147,221.227,163.163,220.679,163.163,220.1Z" transform="translate(-137.533 -185.648)" fill="#eeb111"/>
                            <path  d="M186.406,2.317c0,.376.016.736,0,1.111a1.167,1.167,0,0,1-2.332.016q-.047-1.174,0-2.348A1.143,1.143,0,0,1,185.232,0a1.165,1.165,0,0,1,1.174,1.08c.031.407,0,.83,0,1.237Z" transform="translate(-155.157)" fill="#eeb111"/>
                            <path  d="M128.336,15.4a3.206,3.206,0,0,1,.783.642,14.908,14.908,0,0,1,1.064,1.816A1.169,1.169,0,1,1,128.148,19c-.376-.61-.751-1.237-1.08-1.878C126.661,16.292,127.193,15.416,128.336,15.4Z" transform="translate(-106.98 -12.989)" fill="#eeb111"/>
                            <path  d="M236.7,14.8a1.246,1.246,0,0,1,1.127,1.706,20.057,20.057,0,0,1-1.252,2.176,1.1,1.1,0,0,1-1.5.313,1.142,1.142,0,0,1-.47-1.471,17.756,17.756,0,0,1,1.237-2.113C236.027,15.129,236.418,14.988,236.7,14.8Z" transform="translate(-197.703 -12.483)" fill="#eeb111"/>
                            <path  d="M79.772,68.9a1.173,1.173,0,0,1,1.158,1.143A1.167,1.167,0,1,1,79.772,68.9Z" transform="translate(-66.211 -58.115)" fill="#eeb111"/>
                            <path  d="M50.8,211.1h4.445c.845,0,1.377.47,1.377,1.174s-.532,1.158-1.393,1.158H46.277c-.845,0-1.377-.47-1.377-1.174s.532-1.158,1.393-1.158Z" transform="translate(-37.788 -178.057)" fill="#eeb111"/>
                            <path  d="M50.852,241H55.3c.861,0,1.393.438,1.409,1.143.016.72-.532,1.19-1.409,1.19H46.407c-.861,0-1.393-.438-1.409-1.143-.016-.72.532-1.19,1.409-1.19Z" transform="translate(-37.87 -203.277)" fill="#eeb111"/>
                            <path  d="M269.452,243.348h-4.445c-.877,0-1.424-.47-1.409-1.205.016-.7.548-1.143,1.409-1.143H273.9c.877,0,1.424.47,1.409,1.205-.016.7-.548,1.143-1.409,1.143Z" transform="translate(-222.253 -203.277)" fill="#eeb111"/>
                            <path  d="M269.437,273.348h-4.383c-.908,0-1.44-.438-1.456-1.158-.016-.736.532-1.19,1.424-1.19h8.891c.861,0,1.393.454,1.393,1.158.016.72-.532,1.19-1.424,1.19Z" transform="translate(-222.253 -228.581)" fill="#eeb111"/>
                            <path  d="M48.42,183.385c-.736,0-1.487.016-2.223,0a1.18,1.18,0,1,1,0-2.348c1.487-.016,2.958-.016,4.445,0a1.18,1.18,0,1,1,0,2.348C49.891,183.4,49.156,183.385,48.42,183.385Z" transform="translate(-37.786 -152.69)" fill="#eeb111"/>
                            <path  d="M296.991,213.469c-.736,0-1.487.016-2.223,0a1.17,1.17,0,1,1-.016-2.332c1.5-.016,3.005-.016,4.492,0a1.166,1.166,0,0,1,1.268,1.158,1.183,1.183,0,0,1-1.252,1.174Z" transform="translate(-247.475 -178.078)" fill="#eeb111"/>
                     </svg>
                    <span>Lorem Ipsum is simply</span>
                    </div>
                    <div className="column">
                    <svg  width="60.104" height="60.095" viewBox="0 0 60.104 60.095">
                        <path  d="M-.084,235.848a2.613,2.613,0,0,1,2.242-2.038c.8-.047,1-.408,1.129-1.051.141-.627.329-1.239.517-1.866A1.428,1.428,0,0,1,5.8,229.764q5.339,1.482,10.663,2.964c1.129.314,2.258.627,3.387.925a.613.613,0,0,0,.408-.016c-.486-.235-.972-.486-1.458-.721-3.748-1.819-7.48-3.638-11.227-5.457a1.95,1.95,0,0,1-.314-.157.881.881,0,0,1-.392-1.16.851.851,0,0,1,1.145-.408c.847.392,1.694.8,2.54,1.207q5.457,2.658,10.9,5.316a.8.8,0,0,0,.486.094c-.2-.157-.392-.314-.6-.47q-4.634-3.5-9.252-7.009a3.453,3.453,0,0,1-.439-.376.79.79,0,0,1-.016-1.113.808.808,0,0,1,1.051-.235,4.7,4.7,0,0,1,.58.392L29.3,235.676c.22.157.439.329.69.5,1.835-1.4,3.654-2.76,5.473-4.14q5.645-4.257,11.274-8.53c.768-.58,1.254-.612,1.631-.11.361.486.188.941-.6,1.537q-4.61,3.481-9.22,6.978a1.648,1.648,0,0,0-.5.533l.517-.235q6.445-3.128,12.905-6.272c.815-.392,1.3-.329,1.568.2.267.549.016.988-.784,1.38-4,1.944-8.013,3.9-12.011,5.849a1.232,1.232,0,0,0-.517.392l2.917-.8c1.537-.423,3.089-.862,4.626-1.286.69-.188,1.176.031,1.317.58.141.517-.172.925-.847,1.113q-8,2.234-15.994,4.438c-.188.047-.361.11-.58.172.3.721.58,1.4.894,2.133,7.731-1.976,15.414-3.936,23.176-5.912-.251-.91-.5-1.756-.768-2.681-.737.2-1.443.392-2.148.58a3.105,3.105,0,0,1-.517.125.793.793,0,0,1-.957-.659.8.8,0,0,1,.565-1.019c1.035-.314,2.054-.6,3.1-.847a1.274,1.274,0,0,1,1.521.972c.282.878.533,1.756.768,2.65.078.329.2.423.549.439a2.627,2.627,0,0,1,.6,5.19q-11.149,2.87-22.3,5.708a1.09,1.09,0,0,0-.784.6,5.281,5.281,0,0,1-3.763,2.807,3.584,3.584,0,0,0-.439.125H29.254c-.141-.047-.3-.094-.439-.125a5.364,5.364,0,0,1-3.763-2.807,1.09,1.09,0,0,0-.784-.6c-5.331-1.349-10.663-2.728-16.01-4.093-.706-.188-1-.6-.847-1.16.141-.517.6-.721,1.286-.549q8.373,2.14,16.747,4.265a1.184,1.184,0,0,1,.925.784,3.821,3.821,0,0,0,7.166.031,1.206,1.206,0,0,1,.925-.8q11.29-2.87,22.6-5.755c.925-.235,1.3-.6,1.176-1.16-.141-.612-.643-.784-1.584-.549q-11.855,3.034-23.725,6.053A1.088,1.088,0,0,0,32,242.763a2.036,2.036,0,0,1-4.061.016,1.124,1.124,0,0,0-.972-1.066c-1.615-.392-3.215-.815-4.83-1.223-6.382-1.662-12.78-3.277-19.177-4.908-.659-.172-1.129.063-1.254.6-.125.486.188.91.815,1.082.612.157,1.207.3,1.819.47a.885.885,0,0,1,.721,1.082.9.9,0,0,1-1.16.612c-.423-.094-.831-.235-1.254-.314A3.165,3.165,0,0,1-.1,236.883C-.084,236.554-.084,236.193-.084,235.848ZM4.7,234.17a4.992,4.992,0,0,0,.486.141c4.3,1.1,8.577,2.2,12.874,3.293q4.681,1.2,9.361,2.383a.588.588,0,0,0,.549-.157c.3-.58.517-1.207.8-1.866-7.793-2.164-15.524-4.3-23.3-6.445C5.216,232.414,4.965,233.261,4.7,234.17Zm25.262,5.723c-.8.815-.5,1.772-.282,2.713.031.11.188.282.251.267a.49.49,0,0,0,.314-.267C30.477,241.666,30.76,240.709,29.96,239.894Z" transform="translate(0 -187.935)" fill="#abcd52"/>
                        <path  d="M121.562,24.768a3.509,3.509,0,0,1-1.49-2.446,1.53,1.53,0,0,0-.988-1.192,2.017,2.017,0,0,1-1.349-1.96,18.287,18.287,0,0,1,.157-2.791,3.066,3.066,0,0,1,1.882-2.525,53.405,53.405,0,0,1,6.178-1.976,2.567,2.567,0,0,1,3.089,3.2,11.35,11.35,0,0,1-.957,2.368c-.3.612-.721,1.16-1.051,1.756a3.067,3.067,0,0,0,.11,3.528c4.171-2.368,6.476-9.408,3.81-14.144-.972,0-1.882-.031-2.791.016a1.96,1.96,0,0,0-1.066.345,1.465,1.465,0,0,1-2.446-.659A5.408,5.408,0,0,1,125.09,3.4c.078-.11.157-.22.235-.345a9.321,9.321,0,0,0-4.767-1.1A6.46,6.46,0,0,1,119.053,4.9c-.564.862-.549,1.129.031,1.944a2.386,2.386,0,0,1-.063,3.136,12.349,12.349,0,0,1-1.176,1.223,1.339,1.339,0,0,0-.376,1.678,4,4,0,0,1,.2.612,2.085,2.085,0,0,1-.517,2.274,2.218,2.218,0,0,1-2.368.376,3.918,3.918,0,0,1-2.4-2.2,33.313,33.313,0,0,1-1.066-3.277,20.075,20.075,0,0,0-.878-2.4,8.251,8.251,0,0,0-1.239,3.654,11.448,11.448,0,0,0,1.709,7.684.907.907,0,0,1-.172,1.349c-.455.3-.957.125-1.333-.439a13.11,13.11,0,0,1,.11-14.285A13.035,13.035,0,0,1,123.162.416a13.233,13.233,0,0,1-.455,26.046,12.686,12.686,0,0,1-9.957-2.4,1.406,1.406,0,0,1-.533-.894.889.889,0,0,1,.47-.706,1.261,1.261,0,0,1,.957.11,12.916,12.916,0,0,0,3.591,1.819A10.044,10.044,0,0,0,121.562,24.768Zm4-1.082c-.125-.3-.251-.58-.376-.862a4.145,4.145,0,0,1-.11-3.575c.329-.784.8-1.505,1.207-2.258a13.439,13.439,0,0,0,.925-1.756c.455-1.254-.157-1.929-1.411-1.568-1.662.47-3.309,1.051-4.955,1.615a1.758,1.758,0,0,0-1.239,1.443c-.094.706-.11,1.443-.157,2.148a.7.7,0,0,0,.549.784,2.263,2.263,0,0,1,1.584,1.741,3.028,3.028,0,0,0,2.2,2.493A1.765,1.765,0,0,0,125.561,23.686ZM111.354,6.547a11.3,11.3,0,0,1,1.944,4.924,5.832,5.832,0,0,0,.612,1.631,4.347,4.347,0,0,0,1.082,1.192c.22.172.612.125.925.172-.016-.282-.031-.549-.063-.831a.618.618,0,0,0-.078-.22,2.972,2.972,0,0,1,.815-3.465c.314-.3.612-.6.909-.909a.868.868,0,0,0,.047-1.333,2.694,2.694,0,0,1-.3-3.215c.235-.455.549-.847.815-1.286.22-.345.439-.674.753-1.16A11.516,11.516,0,0,0,111.354,6.547Zm14.8.8c1.207-.831,2.493-.423,3.716-.5.031-.063.078-.125.11-.188-.972-.957-1.944-1.9-2.948-2.885A3.616,3.616,0,0,0,126.157,7.347Z" transform="translate(-90.599 0)" fill="#abcd52"/>
                        <path  d="M297.1,24.117a1.317,1.317,0,0,1,.753-1.286,5.577,5.577,0,0,0,3.011-3,1.412,1.412,0,0,1,2.556,0,5.993,5.993,0,0,0,3,3,1.434,1.434,0,0,1,0,2.572,6.023,6.023,0,0,0-3.011,3,1.416,1.416,0,0,1-2.556,0,5.629,5.629,0,0,0-3.011-3A1.355,1.355,0,0,1,297.1,24.117Zm5.049-2.964a4.933,4.933,0,0,1-2.979,2.964,4.983,4.983,0,0,1,3,2.979,4.983,4.983,0,0,1,2.979-3A4.856,4.856,0,0,1,302.149,21.154Z" transform="translate(-250.597 -15.908)" fill="#abcd52"/>
                        <path  d="M25.751,121.089c-.376-.267-.753-.533-1.129-.815-.047-.031-.063-.094-.094-.157a4.969,4.969,0,0,0-2.744-2.775,1.428,1.428,0,0,1,0-2.619,5.387,5.387,0,0,0,2.76-2.76,1.447,1.447,0,0,1,2.634-.031c.016.031.047.063.063.094a4.726,4.726,0,0,0,2.619,2.65,1.443,1.443,0,0,1,0,2.7,5.041,5.041,0,0,0-2.666,2.7,1.336,1.336,0,0,1-1.364.847A.441.441,0,0,1,25.751,121.089Zm.125-7.84a4.7,4.7,0,0,1-2.838,2.807,4.439,4.439,0,0,1,2.791,2.854,9.616,9.616,0,0,1,1.129-1.772,9.491,9.491,0,0,1,1.788-1.129A4.453,4.453,0,0,1,25.876,113.248Z" transform="translate(-17.728 -93.545)" fill="#abcd52"/>
                        <path  d="M165.545,206.6a1.3,1.3,0,0,1,1.317.753,5.334,5.334,0,0,0,2.87,2.885,1.405,1.405,0,0,1,0,2.525,5.749,5.749,0,0,0-2.885,2.885,1.408,1.408,0,0,1-2.556-.031,5.717,5.717,0,0,0-2.854-2.838,1.412,1.412,0,0,1,0-2.556,5.324,5.324,0,0,0,2.838-2.854A1.322,1.322,0,0,1,165.545,206.6Zm-2.775,4.892a4.806,4.806,0,0,1,2.823,2.838,4.559,4.559,0,0,1,2.791-2.838,4.636,4.636,0,0,1-2.838-2.791A4.5,4.5,0,0,1,162.769,211.492Z" transform="translate(-135.522 -174.07)" fill="#abcd52"/>
                    </svg>
                        <span>Lorem Ipsum is simply</span>
                    </div>
                    <div className="column">
                    <svg  width="60.01" height="60.028" viewBox="0 0 60.01 60.028">
                        <path  d="M21.441,8.573V3.132A2.866,2.866,0,0,1,24.555,0H35.473a2.874,2.874,0,0,1,3.114,3.132V8.573H52.529a7.145,7.145,0,0,1,7.481,7.5V52.511a7.154,7.154,0,0,1-7.535,7.517H7.535A7.163,7.163,0,0,1,0,52.511V16.072a7.159,7.159,0,0,1,7.5-7.5H21.441Zm-.036,2.846H7.606c-3.025,0-4.761,1.754-4.761,4.8V52.368c0,3.025,1.754,4.8,4.779,4.8h44.8a4.379,4.379,0,0,0,4.761-4.743v-36.3a4.35,4.35,0,0,0-4.725-4.707H38.64v4.3h.752c1.145,0,2.273-.018,3.418.018a1.436,1.436,0,0,1,1.5,1.4,1.47,1.47,0,0,1-1.5,1.468h-.394c-6.336,0-12.671.018-19.025.018-1.933,0-3.884-.018-5.817-.018-1.128,0-1.808-.537-1.826-1.432-.018-.913.68-1.45,1.861-1.45h3.83C21.405,14.264,21.405,12.886,21.405,11.419Zm14.282,4.224V2.881H24.322V15.642Z" transform="translate(0 0)" fill="#9c79c2"/>
                        <path  d="M52.9,143.391a8.581,8.581,0,1,1,9.987,0c.161.125.322.233.483.34a9.8,9.8,0,0,1,4.492,8.161c.036,1.432.018,2.864,0,4.3,0,1.11-.537,1.629-1.664,1.647H49.515a1.46,1.46,0,0,1-1.647-1.647c.018-1.754-.072-3.544.107-5.28a9.626,9.626,0,0,1,4.528-7.23C52.629,143.588,52.718,143.516,52.9,143.391ZM50.75,154.9H65.014c0-1.056.018-2.058,0-3.06a7.14,7.14,0,0,0-12.85-4.027C50.535,149.959,50.678,152.411,50.75,154.9Zm7.087-12.832a5.7,5.7,0,1,0,.054-11.4,5.736,5.736,0,0,0-5.727,5.691A5.649,5.649,0,0,0,57.837,142.066Z" transform="translate(-39.296 -104.947)" fill="#9c79c2"/>
                        <path  d="M185.651,162.481h-8.036a4.065,4.065,0,0,1-.805-.054,1.419,1.419,0,0,1,.018-2.774,3.976,3.976,0,0,1,.805-.054h16.448a1.44,1.44,0,1,1-.036,2.864C191.271,162.5,188.461,162.481,185.651,162.481Z" transform="translate(-144.254 -131.036)" fill="#9c79c2"/>
                        <path  d="M185.716,207.463h8.09a3.416,3.416,0,0,1,.859.09,1.38,1.38,0,0,1,1.02,1.342,1.4,1.4,0,0,1-1,1.36,2.25,2.25,0,0,1-.591.089H177.286a1.436,1.436,0,0,1-1.593-1.36c-.036-.913.591-1.5,1.647-1.521,2.166-.018,4.331,0,6.5,0Z" transform="translate(-144.248 -170.327)" fill="#9c79c2"/>
                        <path  d="M185.779,255.4h8.09a3.415,3.415,0,0,1,.859.089,1.408,1.408,0,0,1,.018,2.7,2.686,2.686,0,0,1-.662.089H177.421c-.984,0-1.593-.5-1.647-1.289-.072-.949.555-1.575,1.647-1.575,2.2-.018,4.421,0,6.622,0C184.616,255.4,185.206,255.4,185.779,255.4Z" transform="translate(-144.311 -209.69)" fill="#9c79c2"/>
                    </svg>
                        <span>Lorem Ipsum is simply</span>
                    </div>
                    <div className="column">
                    <svg  width="60.003" height="49.914" viewBox="0 0 60.003 49.914">
                        <path d="M0,270.9c.266.016.547.031.813.031H60a42.744,42.744,0,0,1-.235,4.74,3.51,3.51,0,0,1-3.379,2.737c-.219.016-.422.016-.641.016q-25.786,0-51.572.016a3.883,3.883,0,0,1-3.77-2.065A7.256,7.256,0,0,1,0,275.358Q0,273.129,0,270.9Zm2.565,2.565c-.172,1.6-.109,2.5,2.065,2.5,16.987-.047,33.99-.016,50.977-.016a5.29,5.29,0,0,0,.7-.016,1.223,1.223,0,0,0,1.158-1.064,13.985,13.985,0,0,0,.016-1.408Z" transform="translate(0 -228.526)" fill="#ffa41b"/>
                        <path d="M52.666,35.273V26.216h-4.99V12.435H28.092c-1.267,0-1.689.422-1.689,1.689v27H23.9V14.031a3.773,3.773,0,0,1,4.083-4.083H47.645V0H80.071V26.2H79.4c-5.631,0-11.278,0-16.909-.016a1.313,1.313,0,0,0-1.017.422c-2.753,2.769-5.522,5.522-8.259,8.29a2.766,2.766,0,0,0-.313.563Zm2.487-5.881c1.846-1.846,3.566-3.551,5.256-5.271a1.391,1.391,0,0,1,1.126-.454q7.672.023,15.329.016h.7V2.5H50.179V23.7h4.974Z" transform="translate(-20.162)" fill="#ffa41b"/>
                        <path d="M50.337,215.949H47.943c-.485-3.707.36-7.289,4.708-8.525a6.619,6.619,0,0,1,1.674-.188q4.153-.023,8.306,0a6.25,6.25,0,0,1,6.476,6.272c.016.657,0,1.33.016,1.987.016.328-.078.5-.454.485-.673-.031-1.345,0-2.08,0v-2.346a3.738,3.738,0,0,0-3.864-3.895q-4.27-.047-8.541,0a3.74,3.74,0,0,0-3.848,3.848C50.321,214.369,50.337,215.136,50.337,215.949Z" transform="translate(-40.341 -174.811)" fill="#ffa41b"/>
                        <path d="M85.583,138.645a5.623,5.623,0,1,1,5.631-5.584A5.605,5.605,0,0,1,85.583,138.645Zm.047-8.713a3.113,3.113,0,1,0,3.081,3.144A3.072,3.072,0,0,0,85.63,129.932Z" transform="translate(-67.485 -107.47)" fill="#ffa41b"/>
                        <path d="M346.193,195.967h-1.846c-.172,0-.344-.016-.547-.031V183.5h2.393Z" transform="translate(-290.023 -154.797)" fill="#ffa41b"/>
                        <path d="M254,47.7c3.347,1.924,6.617,3.8,9.98,5.741-3.363,1.94-6.632,3.832-9.98,5.772Zm2.534,7.18c.829-.485,1.6-.923,2.44-1.423-.876-.5-1.627-.939-2.44-1.408Z" transform="translate(-214.269 -40.239)" fill="#ffa41b"/>
                    </svg>
                        <span>Lorem Ipsum is simply</span>
                    </div>
                </FaqBottom>
                {questionsCard}
            </Container>
        </Wrapper>
    )
}
export default Main;