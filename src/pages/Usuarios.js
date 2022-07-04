import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import '../styles/usuarios.css';

function Usuarios() {
    return (
    <div className="Usuarios">
        <Sidebar />
        
        <Navbar text = "Usuarios" />

        <Table />
    </div>
    );
}

export default Usuarios;