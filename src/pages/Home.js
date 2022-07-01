import Sidebar from "../components/Sidebar";
import Square from "../components/Square";

function Home() {
    return (
    <div className="Home">
        <Sidebar />
        <Square />
        <Square />
        <Square />
    </div>
    );
}

export default Home;