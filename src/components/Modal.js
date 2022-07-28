import React, { Children } from 'react'
import { Container } from "../styles/modal.styled";
import UserForm from './UserForm';

export default function Modal( {open , onClose, type, id, name, email, date} ) {
    if(!open) return null
  if(type === "register"){
    return (
          
          <Container>
              <div className="modal">
              <button onClick = {onClose} className="close-button"> X </button>

              <UserForm type={type}></UserForm>
              </div>
          </Container>

    )
  }
  else if(type === "edit"){
    return (
            
      <Container>
          <div className="modal">
          <button onClick = {onClose} className="close-buttonEdit"> X </button>

          <UserForm type ={type} id={id} name={name} email={email} date={date}></UserForm>
          {console.log({id})}
          </div>
      </Container>

    )
  }
}
