import { categories } from "../utils/data";
import Avatar from "./Avatar";
import Lokasi from "./Lokasi";

import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import Logo from "./Logo";

const CategoryWrapper = styled.div`
  display: none;
  margin-right: 1rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const StyledDropdown = styled(Dropdown)`
  .dropdown-menu {
    min-width: 200px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #eee;
    margin-top: 0;
    display: ${(props) => (props.isHovered ? "block" : "none")} !important;
  }
`;

const StyledToggle = styled(Dropdown.Toggle)`
  background: transparent !important;
  border: none !important;
  padding: 0;
  color: black;

  &:after {
    color: black;
    display: none;
  }

  &:hover,
  &:focus,
  &:active {
    color: black;
    background: transparent !important;
    box-shadow: none !important;
  }
`;

const DropdownItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledOption = styled(Dropdown.Item)`
  &:hover {
    background-color: #f8f9fa;
  }
  padding: 8px 12px;
`;

const SearchContainer = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 8px 16px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  padding: 4px;
`;

function Kategori() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CategoryWrapper>
      <StyledDropdown
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      >
        <StyledToggle>Kategori</StyledToggle>

        <Dropdown.Menu>
          <DropdownItemWrapper>
            {categories.map((category) => (
              <StyledOption
                key={category.id}
                onClick={() => {
                  // Add your click handler here
                  console.log(`Selected category: ${category.name}`);
                }}
              >
                {category.name}
              </StyledOption>
            ))}
          </DropdownItemWrapper>
        </Dropdown.Menu>
      </StyledDropdown>
    </CategoryWrapper>
  );
}

function CenterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Filter</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="categoryDropdown ">Kategori</label>
          <Form.Select className="w-50">
            <option>Pilih kategori</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="categoryDropdown ">Kondisi</label>
          <Form.Select className="w-50">
            <option>Pilih kondisi</option>
            <option value="1">Sangat baik</option>
            <option value="2">Baik</option>
            <option value="3">Layak pakai</option>
          </Form.Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="w-100"> Filter </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Topbar() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between container-fluid mt-4 align-items-end d-md-none">
        <Lokasi direction="horizontal" />

        <Avatar />
      </div>

      {/* <!-- Header with Search and Icons --> */}
      <div className="container-fluid d-flex justify-content-between align-items-center mb-md-0 mt-4">
        <div className="d-none d-md-inline">
          <Logo />
        </div>

        <Kategori />

        <SearchContainer className="flex-grow-1 me-3">
          <div className="d-flex align-items-center">
            <i className="bi order-md-last bi-search me-2 text-muted"></i>
            <SearchInput type="text" placeholder="Cari Produk" />
          </div>
        </SearchContainer>
        <div className="d-flex gap-3">
          <Button
            className="d-md-none"
            variant="light"
            onClick={() => setModalShow(true)}
          >
            <i className="bi bi-filter"></i>
          </Button>
          <button className="btn btn-light">
            <i className="bi bi-bag"></i>
          </button>

          <CenterModal show={modalShow} onHide={() => setModalShow(false)} />

          <div className="d-none d-md-flex">
            <Avatar />
          </div>
        </div>
      </div>

      <Lokasi direction="vertical" />
    </div>
  );
}
