import Sidebar from "../components/Sidebar";
import Square from "../components/Square";
import Navbar from "../components/Navbar";
import '../styles/home.css';
import axios from 'axios';
import api from '../api/api.js'
import {useEffect} from "react"
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';




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
console.log(response);
return true;

} catch (error) {
    console.log("peguei vcS!");
    return false;
}
}


function Home() {


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
    


    // req();
    return (
    <div className="Home">
        <Sidebar />
        
        <Navbar text = "Home" />
            <div className = "cards">
                <Square />
                <Square />
                <Square />
            </div>
    </div>
    );
}

export default Home;