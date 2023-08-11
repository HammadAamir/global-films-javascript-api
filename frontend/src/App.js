import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Films from './pages/Films'
import CreateFilm from './pages/create'
import SingleFilm from "./pages/SingleFilm";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { useState } from "react";
function App() {
  
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setLoginUser={setLoginUser}/>
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user && user._id ? <Films/>:<Login setLoginUser={setLoginUser}/> } 
            />
            <Route 
              path="/login" 
              element={<Login setLoginUser={setLoginUser}/>} 
            />
            <Route 
              path="/register" 
              element={<Register />} 
            />
            <Route 
              path="/:id" 
              element={<SingleFilm />} 
            />
            <Route 
              path="/create" 
              element={<CreateFilm />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
