import { useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { MyButton } from "./Button";
import useAuthStore from "../zustand/authStore";
import { HOME_PAGE } from "../routes/routeConstant";
import { useNavigate } from "react-router-dom";
import { ImgProfile } from "./SharedComponent";

export function ModalSignOut(props) {
  const { logout } = useAuthStore();
  const navigate = useNavigate()

  function handleSignOut() {
    logout();
    props.onHide();
    navigate(HOME_PAGE)

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Konfirmasi Sign Out
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="m-0">Apakah Anda yakin ingin keluar dari Aplikasi?</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" onClick={handleSignOut}>
            Ya, Sign Out
          </Button>
          <MyButton onClick={props.onHide}>Kembali</MyButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default function Avatar() {
  const [modalSignOut, setModalSignOut] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Toggle
        className="p-0 bg-transparent border-0"
        id="dropdown-basic"
        bsPrefix="dropdown"
      >
        <ImgProfile
          src="https://ui-avatars.com/api/?name=Fikri"
          alt="image-profile"
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="mt-2">
        <LinkContainer to="/profile">
          <Dropdown.Item className="d-flex gap-3">
            <i className="bi bi-person"></i>
            Profile
          </Dropdown.Item>
        </LinkContainer>

        <LinkContainer to="/about">
          <Dropdown.Item className="d-flex gap-3">
            <i className="bi bi-info-circle"></i>
            About
          </Dropdown.Item>
        </LinkContainer>

        <Dropdown.Item
          onClick={() => setModalSignOut(true)}
          className="text-danger d-flex gap-3"
        >
          <i className="bi bi-box-arrow-right"></i>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
      <ModalSignOut show={modalSignOut} onHide={() => setModalSignOut(false)} />
    </Dropdown>
  );
}
