import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
height: 134px;
width: 70%;
left: 300px;
top: 128px;
border-radius: 0px;
margin-top: 7rem;
justify-content: space-around;
position: absolute;
margin-right: 3rem;
/* grayscale / white */

background: #FFFFFF;
/* grayscale / divider */

border: 1px solid #DFE0EB;
border-radius: 8px;

h4{
    /* Bold/19px */

font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 19px;
line-height: 24px;
/* identical to box height */

text-align: center;
letter-spacing: 0.4px;

/* grayscale / gray */

color: #9FA2B4;
}
h2{
    /* Bold/40px */

font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 50px;
text-align: center;
letter-spacing: 1px;

/* grayscale / black */

color: #252733;
}
`