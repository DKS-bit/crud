import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: center;
width: 1400px; 
left: 340px;
top: -16px;
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
table { 
    width: 1400px; 
    border-collapse: collapse; 
  }
  /* Zebra striping */
  tr:nth-of-type(odd) { 
    background: #eee; 
  }
  th { 
    background: #363740; 
    color: white; 
    font-weight: bold; 
  }
  td, th { 
    padding: 6px; 
    text-align: center; 
  }
  td > div {
    display: inline-block;
  }
  img{
    margin-top: 0;
  }
  .acoes{
    width: 33px; 
    height: 33px; 
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  span{
    font-size: 17px;
    padding: 1rem;
    position: relative;
    left: 555px;
  }
  span:hover{
    cursor:pointer;
    font-size:23px;
  }
`