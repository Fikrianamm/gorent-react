import styled from "styled-components";
import { MyButton } from "./Button";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CategoryName = styled.div`
  border-radius: 0.5rem;
  flex-grow: 1;
  padding: 0.8rem;
  background-color: #f5f5f5;
`;

function ModalDeleteCategory(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Konfirmasi Hapus Kategori
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="m-0">
          Apakah Anda yakin ingin menghapus kategori{" "}
          <strong>{props.category.name}</strong>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary">Ya, hapus</Button>
          <MyButton onClick={props.onHide}>Kembali</MyButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function ModalEditCategory(props) {
  const [categoryName, setCategoryName] = useState(props.category.name);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Kategori
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="categoryName">
            <Form.Label className="fw-semibold">Nama Kategori</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama Kategori"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary" onClick={props.onHide}>
            Kembali
          </Button>
          <MyButton>Simpan</MyButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default function CategoryCard({ category }) {
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
  const [modalEditCategory, setModalEditCategory] = useState(false);

  return (
    <div className="d-flex gap-2">
      <CategoryName>{category.name}</CategoryName>
      <MyButton
        variant={"border-blue"}
        className={"d-flex gap-1 align-items-center"}
        onClick={() => setModalEditCategory(true)}
      >
        <CiEdit />
        <span className="d-none d-lg-inline">Edit</span>
      </MyButton>
      <MyButton
        variant={"border-red"}
        className={"d-flex gap-1 align-items-center"}
        onClick={() => setModalDeleteCategory(true)}
      >
        <MdOutlineDelete />
        <span className="d-none d-lg-inline">Hapus</span>
      </MyButton>
      <ModalDeleteCategory
        show={modalDeleteCategory}
        onHide={() => setModalDeleteCategory(false)}
        category={category}
      />
      <ModalEditCategory
        show={modalEditCategory}
        onHide={() => setModalEditCategory(false)}
        category={category}
      />
    </div>
  );
}
