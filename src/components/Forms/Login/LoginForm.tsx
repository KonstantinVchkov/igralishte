import LogoComponent from "@/components/Header/logo";
import { Button, Form } from "react-bootstrap";
import style from "./style.module.css";
import { useState } from "react";
const LoginForm = () => {
  const [mailValue,setMailValue] = useState('')
  const [passwordValue,setPasswordValue] = useState('')
  const handleLogin = (e:React.FormEvent) => {
    e.preventDefault()
    console.log("this is the value from the login form",mailValue)
    localStorage.setItem("mail",mailValue)
    localStorage.setItem("password",passwordValue)
  }
  return (
    <div className={style.LoginForm}>
      <LogoComponent />
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setMailValue(e.target.value)}/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPasswordValue(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
