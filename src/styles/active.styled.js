import styled from 'styled-components'

export const Container = styled.div`
button{

    border-radius: 100px;
    /* Bold 11 (0.5 px, CAPS) */
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 11px;
line-height: 14px;
/* identical to box height */
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.5px;
text-transform: uppercase;
/* grayscale / white */
color: #FFFFFF;
border: 0;
}
.active{
    background: #29CC97;
}
.inactive{
    background: #F12B2C;
}
`