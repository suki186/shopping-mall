import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import ProductDetail from './pages/ProductDetail';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {

  const [authenticate, setAuthenticate] = useState(false); // true면 로그인 됨

  useEffect(()=> {
    console.log("login status: ", authenticate);
  }, [authenticate]);

  return (
    <div>

      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />

      </Routes>
    </div>
  );
}

export default App;
