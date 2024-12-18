import { categories } from "../utils/data";
import Avatar from "./Avatar";
import Lokasi from "./Lokasi";

import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { MyButton } from "./Button";
import useProductStore from "../zustand/productStore";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ORDER_PAGE, SIGNIN_PAGE, SIGNUP_PAGE } from "../routes/routeConstant";
import useAuthStore from "../zustand/authStore";
import { SearchContainer, SearchInput, StyledToggle } from "./SharedComponent";

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

function Kategori() {
  const { setCategory } = useProductStore();
  const [isHovered, setIsHovered] = useState(false);
  const [searchParams] = useSearchParams();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setCategory(category);
    }
  }, [setCategory, searchParams]);

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
            <StyledOption
              onClick={() => {
                setCategory(null);
              }}
            >
              Semua
            </StyledOption>
            {categories.map((category) => (
              <StyledOption
                key={category.id}
                onClick={() => {
                  setCategory(category.name);
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
  const {
    selectedCategory,
    selectedCondition,
    setCategory,
    setCondition,
    searchValue,
    applyFilters
  } = useProductStore();

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleFilter = () => {
    const params = {};

    if (searchValue) {
      params.search = searchValue;
    }

    if (selectedCategory) {
      params.category = selectedCategory;
    }

    if (selectedCondition) {
      params.condition = selectedCondition;
    }

    if (Object.keys(params).length > 0) {
      navigate("/search");
      setSearchParams(params);
      applyFilters()
      props.onHide();
    }
  };

  useEffect(() => {
    const category = searchParams.get("category");
    const condition = searchParams.get("condition");
    if (category) {
      setCategory(category);
    }
    if (condition) {
      setCondition(condition);
    }
  }, [setCategory, setCondition, searchParams]);

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
          <Form.Select
            className="w-50"
            value={selectedCategory || ""}
            onChange={handleCategoryChange}
          >
            <option value={""}>Pilih kategori</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label htmlFor="categoryDropdown ">Kondisi</label>
          <Form.Select
            className="w-50"
            value={selectedCondition || ""}
            onChange={handleConditionChange}
          >
            <option value={""}>Pilih kondisi</option>
            <option value="Sangat baik">Sangat baik</option>
            <option value="Baik">Baik</option>
            <option value="Layak pakai">Layak pakai</option>
          </Form.Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <MyButton
          variant={"primary-btn"}
          className="w-100"
          onClick={() => handleFilter()}
        >
          Filter
        </MyButton>
      </Modal.Footer>
    </Modal>
  );
}

export default function Topbar() {
  const { applyFilters, selectedCategory, selectedCondition, searchValue, setSearchValue } =
    useProductStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleSetQuery = (e) => {
    e.preventDefault();
    const params = {};

    if (searchValue) {
      params.search = searchValue;
    }

    if (selectedCategory) {
      params.category = selectedCategory;
    }

    if (selectedCondition) {
      params.condition = selectedCondition;
    }

    if (Object.keys(params).length > 0) {
      navigate("/search");
      setSearchParams(params);
      applyFilters()
    }
  };

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchValue(search);
    }
  }, [setSearchValue, searchParams]);

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between container-fluid mt-4 align-items-end d-md-none">
        <Lokasi direction="horizontal" />

        {user ? (
          <Avatar />
        ) : (
          <MyButton
            variant={"clicked-btn"}
            onClick={() => {
              navigate(SIGNIN_PAGE);
            }}
          >
            Masuk
          </MyButton>
        )}
      </div>

      {/* <!-- Header with Search and Icons --> */}
      <div className="container-fluid d-flex justify-content-between align-items-center mb-md-0 mt-4">
        <div className="d-none d-md-inline">
          <Logo />
        </div>

        <Kategori />

        <SearchContainer className="flex-grow-1 me-3">
          <Form onSubmit={handleSetQuery} className="d-flex align-items-center">
            <SearchInput
              type="text"
              placeholder="Cari Produk"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button type="submit" className="bg-transparent p-0 border-0">
              <i className="bi bi-search me-2 text-muted"></i>
            </Button>
          </Form>
        </SearchContainer>
        <div className="d-flex gap-3">
          <Button
            className="d-md-none"
            variant="light"
            onClick={() => setModalShow(true)}
          >
            <i className="bi bi-filter"></i>
          </Button>
          <button
            className="btn btn-light"
            onClick={() => navigate(ORDER_PAGE)}
          >
            <i className="bi bi-bag"></i>
          </button>

          <CenterModal show={modalShow} onHide={() => setModalShow(false)} />

          <div className="d-none d-md-flex">
            {user ? (
              <Avatar />
            ) : (
              <div className="d-flex gap-1">
                <MyButton
                  variant={"border-blue"}
                  onClick={() => {
                    navigate(SIGNIN_PAGE);
                  }}
                >
                  Masuk
                </MyButton>
                <MyButton
                  onClick={() => {
                    navigate(SIGNUP_PAGE);
                  }}
                >
                  Daftar
                </MyButton>
              </div>
            )}
          </div>
        </div>
      </div>

      <Lokasi direction="vertical" />
    </div>
  );
}
