import '../styles/login.css';
function Login() {
    return (
    <div className="Login">
        <section>
            <img src = "https://yt3.ggpht.com/0LlTclJ83iszU9z8k8XRME7C9hhJ2d59f0p5cfXpIGzg2cVdrCkhqFfDE3o8UMBAtFgML_N1=s900-c-k-c0x00ffffff-no-rj" alt="placekitten"></img>
            <h3>Crud Node.js</h3>
            <h2>Login</h2>
            <p>Insira seu email e senha abaixo</p>
            <form>
                <label>Email<input type="email" name="email" placeholder="Email"></input></label>
                
                <label>Password<span>Esqueceu sua senha?</span><input type="password" name="password" placeholder="Password"></input></label>
                <input type="submit" name="login" value="Entrar"></input>
                <p>Nao tem uma conta?     <a>Criar</a></p>
            </form>
            
        </section>
    </div>
    );
}

export default Login;