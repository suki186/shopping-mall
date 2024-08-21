import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductDetail from './pages/ProductDetail';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';

//1. 전체상품, 로그인, 상품상세 페이지
//2. 전체상품 보여주기
//3. 로그인 버튼 -> 로그인 페이지
//4. 로그인이 안되었으면 -> 로그인 페이지
//5. 로그인 -> 상품상세 페이지 볼 수 있음
//6. 로그아웃 -> 로그인 페이지
//7. 로그인을 하면 로그아웃 버튼, 로그아웃 하면 로그인 버튼
//8. 상품 검색

function App() {
  return (
    <div>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product/:id' element={<ProductDetail />} />

      </Routes>
    </div>
  );
}

export default App;
