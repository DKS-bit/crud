import styled from 'styled-components'

export const Container = styled.div`

    align-self: center;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: white;
    position: absolute;
    left: 700px;
    bottom: 300px;


    textarea{
        border: 1px solid #bbb;
        width: 500px;
        height: 100px;
    }
    form{
        display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }
    input{
        background-color: green;

    }
`