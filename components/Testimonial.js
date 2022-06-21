import React from 'react';
import styled from 'styled-components';
import Slider from 'nuka-carousel';
import c from './../Constants';
import colors from './../colors';
import fonts from './../fonts';

const TestimonialWrap = styled.div`
    display:flex;
    padding:60px 20px;
    flex-direction:column;
    background-image:url('/images/testimonials-banner.png');
    background-repeat:no-repeat;
    background-size: cover;
    background-position: center;
    & .container{
        max-width:${c.width};
        width:100%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
    }
    & h2{
        text-align: center;
        font-size:42px;
        line-height:52px;
        font-weight:normal;
        font-family:${fonts.anni};
        margin:0 0 20px;
        color: ${colors.txtColor};
    }
    & p{
        text-align: center;
        font-size:20px;
        line-height:26px;
        font-family:${fonts.noah};
        margin:0 0 50px;
        font-weight:600;
        color: ${colors.txtColor};
    }
`;
const TestimonialContainer = styled.div`
    margin:40px 15px 0;
    padding:30px;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    align-items:center;
    background:${colors.white};
    box-shadow: 0px 0px 20px ${colors.shadow};
    border-radius:16px;
    position:relative;
    & img{
        width:80px;
        height:80px;
        margin-top:-70px
    }
    & p.content{
        font-size:16px;
        line-height:20px;
        font-weight:normal;
        font-family:${fonts.noah};
        margin-top:30px;
        margin-bottom:30px;
        color:${colors.testimonial};
    }
    & p.author{
        font-family:${fonts.noah};
        font-size:16px;
        line-height:20px;
        font-weight:600;
        margin:0;
        color:${colors.primary};
    }
`;

const Testimonial = () => {
    return (
        <TestimonialWrap>
            <div className="container">
                <h2>What BeeEnrolled Parents Have to Say!</h2>
                <p>Etiam gravida dictum ligula sed vestibulum. In elementum tincidunt risus, a imperdiet sem malesuada id.</p>
                <Slider
                    autoplay={true}
                    autoplayInterval={4000}
                    wrapAround={true}
                    heightMode='current'
                    cellAlign="center"
                    slidesToShow={3}
                    renderCenterLeftControls={() => false}
                    renderCenterRightControls={() => false}>
                    <TestimonialContainer>
                        <img src="/images/user1.png" alt="Patricia"/>
                        <p className="content">Etiam sollicitudin velit at lacus commodo, in hendrerit nisl dignissim. Donec accumsan eros convallis nisi euismod porta. Nam vitae dapibus enim.</p>
                        <p className="author">- Patricia, CEO</p>
                    </TestimonialContainer>
                    <TestimonialContainer>
                        <img src="/images/user2.png" alt="Deborah"/>
                        <p className="content">Etiam sollicitudin velit at lacus commodo, in hendrerit nisl dignissim. Donec accumsan eros convallis nisi euismod porta. Nam vitae dapibus enim.</p>
                        <p className="author">- Deborah, CEO</p>
                    </TestimonialContainer>
                    <TestimonialContainer>
                        <img src="/images/user3.png" alt="John Doe"/>
                        <p className="content">Etiam sollicitudin velit at lacus commodo, in hendrerit nisl dignissim. Donec accumsan eros convallis nisi euismod porta. Nam vitae dapibus enim.</p>
                        <p className="author">- John Doe, Marketing Manager</p>
                    </TestimonialContainer>
                </Slider>
            </div>
        </TestimonialWrap>
    )
}
export default Testimonial;