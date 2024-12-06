import Topbar from "../../components/Topbar";
import { Back, MyButton } from "../../components/Button";
import { Header, PageContainer } from "../../components/SharedComponent";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { FiLock, FiUser, FiUserCheck } from "react-icons/fi";
import { Col, Container } from "react-bootstrap";
import { CHANGEPASS_PAGE, DASHBOARD_PAGE, EDITPROFILE_PAGE, VERIFICATION_PAGE } from "../../routes/routeConstant";
import useAuthStore from "../../zustand/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProfileMenu = styled(Container)`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  padding: 0 2rem;

  div > h5 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  div > p {
    font-size: 1rem;
    color: #7d7f88;
    margin: 0;
  }
`;

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  max-width: 350px;

  .active{
    color: #2D83B2;
  }
`;

const IconWrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuText = styled.span`
  flex: 1;
  margin-left: 15px;
  color: #3b3b3b;
  font-weight: 500;
  font-size: 1rem;
`;

const Arrow = styled.span`
  color: #c4c4c4;
  font-size: 1rem;
`;

const Content = styled(Col)`
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  h5 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #7d7f88;
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background: #f8f9fa;
    margin-bottom: 15px;
  }
`;

export default function ChangePassProfilePage() {
  const {user} = useAuthStore()
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      if(user.Role === "admin"){
        navigate(DASHBOARD_PAGE)
      }
    }
  },[navigate, user])
  
  return (
    <>
      <div className="d-none d-md-inline">
        <Topbar />
      </div>
      <PageContainer>
        {/* Header */}
        <Header className="d-md-none">
          <Back />
          <h5 className="m-0">Edit Profile</h5>
        </Header>
        <ProfileMenu>
          <Col md={4} className="d-none d-md-flex flex-column align-items-center align-items-md-start m-auto m-md-0">
            <div className="mb-5 mb-md-4 d-flex flex-column gap-2 text-center text-md-start">
              <h5>Fikri Taufiqul Anam</h5>
              <p>fikri@example.com</p>
            </div>
            <div className="d-flex flex-column gap-4 w-100">
              <MenuItem href={EDITPROFILE_PAGE}>
                <IconWrapper>
                  <FiUser size={18} />
                </IconWrapper>
                <MenuText>Edit Profile</MenuText>
                <Arrow>
                  <IoIosArrowForward/>
                </Arrow>
              </MenuItem>
              <MenuItem href={CHANGEPASS_PAGE}>
                <IconWrapper className="active">
                  <FiLock size={18} />
                </IconWrapper>
                <MenuText className="active">Ganti Password</MenuText>
                <Arrow className="active">
                  <IoIosArrowForward />
                </Arrow>
              </MenuItem>
              <MenuItem href={VERIFICATION_PAGE}>
                <IconWrapper>
                  <FiUserCheck size={18} />
                </IconWrapper>
                <MenuText>Verifikasi Akun</MenuText>
                <Arrow>
                  <IoIosArrowForward />
                </Arrow>
              </MenuItem>
            </div>
          </Col>
          <Col md={8}>
            <Content className="d-flex">
              <h5>Ganti Password</h5>
              <p>
                Kelola informasi profil Anda untuk mengontrol, melindungi, dan
                mengamankan akun.
              </p>
              <form>
                <label>Old Password</label>
                <input type="text" placeholder="******" />
                <label>Password</label>
                <input type="email" placeholder="******" />
                <label>Confirm Password</label>
                <input type="text" placeholder="******" />
                <div className="d-flex justify-content-end">
                    <MyButton type={"submit"}>Simpan</MyButton>
                </div>
              </form>
            </Content>
          </Col>
        </ProfileMenu>
      </PageContainer>
    </>
  );
}
