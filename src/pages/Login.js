import '../styles/login.css';
import api from '../api/api.js'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


function Login() {
    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await api.post("/login", {username,password})
            setUser(res.data);
            localStorage.setItem("jwToken", res.data.accessToken);

            navigate('/Home');


        }
        catch(err){
            console.log(err);
            
        }
    }

    return (
    <div className="Login">
        <section className={menu ? "invisible" : "display" }>
            <img src = "https://yt3.ggpht.com/0LlTclJ83iszU9z8k8XRME7C9hhJ2d59f0p5cfXpIGzg2cVdrCkhqFfDE3o8UMBAtFgML_N1=s900-c-k-c0x00ffffff-no-rj" alt="placekitten"></img>
            <h3>Crud Node.js</h3>
            <h2>Login</h2>
            <p>Insira seu email e senha abaixo</p>
            <form onSubmit={handleSubmit}>

                <label>Username<input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input></label>
                
                <label>Password<span>Esqueceu sua senha?</span><input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input></label>
                <input type="submit" name="login" value="Entrar"></input>
                <p>Nao tem uma conta?     <a onClick={() => setMenu(true)}>Criar</a></p>
            </form>
            
        </section>

        <section className={menu ? "dispay" : "invisible" }>
            <img src = "https://yt3.ggpht.com/0LlTclJ83iszU9z8k8XRME7C9hhJ2d59f0p5cfXpIGzg2cVdrCkhqFfDE3o8UMBAtFgML_N1=s900-c-k-c0x00ffffff-no-rj" alt="placekitten"></img>
            <h3>Crud Node.js</h3>
            <h2>CRIAR CONTA</h2>
            <p>Insira seu email e senha abaixo</p>
            <form onSubmit={handleSubmit}>

                <label>Username<input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}></input></label>
                
                <label>Senha<input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input></label>
                <label>Confirme sua Senha<input type="password" name="confirmPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input></label>
                <input type="submit" name="regiister" value="Criar Conta"></input>
                <p>Ja tem conta?   <a onClick={() => setMenu(false)}>Logar</a></p>
            </form>
            
        </section>
    </div>
    );
}

export default Login;