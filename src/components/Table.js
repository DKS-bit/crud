import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import { Container } from "../styles/table.styled";
import Active from "./Active";
import Inactive from "./Inactive";
import Modal from '../components/Modal';
import api from '../api/api.js'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Pagination from "./Pagination";

const moment = require("moment");

function Table(props) {
    const { transcript } = useSpeechRecognition()

    function handleDateFormat (date){
        return moment(date).locale("pt-br").format('MMMM Do YYYY');
    }

    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState("register");
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [username, setUsername] = useState("TESTE 1");

    function handleType(type, id, name,email, date){
        console.log(id);

        setModalType(type);
        setId(id);
        setName(name);
        setEmail(email);
        setDate(date);
        if(modalType ==  "edit"){
        setIsOpen(true);
        return 0;    
        }
        setIsOpen(true)

    }
    useEffect(() => {
        setUsername(transcript)
        props.setNameReq(transcript)
    },[transcript])

    useEffect(() => {
        props.setNameReq(username)
    },[username])

    async function deleteClient(idclient){
        console.log(idclient)
        try {
            const response = await api.delete('/dbDelete', {data:{idclient:idclient}});
            console.log(response);

            props.setAtualizar(true)
            
        } catch (error) {
            console.log(error);
        }
    

    }


    return (
        
        <Container>
            <span onClick={()=>handleType("register")}>Cadastrar</span>
    
            <button  className="micButton" onClick={()=>SpeechRecognition.startListening({})}><img src="https://cdn1.iconfinder.com/data/icons/neutro-essential/32/microphone-512.png"/></button>
            <label className="busca">Buscar<input type="text" name="username" placeholder="Nome" onChange={(e) => setUsername(e.target.value)} value={username}></input></label>




            <Modal  type ={modalType} open={isOpen} id={id} name={name} email={email} date = {date} onClose={() => setIsOpen(false)}>
                
            </Modal>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Data Nascimento</th>
                        <th>Estado</th>
                        <th></th>
                    </tr>
                </thead>    
                <tbody>
                    {props.users.map(user => 
                        (
                            <tr>
                            <td><img src={user.image}></img></td>
                            <td>{user.name}</td>
                            <td>{handleDateFormat(user.dateOfBirth)}</td>
                            <td><Active estado="inactive" texto="Inativo"></Active></td>
                            <td><div className="dropdown">
                                <img src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/more-2-512.png" className="acoes" />
                                <div className="dropdown-content">
                                    {/* FAazer as funcoes aqui ja deixarem como parametro o user.id  */}
                                {/* <span onClick={() => handleType("edit")}>Editar</span> */}
                                <p onClick={() => deleteClient(user.idclient)}>Deletar</p>
                                <p onClick={() => handleType("edit", user.idclient, user.name, user.email, user.dateOfBirth)}>Editar</p>
                                </div>
                                </div>
                            </td>
                        </tr>
                        )
                    )
                    
                        
                    }

                        

                </tbody>
            </table>
            <div className="lowerTable">
            <Pagination setOffSet = {props.setOffSet} count = {props.count}></Pagination>
                {/* <b>Mostrando {props.pagination+1}-{props.pagination+3<props.count ? props.pagination+3 : props.count} de  {props.count} clientes</b>
                <button  className="setinha" id ="invertido" onClick={(e) => props.setOffSet(prevPagination => prevPagination -3)} ><img src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-right-512.png"/></button>
                <button className="setinha" onClick={(e) => props.setOffSet(prevPagination => prevPagination +3)} ><img src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-right-512.png"/></button> */}
            </div>
        </Container >
    );
}

export default Table;