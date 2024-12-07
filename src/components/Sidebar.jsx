import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import styled from "styled-components";
import { MdOutlineDashboard } from "react-icons/md";
import { SidebarContainer } from "./SharedComponent";
import Logo from "./Logo";
import { MyButton } from "./Button";
import { FiBox, FiShoppingBag } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { ImgProfile, ModalSignOut } from "./Avatar";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CATEGORYADMIN_PAGE,
  DASHBOARD_PAGE,
  ORDERADMIN_PAGE,
  PRODUCTADMIN_PAGE,
} from "../routes/routeConstant";
import { BiMenuAltLeft } from "react-icons/bi";

const CategorySidebar = styled.small`
  color: #b4b4b4;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const LogInfo = styled.div`
  padding: 1rem;
  background-color: #e0f3fd;
  border-radius: 8px;
`;

const ButtonMenu = styled.button`
  border-radius: 5px;
  background-color: transparent;
  border:none;
  transition: all .3s;
  
  &:hover{
    background-color: #e9f5fc;
    color: #2d83b2;
  }
`;

export function Sidebar() {
  const [show, setShow] = useState(false);
  const [modalSignOut, setModalSignOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleChangeMenu(route) {
    navigate(route);
    setShow(false);
  }

  return (
    <>
      <ButtonMenu onClick={handleShow}>
        <BiMenuAltLeft/>
      </ButtonMenu>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo size768={120} size1280={160} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="h-100 d-flex flex-column justify-content-between">
            <div className="d-flex flex-column">
              <div className="d-flex flex-column gap-2 mt-5">
                <CategorySidebar>MENU</CategorySidebar>
                <MyButton
                  active={
                    location.pathname.toLocaleLowerCase() === DASHBOARD_PAGE
                  }
                  onClick={() => handleChangeMenu(DASHBOARD_PAGE)}
                  className={
                    "d-flex justify-content-start align-items-center gap-2 mb-1"
                  }
                  variant={"border-grey"}
                >
                  <MdOutlineDashboard />
                  Dashboard
                </MyButton>
                <MyButton
                  active={
                    location.pathname.toLocaleLowerCase() === ORDERADMIN_PAGE
                  }
                  onClick={() => handleChangeMenu(ORDERADMIN_PAGE)}
                  className={
                    "d-flex justify-content-start align-items-center gap-2 mb-1"
                  }
                  variant={"border-grey"}
                >
                  <FiShoppingBag />
                  Order
                </MyButton>
                <MyButton
                  active={
                    location.pathname.toLocaleLowerCase() === PRODUCTADMIN_PAGE
                  }
                  onClick={() => handleChangeMenu(PRODUCTADMIN_PAGE)}
                  className={
                    "d-flex justify-content-start align-items-center gap-2 mb-1"
                  }
                  variant={"border-grey"}
                >
                  <FiBox />
                  Produk
                </MyButton>
                <MyButton
                  active={
                    location.pathname.toLocaleLowerCase() === CATEGORYADMIN_PAGE
                  }
                  onClick={() => handleChangeMenu(CATEGORYADMIN_PAGE)}
                  className={
                    "d-flex justify-content-start align-items-center gap-2 mb-1"
                  }
                  variant={"border-grey"}
                >
                  <BsBoxSeam />
                  Kategori
                </MyButton>
              </div>
            </div>
            <LogInfo className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <ImgProfile
                  src="https://ui-avatars.com/api/?name=Andar"
                  alt="image-profile"
                />
                <div className="d-flex flex-column">
                  <p className="m-0 fw-semibold">Andar</p>
                  <small className="m-0">Admin</small>
                </div>
              </div>
              <button
                onClick={() => setModalSignOut(true)}
                className="p-0 bg-transparent border-0"
              >
                <i
                  className="bi bi-box-arrow-right"
                  style={{
                    color: "#389CE8",
                  }}
                ></i>
              </button>
            </LogInfo>
            <ModalSignOut
              show={modalSignOut}
              onHide={() => setModalSignOut(false)}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function SidebarSticky() {
  const [modalSignOut, setModalSignOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleChangeMenu(route) {
    navigate(route);
  }

  return (
    <SidebarContainer className="d-none d-lg-flex flex-column justify-content-between">
      <div className="d-flex flex-column">
        <Logo size768={120} size1280={160} />
        <div className="d-flex flex-column gap-2 mt-5">
          <CategorySidebar>MENU</CategorySidebar>
          <MyButton
            active={location.pathname.toLocaleLowerCase() === DASHBOARD_PAGE}
            onClick={() => handleChangeMenu(DASHBOARD_PAGE)}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <MdOutlineDashboard />
            Dashboard
          </MyButton>
          <MyButton
            active={location.pathname.toLocaleLowerCase() === ORDERADMIN_PAGE}
            onClick={() => handleChangeMenu(ORDERADMIN_PAGE)}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <FiShoppingBag />
            Order
          </MyButton>
          <MyButton
            active={location.pathname.toLocaleLowerCase() === PRODUCTADMIN_PAGE}
            onClick={() => handleChangeMenu(PRODUCTADMIN_PAGE)}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <FiBox />
            Produk
          </MyButton>
          <MyButton
            active={
              location.pathname.toLocaleLowerCase() === CATEGORYADMIN_PAGE
            }
            onClick={() => handleChangeMenu(CATEGORYADMIN_PAGE)}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <BsBoxSeam />
            Kategori
          </MyButton>
        </div>
      </div>
      <LogInfo className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <ImgProfile
            src="https://ui-avatars.com/api/?name=Andar"
            alt="image-profile"
          />
          <div className="d-flex flex-column">
            <p className="m-0 fw-semibold">Andar</p>
            <small className="m-0">Admin</small>
          </div>
        </div>
        <button
          onClick={() => setModalSignOut(true)}
          className="p-0 bg-transparent border-0"
        >
          <i
            className="bi bi-box-arrow-right"
            style={{
              color: "#389CE8",
            }}
          ></i>
        </button>
      </LogInfo>
      <ModalSignOut show={modalSignOut} onHide={() => setModalSignOut(false)} />
    </SidebarContainer>
  );
}
