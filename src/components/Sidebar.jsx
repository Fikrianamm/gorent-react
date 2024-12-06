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
import { useNavigate } from "react-router-dom";
import {
  CATEGORYADMIN_PAGE,
  DASHBOARD_PAGE,
  ORDERADMIN_PAGE,
  PRODUCTADMIN_PAGE,
} from "../routes/routeConstant";

const CategorySidebar = styled.small`
  color: #b4b4b4;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: .5rem;
`;

const LogInfo = styled.div`
  padding: 1rem;
  background-color: #e0f3fd;
  border-radius: 8px;
`;

export function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function SidebarSticky() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const [modalSignOut, setModalSignOut] = useState(false);
  const navigate = useNavigate();

  function handleChangeMenu(menu) {
    setSelectedMenu(menu);
    if (menu === "dashboard") {
      navigate(DASHBOARD_PAGE);
    } else if (menu === "order") {
      navigate(ORDERADMIN_PAGE);
    } else if (menu === "produk") {
      navigate(PRODUCTADMIN_PAGE);
    } else if (menu === "kategori") {
      navigate(CATEGORYADMIN_PAGE);
    }
  }

  return (
    <SidebarContainer className="d-none d-md-flex flex-column justify-content-between">
      <div className="d-flex flex-column">
        <Logo size768={120} size1280={160} />
        <div className="d-flex flex-column gap-2 mt-5">
          <CategorySidebar>MENU</CategorySidebar>
          <MyButton
            active={selectedMenu === "dashboard"}
            onClick={() => handleChangeMenu("dashboard")}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <MdOutlineDashboard />
            Dashboard
          </MyButton>
          <MyButton
            active={selectedMenu === "order"}
            onClick={() => handleChangeMenu("order")}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <FiShoppingBag />
            Order
          </MyButton>
          <MyButton
            active={selectedMenu === "produk"}
            onClick={() => handleChangeMenu("produk")}
            className={
              "d-flex justify-content-start align-items-center gap-2 mb-1"
            }
            variant={"border-grey"}
          >
            <FiBox />
            Produk
          </MyButton>
          <MyButton
            active={selectedMenu === "kategori"}
            onClick={() => handleChangeMenu("kategori")}
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
            src="https://ui-avatars.com/api/?name=Sulthon"
            alt="image-profile"
          />
          <div className="d-flex flex-column">
            <p className="m-0 fw-semibold">Sulthon</p>
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
