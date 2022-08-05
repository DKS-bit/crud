import Sidebar from "./Sidebar";
import Square from "./Square";
import Navbar from "./Navbar";
import '../styles/home.css';
import axios from 'axios';
import api from '../api/api.js'
import { Container } from '../styles/mensagens.styled'
import {useEffect} from "react"
import {parsePath, useNavigate} from 'react-router-dom';
import {useState} from 'react';


function Message(props) {

    const [text, setText] = useState("");

    async function teste(){
      console.log(props.users);
      for(let i=0; props.users.lenght; i++){
        console.log(props.users);
      }
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log(props.users[1]);

          console.log(props.users);
          for(let i =0; i < props.users.length; i++){
          var data = JSON.stringify({
              "session": "nova",  
              "number": props.users[i].telUser,
              "text": text
            });
            if (props.users[i].status == 1 ){
            var config = {
              method: 'post',
              url: 'http://localhost:3333/sendText',
              headers: { 
                'sessionkey': '12345', 
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        }
        }
    

    
      
      
    
        teste();
    return (
        <Container>
            <form on onSubmit={(e) =>handleSubmit(e)}>
                <h1>Enviar mensagem para usuarios  listados ativos</h1>
            <textarea name="bio" rows="3" cols="30" value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <h1>{text}</h1>
            <input type="submit"></input>
            </form>
            <button onClick={()=>teste()}>aaa</button>
        </Container>
    );
}

export default Message;