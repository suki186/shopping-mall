import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import ProductDetail from './pages/ProductDetail';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품, 로그인, 상품상세 페이지
//2. 전체상품 보여주기
//3. 로그인 버튼 -> 로그인 페이지
//4. 로그인이 안되었으면 -> 로그인 페이지
//5. 로그인 -> 상품상세 페이지 볼 수 있음
//6. 로그아웃 -> 로그인 페이지
//7. 로그인을 하면 로그아웃 버튼, 로그아웃 하면 로그인 버튼
//8. 상품 검색
//9. 로딩스피너

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
