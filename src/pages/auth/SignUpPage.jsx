import styled from "styled-components";
import { MyButton } from "../../components/Button";
import { DASHBOARD_PAGE, HOME_PAGE, SIGNIN_PAGE } from "../../routes/routeConstant";
import { useEffect } from "react";
import useAuthStore from "../../zustand/authStore";
import { useNavigate } from "react-router-dom";

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

export default function SignUpPage() {
  const {user} = useAuthStore()
  const navigate = useNavigate()

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
              Buat akun baru
              </h2>
            </div>

            <form action="/signup" method="POST">
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama</label>
              <input
                type="text"
                className="form-control"
                id="nama"
                name="nama"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Example@gmail.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirm-password"
                placeholder="********"
                required
              />
            </div>
            <MyButton type="submit" className="w-100 mb-3">
              Sign Up
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
              Sudah punya akun?{" "}
              <a href={SIGNIN_PAGE} className="text-decoration-none">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
      <Wave />
    </Body>
  );
}
