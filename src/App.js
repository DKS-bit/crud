import logo from './logo.svg';
//Tirar app css
//Colocar css dentro dos components
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>

      </Routes>
      <Sidebar/>
    </div>
    </Router>
  );
}

export default App;
