import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import { Container } from "../styles/table.styled";
import Active from "./Active";
import Inactive from "./Inactive";
import Modal from '../components/Modal';
import api from '../api/api.js'
const moment = require("moment");

function Table(props) {

    function handleDateFormat (date){
        return moment(date).locale("pt-br").format('MMMM Do YYYY');
    }
    
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState("register");
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

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



    console.log(props.users);
    return (
        <Container>
            <span onClick={()=>handleType("register")}>Cadastrar</span>
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
                                <span onClick={() => deleteClient(user.idclient)}>Deletar</span>
                                <p onClick={() => handleType("edit", user.idclient, user.name, user.email, user.dateOfBirth)}>Acao 3</p>
                                </div>
                                </div>
                            </td>
                        </tr>
                        )
                    )
                    
                        
                    }

                        

                </tbody>
            </table>
        </Container >
    );
}

export default Table;