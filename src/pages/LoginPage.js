import React from 'react'
import '../css/LoginPage.css'
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'



const LoginPage = ({setAuthenticate}) => {

  const navigate = useNavigate();

  const loginUser =(event)=> {
    // 자동 새로고침 방지 (필수~)
    event.preventDefault();
    console.log("login user function");

    setAuthenticate(true); // 로그인 완료
    navigate("/"); // 메인화면으로
  };

  return (
    <Container>
      {/* Form: 입력받은 정보를 백엔드로 보내고 싶을 때 씀 (자동 새로고침 됨)*/}
      <Form onSubmit={(event) => loginUser(event)} className='login-form'>
        <h2 className='login-h2'>LOGIN</h2>
        <Form.Text className='login-msg'>For joy delivered to your inbox</Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FontAwesomeIcon icon={faEnvelope}/>
          <Form.Control type="email" placeholder="Enter email" className='login-input'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FontAwesomeIcon icon={faLock}/>
          <Form.Control type="password" placeholder="Password" className='login-input'/>
        </Form.Group>

        

        {/* Form-Button-submit이면 onClick 대신 onSubmit */}
        <Button variant="outline-danger" type='submit' className='login-btn'>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage