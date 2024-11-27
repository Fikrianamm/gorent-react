import Topbar from "../../components/Topbar";
import { Back } from "../../components/Button";
import { Header, PageContainer } from "../../components/SharedComponent";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { FiLock, FiUser, FiUserCheck } from "react-icons/fi";
import {
  Button,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
} from "react-bootstrap";
import {
  CHANGEPASS_PAGE,
  EDITPROFILE_PAGE,
  VERIFICATION_PAGE,
} from "../../routes/routeConstant";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

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

  .active {
    color: #2d83b2;
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

const StepWrapper = styled.div`
  margin: 2rem 0;
`;

const StepHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .step-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .step-number {
    background-color: ${(props) => (props.active ? "#007bff" : "#e9ecef")};
    color: ${(props) => (props.active ? "white" : "#6c757d")};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;

export default function VerificationAccountPage() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [ktpFile, setKtpFile] = useState(null);

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setKtpFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (ktpFile) {
      console.log("KTP File:", ktpFile);
      alert("Verifikasi selesai!");
    } else {
      alert("Harap upload foto KTP.");
    }
  };

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
          <Col
            md={4}
            className="d-none d-md-flex flex-column align-items-center align-items-md-start m-auto m-md-0"
          >
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
                  <IoIosArrowForward />
                </Arrow>
              </MenuItem>
              <MenuItem href={CHANGEPASS_PAGE}>
                <IconWrapper>
                  <FiLock size={18} />
                </IconWrapper>
                <MenuText>Ganti Password</MenuText>
                <Arrow>
                  <IoIosArrowForward />
                </Arrow>
              </MenuItem>
              <MenuItem href={VERIFICATION_PAGE}>
                <IconWrapper className="active">
                  <FiUserCheck size={18} />
                </IconWrapper>
                <MenuText className="active">Verifikasi Akun</MenuText>
                <Arrow className="active">
                  <IoIosArrowForward />
                </Arrow>
              </MenuItem>
            </div>
          </Col>
          <Col md={8}>
            <Content className="d-flex">
              <h5>Verifikasi Akun</h5>
              <p>
                Kelola informasi profil Anda untuk mengontrol, melindungi, dan
                mengamankan akun.
              </p>
              <Container>
                <StepWrapper>
                  <StepHeader active={step === 1}>
                    <span className="step-title">1. Verifikasi Nomor HP</span>
                    <div className="step-number">
                      {step === 1 ? (
                        <GoDotFill />
                      ) : step === 2 ? (
                        <FaCheck />
                      ) : (
                        ""
                      )}
                    </div>
                  </StepHeader>
                  <StepHeader active={step === 2}>
                    <span className="step-title">2. Verifikasi KTP</span>
                    <div className="step-number">
                      {step === 2 ? <GoDotFill /> : ""}
                    </div>
                  </StepHeader>
                </StepWrapper>

                <ProgressBar now={(step / 2) * 100} />

                <Form style={{ marginTop: "2rem" }}>
                  {step === 1 && (
                    <>
                      <Form.Group className="mb-3">
                        <Form.Label>Nomor HP</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="08XXXXXXXXXX"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </Form.Group>
                      <Button variant="primary" className="mb-3">
                        Kirim Kode
                      </Button>
                      <Form.Group className="mb-3">
                        <Form.Label>Kode OTP</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="0000"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </Form.Group>
                    </>
                  )}
                  {step === 2 && (
                    <div>
                      <p>Verifikasi KTP</p>
                      {/* Tambahkan input/file upload untuk KTP */}
                      <Form.Group className="mb-3">
                        <Form.Label>Upload Foto KTP</Form.Label>
                        <Form.Control
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        {ktpFile && (
                          <p className="mt-2">File: {ktpFile.name}</p>
                        )}
                      </Form.Group>
                    </div>
                  )}
                  <Row>
                    <Col>
                      {step > 1 && (
                        <Button variant="outline-primary" onClick={handleBack}>
                          Kembali
                        </Button>
                      )}
                    </Col>
                    <Col className="text-end">
                      {step < 2 ? (
                        <Button variant="primary" onClick={handleNext}>
                          Lanjut
                        </Button>
                      ) : (
                        <Button variant="primary" onClick={handleSubmit}>
                          Selesai
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Form>
              </Container>
            </Content>
          </Col>
        </ProfileMenu>
      </PageContainer>
    </>
  );
}
