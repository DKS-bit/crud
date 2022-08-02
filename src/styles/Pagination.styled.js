import styled from 'styled-components'

export const Container = styled.div`
display: flex;
  justify-content: center;
ul{
  margin-top: 3rem;
}
li{
  display: inline-block;
  padding: 0.5rem;
  margin: 0.5rem;

  color: #333;

  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

}
li:hover{
  text-shadow: 0px 0px 3px #ffa600;
  color: #fff;
  transform: scale(1.2);
  transition: transform 0.3s e
}
li, a{
    color: black;
}
`