import React from 'react'
import { Container } from "../styles/userInput.styled";

export default function UserInput(props) {
  return (
    <Container>
      <label for={props.name}> {props.name}
        <input type={props.type} name={props.name} placeholder={props.placeholder}></input>
      </label>
    </Container>
  )
}
