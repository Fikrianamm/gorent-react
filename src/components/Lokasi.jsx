import { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import { MyButton } from "./Button";

const CustomToggle = styled(Dropdown.Toggle)`
  background-color: transparent;
  padding: 0;
  border: 0;
  font-weight: 600;
  color: black;

  &:hover,
  &:focus,
  &:active,
  &.show {
    color: black;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

const CustomButton = styled(Button)`
  display: flex;
  background-color: transparent;
  border: none;
  font-weight: 600;
  padding: 0;
  gap: 1rem;
  color: black;

  &:hover,
  &:focus,
  &:active,
  &.show {
    color: black;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

function CenterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tentukan lokasi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="d-flex flex-column gap-2">
            <Form.Control placeholder="Lokasi Anda" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}>
          Tutup
        </Button>
        <MyButton variant={"primary-btn"}> Simpan </MyButton>
      </Modal.Footer>
    </Modal>
  );
}

export default function Lokasi({ direction = "vertical" }) {
  const [modalShow, setModalShow] = useState(false);

  switch (direction) {
    case "vertical":
      return (
        <div className="gap-3 mt-2 container-fluid d-none d-md-flex align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-geo-alt"></i>
            <p className="m-0">Lokasi</p>
          </div>
          <Dropdown>
            <CustomToggle id="dropdown-basic">Kudus</CustomToggle>

            <Dropdown.Menu>
              <Form className="mx-2 my-2">
                <Form.Group className="d-flex flex-column gap-2">
                  <Form.Control placeholder="Lokasi Anda" />
                  <MyButton variant={"primary-btn"} type="submit" className="w-100">
                    Simpan
                  </MyButton>
                </Form.Group>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    case "horizontal":
      return (
        <div>
          <p className="mb-0">Lokasi</p>

          <CustomButton onClick={() => setModalShow(true)}>
            Kudus
            <i className="bi bi-chevron-down"></i>
          </CustomButton>

          <CenterModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      );
  }
}
