import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import '../styles/usuarios.css';
import api from '../api/api.js'
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


function Usuarios() {
    
    const [atualizar, setAtualizar] = useState(true)




    const [users, setUsers] = useState([])
    async function checkLoginStatus(){
    
        const jwToken = localStorage.getItem("jwToken");
        try {
        
        const response = await api.get('/userLogged', 
            {
                headers: {
                authorization: `Bearer ${jwToken}`
            }
        }
        
    )
    return true;
    
    } catch (error) {
        return false;
    }
    }
    
    useEffect(() => {
        getClientTable()

        if(atualizar) setAtualizar(false);

    },[atualizar])

    async function getClientTable(){
        try {
            const response = await api.get('/dbSelect');
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const navigate = useNavigate()

    useEffect(() => {
        
        const teste = checkLoginStatus()
        teste.then(teste1 => {
            console.log(teste1)
            if(teste1 == true){
                console.log("oi")
            }
            else{
                console.log("bzti aqui")
                
                navigate('/Login');
            }
        })

    
    },[])


    return (
    <div className="Usuarios">
        <Sidebar />
        
        <Navbar text = "Usuarios" />

        <Table users = {users} setAtualizar = {setAtualizar}/>
    </div>
    );
}

export default Usuarios;
