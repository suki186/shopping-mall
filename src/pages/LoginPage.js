import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


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
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {/* Form-Button-submit이면 onClick 대신 onSubmit */}
        <Button variant="outline-danger" type='submit'>
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default LoginPage