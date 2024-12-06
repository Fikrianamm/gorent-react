import styled from "styled-components";
import { MyButton } from "../../components/Button";
import { users } from "../../utils/data";
import { useEffect, useState } from "react";
import useAuthStore from "../../zustand/authStore";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_PAGE, HOME_PAGE } from "../../routes/routeConstant";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  overflow-x: hidden;
`;

const Wave = styled.div`
  position: fixed;
  bottom: -100px;
  left: 0;
  width: 100%;
  height: 300px;
  background: #f5f5f5;
  border-radius: 100% 100% 0 0;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;

  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #dee2e6;
  }

  &::before {
    content: "";
    flex: 1;
    border-bottom: 1px solid #dee2e6;
  }
`;

const Or = styled.span`
  padding: 0 10px;
  color: #6c757d;
`;

const AuthBtn = styled.button`
  border: 1px solid #dee2e6;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  background: white;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

export default function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, user } = useAuthStore();

  const handleSignIn = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.Email === email && user.Password === password
    );

    if (!foundUser) {
      setError("Invalid email or password. Please try again.");
    } else {
      setError("");
      login(foundUser); 
      console.log(user);
      
      if(user.Role === "admin"){
        navigate(DASHBOARD_PAGE)
      }else if (user.Role === "user"){
        navigate(HOME_PAGE)
      }
    }
  };

  useEffect(()=>{
    if(user){
      if(user.Role === "admin"){
        navigate(DASHBOARD_PAGE)
      }else if(user.Role === "user"){
        navigate(HOME_PAGE)
      }
    }
  },[navigate, user])

  return (
    <Body>
      <div className="container z-1">
        <div className="row justify-content-center z-1">
          <div className="col-md-6 col-10">
            <div className="mb-4 d-flex flex-column align-items-center">
              <img
                className="img-fluid me-3"
                src="/assets/images/GoRent.png"
                alt="logo GoRent"
              />
              <h2 className="fw-bold mb-4 mt-5 fs-1 w-100">
                Masuk ke akun Anda
              </h2>
            </div>

            <form onSubmit={handleSignIn} method="POST">
              <div className="mb-3">
              {error && <Alert variant="danger">{error}</Alert>}
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <MyButton type="submit" className="w-100 mb-3">
                Sign In
              </MyButton>
            </form>

            <Divider>
              <Or>atau</Or>
            </Divider>

            <AuthBtn>
              <img src="/assets/icons/google.svg" alt="Google" width="20" />
              <span>Google</span>
            </AuthBtn>
            <AuthBtn>
              <img src="/assets/icons/facebook.svg" alt="Facebook" width="20" />
              <span>Facebook</span>
            </AuthBtn>

            <p className="text-center mt-4">
              Belum punya akun?{" "}
              <a href="/signup" className="text-decoration-none">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Wave />
    </Body>
  );
}
