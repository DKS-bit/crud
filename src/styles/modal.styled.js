import styled from 'styled-components'

export const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color:rgba(0,0,0,.7);
zIndex:1000;

.modal{
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #F7F8FC;
padding:50px;
zIndex: 1000;
border-radius:5%;
}

button{
    background-color: #3751FF;
    color: white;
    position: relative;
    left: 18.3rem;
    border-radius: 100%;
    border:0px;
    padding: 0rem;
    width: 1rem;
    height: 1rem;
    
}
button:hover{
    background-color: black;
    cursor: pointer;
}


`
