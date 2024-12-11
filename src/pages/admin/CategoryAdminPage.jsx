import { Sidebar, SidebarSticky } from "../../components/Sidebar";
import {
  AdminContainer,
  CardContainer,
  MainContentAdmin,
  SearchContainer,
  SearchInput,
} from "../../components/SharedComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";
import { ERROR_PAGE, PRODUCTADD_PAGE } from "../../routes/routeConstant";
import { Button, Form, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { categories } from "../../utils/data";
import styled from "styled-components";
import { GoPlusCircle } from "react-icons/go";
import { MyButton } from "../../components/Button";
import { FaPlus } from "react-icons/fa";
import CategoryCard from "../../components/CategoryCard";

const ButtonPlus = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

const CustomButtonFloat = styled(Button)`
  padding: 0.8rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d83b2;
  border: none;
  transition: all 0.3s;

  &:hover {
    background-color: #2a79a3;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

function ModalAddCategory(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tambah Kategori
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="categoryName">
            <Form.Label className="fw-semibold">Nama Kategori</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama Kategori"
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
          <MyButton>Tambah</MyButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default function CategoryAdminPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [modalAddCategory, setModalAddCategory] = useState(false);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tambah kategori
    </Tooltip>
  );

  useEffect(() => {
    if (user) {
      if (user.Role === "user") {
        navigate(ERROR_PAGE);
      }
    }
  }, [navigate, user]);

  return (
    <AdminContainer>
      <div className="d-flex gap-3 p-3">
        <SidebarSticky />

        <MainContentAdmin>
          <CardContainer className="d-flex align-items-center d-lg-none mb-3 gap-3">
            <Sidebar />
            <h5 className="m-0">Kategori</h5>
          </CardContainer>
          <CardContainer className="d-flex flex-column">
            <div className="d-flex gap-3">
              <SearchContainer className="flex-grow-1">
                <Form className="d-flex align-items-center">
                  <SearchInput type="text" placeholder="Cari Kategori" />
                  <Button type="submit" className="bg-transparent p-0 border-0">
                    <i className="bi bi-search me-2 text-muted"></i>
                  </Button>
                </Form>
              </SearchContainer>
              <MyButton
                onClick={() => setModalAddCategory(true)}
                className={"d-lg-flex d-none align-items-center gap-2"}
              >
                <FaPlus />
                Tambah kategori
              </MyButton>
            </div>
            <strong className="m-2 mt-3">{categories.length} Kategori</strong>
            <div className="d-flex flex-column gap-2">
              {categories.map((category) => (
                <CategoryCard category={category} key={category.id} />
              ))}
            </div>
          </CardContainer>
          <ButtonPlus className="d-lg-none">
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <CustomButtonFloat onClick={() => setModalAddCategory(true)}>
                <GoPlusCircle size={24} />
              </CustomButtonFloat>
            </OverlayTrigger>
          </ButtonPlus>
        </MainContentAdmin>
      </div>
      <ModalAddCategory
        show={modalAddCategory}
        onHide={() => setModalAddCategory(false)}
      />
    </AdminContainer>
  );
}
