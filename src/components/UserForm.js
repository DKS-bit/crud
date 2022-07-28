import React, { useEffect } from 'react';
import UserInput from './UserInput';
import { Container } from "../styles/userForm.styled";
import api from '../api/api.js'
import { useState } from 'react';
import InputMask from 'react-input-mask'
const moment = require("moment");




export default function UserForm(props) {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dtOfBirth, setDtOfBirth] = useState('');

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
    setDtOfBirth(props.dtOfBirth);


},[])




  async function validations(){
    
  }

  async function clientInsert(){

    try {
        const response = await api.post('/dbInsert', {name, email, dtOfBirth});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function clientUpdate(name ,idclient){
  console.log(idclient)
  try {
      const response = await api.put('/dbUpdate', {idclient:props.id, name:name, email, dtOfBirth});
      console.log(response);

      
  } catch (error) {
      console.log(error);
  }
  return false;

}
// async function clientUpdate(){

//   try {
//       const response = await api.put('/dbUpdate', {name:name,idclient:props.id});
//       console.log(response);
//   } catch (error) {
//       console.log(error);
//   }
// }
  if(props.type === "register")
  return (
    
    <Container>
      <form >

        <label for="userName" > userName 
          <input  onChange={event => setName(event.target.value)}  type="text" name="userName" placeholder="Generico"></input>
        </label>

        <label for="dateOfBirth"> dateOfBirth
          {/* <input onChange={event => setDtOfBirth(event.target.value)}  type="date" name="dateOfBirth" placeholder="01/01/1970"></input> */}
          <InputMask mask="9999-99-99" onChange={event => setDtOfBirth(event.target.value)}>

          </InputMask>
          <h1>{dtOfBirth}</h1>
          {/* <InputMask mask="99/99/9999" value={props.value} onChange={props.onChange}>
      {(inputProps) => <MaterialInput {...inputProps} type="tel" disableUnderline />}
  </InputMask> */}
        </label>

        <label for="email"> email
          <input onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="email@email.com"></input>
        </label>

        <input type="submit" name="createUser" value="Cadastrar" onClick={() =>clientInsert(name, email, dtOfBirth)} ></input>
      </form>
      <p>Preencha todos os campos</p>
    </Container>
  )
  if(props.type === "edit")

  return (
    
    <Container>
      <form>
    
        <label for="userName" > userName 
          <input  onChange={event => setName(event.target.value)}  type="text" name="userName" placeholder="Generico" defaultValue={props.name} ></input>
          
        </label>

        <label for="dateOfBirth"> dateOfBirth
          <input onChange={event => setDtOfBirth(event.target.value)}  type="text" name="dateOfBirth" placeholder="01/01/1970" defaultValue={props.date}></input>

        </label>

        <label for="email"> email
          <input onChange={event => setEmail(event.target.value)} type="email" name="email" placeholder="email@email.com" defaultValue={props.email}></input>

        </label>

        <input type="submit" name="editUser" value="Editar" onClick={() =>clientUpdate(name, props.id)} ></input>
      </form>
      <p>Preencha todos os campos</p>
    </Container>
  )
}
