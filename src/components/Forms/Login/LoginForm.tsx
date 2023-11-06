import LogoComponent from "@/components/Header/logo";
import { Button, Form } from "react-bootstrap";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const LoginForm = () => {
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mailValue.trim() && passwordValue.trim()) {
      localStorage.setItem("user", JSON.stringify({ email: mailValue }));
      router.push("/");
      setMailValue("");
      setPasswordValue("");
    } else {
      setErrorMessage("Please fill in both email and password.");
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.push("/");
    }
  }, [router]);
  return (
    <div className={style.LoginForm}>
      <LogoComponent />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          value={mailValue}
            type="email"
            placeholder="Enter email"
            onChange={(e) => setMailValue(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Text className={style.text}>
          Немаш профил?{" "}
          <span className={style.register}>
            <Link href={"/register"}>Регистрирај се</Link>
          </span>
        </Form.Text>
        <Button type="submit">Submit</Button>
        <Button type="submit" className={style.secButton}>
          Sign in using Google
        </Button>
        <Button type="submit" className={style.secButton}>
          Sign in using Facebook
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
