import React from 'react';
import styled from 'styled-components';
import c from './../../Constants';
import colors from './../../colors';
import fonts from './../../fonts';

const TeacherWrap = styled.div`
    display:flex;
    padding:80px 20px;
    flex-direction:column;
    background:${colors.white};
    & .container{
        max-width:${c.width};
        width:100%;
        margin:0 auto;
        display:flex;
        flex-direction:column;
        box-sizing:border-box;
    }
`;
const ItemsWrap = styled.div`
    display:flex;
    flex-direction:row;
    column-gap:30px;
    row-gap:30px;
    flex-wrap:wrap;
`;
const BInfoWrap = styled.div`
    width:calc(33.33% - 20px);
    display:flex;
    flex-direction:column;
    & h2{
        font-size:42px;
        line-height:62px;
        font-weight:normal;
        font-family:${fonts.anni};
        margin:0 0 20px;
        color: ${colors.txtColor};
    }
    & p{
        font-size:20px;
        line-height:26px;
        font-family:${fonts.noah};
        margin:0 0 50px;
        font-weight:600;
        color: ${colors.txtColor};
    }
    & button{
        cursor: pointer;
        font-family:${fonts.noah};
        font-size:20px;
        line-height:27px;
        font-weight:600;
        padding:12px 25px;
        border-radius: 25px;
        background: ${colors.primary};
        color: ${colors.white};
        box-shadow:none;
        border:none;
        align-self: flex-start;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 15px;
        & svg{
            stroke:${colors.white};
        }
    }
`;
const BItemWrap = styled.div`
    width: calc(33.33% - 20px);
    display:flex;
    flex-direction:column;
    position:relative;
    & img{
        max-width:100%;
    }
    & .desc{
        position:absolute;
        left:15px;
        top:15px;
        bottom:15px;
        right:15px;
        display:none;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:40px;
        background:${colors.primary};
        & strong{
            color:${colors.white};
            font-size:26px;
            line-height:28px;
            margin-bottom:10px;
            font-weight:600;
        }
        & p{
            color:${colors.white};
            font-weight:500;
            font-size:16px;
            line-height:28px;
            margin:0;
            text-align:center;
        }
    }
    &:hover .desc{
        display:flex;
    }
`;
const Teachers = () => {
    return (
        <TeacherWrap>
            <div className="container">
                <ItemsWrap>
                    <BInfoWrap>
                        <h2>Highly Qualified Educators</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae mollis mauris, eu semper erat. Maecenas euismod justo suscipit.</p>
                        <button>
                            <span>Join our Community</span>
                            <svg width="19.51" height="16.917" viewBox="0 0 19.51 16.917"><g transform="translate(-1438.971 -1655.477)"><path d="M630,777.424l7.237,6.881L630,791.513" transform="translate(820.538 879.467)" fill="none" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="2"/><line x2="17.22" transform="translate(1439.971 1663.936)" fill="none" stroke-linecap="round" stroke-width="2"/></g></svg>
                        </button>
                    </BInfoWrap>
                    <BItemWrap>
                        <img src="/images/teacher1.jpg"/>
                        <div className="desc">
                            <strong>John Doe</strong>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </BItemWrap>
                    <BItemWrap>
                        <img src="/images/teacher2.jpg"/>
                        <div className="desc">
                            <strong>John Doe</strong>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </BItemWrap>
                    <BItemWrap>
                        <img src="/images/teacher3.jpg"/>
                        <div className="desc">
                            <strong>John Doe</strong>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </BItemWrap>
                    <BItemWrap>
                        <img src="/images/teacher4.jpg"/>
                        <div className="desc">
                            <strong>John Doe</strong>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </BItemWrap>
                    <BItemWrap>
                        <img src="/images/teacher5.jpg"/>
                        <div className="desc">
                            <strong>John Doe</strong>
                            <p>There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </BItemWrap>
                </ItemsWrap>
            </div>
        </TeacherWrap>
    )
}
export default Teachers;