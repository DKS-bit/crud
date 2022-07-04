import Sidebar from "../components/Sidebar";
import Square from "../components/Square";
import Navbar from "../components/Navbar";
import '../styles/home.css';

function Home() {
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