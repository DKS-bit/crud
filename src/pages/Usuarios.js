import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import '../styles/usuarios.css';
import Message from "../components/Message";
import api from '../api/api.js'
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


function Usuarios() {
    
    const [atualizar, setAtualizar] = useState(true)
    const [name, setName] =useState("")




    const [users, setUsers] = useState([])
    const [count, setCount] = useState([0])
    const [pagination, setPagination] = useState(0)
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
        getClientTableCount()

        if(atualizar) setAtualizar(false);

    },[atualizar, pagination])

    useEffect(() => {
        getClientTable()
        getClientTableCount()

    },[name])

    async function getClientTable(){
        console.log(pagination)
        try {
            const response = await api.get('/dbSelectWhere',            {
                headers: {
                name,
                pagination
            }
        } );
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getClientTableCount(){
        try {
            const response = await api.get('/dbCount');
            setCount(response.data[0].NumberOfClients);
            console.log(response);
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

        <Table users = {users} setAtualizar = {setAtualizar} setNameReq = {setName} count ={count} setOffSet ={setPagination} pagination ={pagination}/>

        <Message users = {users}></Message>
    </div>
    );
}

export default Usuarios;
