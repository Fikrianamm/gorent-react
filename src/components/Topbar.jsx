import { categories } from "../utils/data";
import Avatar from "./Avatar";
import Lokasi from "./Lokasi";

import "../index.css";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

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
    display: ${props => props.isHovered ? 'block' : 'none'} !important;
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
        <StyledToggle>
          Kategori
        </StyledToggle>
        
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

export default function Topbar() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between container-fluid mt-4 align-items-end d-md-none">
        <Lokasi direction="horizontal" />

        <Avatar />
      </div>

      {/* <!-- Header with Search and Icons --> */}
      <div className="container-fluid d-flex justify-content-between align-items-center mb-md-0 mt-4">
        <img
          className="d-none d-md-inline img-fluid logo-goRent me-3"
          src="/assets/images/GoRent.png"
          alt="logo GoRent"
        />

        <Kategori />

        <div className="search-container flex-grow-1 me-3">
          <div className="d-flex align-items-center">
            <i className="bi order-md-last bi-search me-2 text-muted"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Cari Produk"
            />
          </div>
        </div>
        <div className="d-flex gap-3">
          <button
            className="btn btn-light d-md-none"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#filter"
          >
            <i className="bi bi-filter"></i>
          </button>
          <button className="btn btn-light">
            <i className="bi bi-bag"></i>
          </button>

          {/* <!-- Modal Filter start --> */}
          <div
            className="modal fade"
            id="filter"
            tabIndex="-1"
            aria-labelledby="filterLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="filterLabel">
                    Filter
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="categoryDropdown ">Kategori</label>
                    <select className="form-control w-50" id="categoryDropdown">
                      <option disabled>Pilih kategori</option>
                      {categories.forEach((category) => (
                        <option>{category.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="categoryDropdown ">Kondisi</label>
                    <select className="form-control w-50" id="categoryDropdown">
                      <option disabled>Pilih kondisi</option>
                      <option>Sangat baik</option>
                      <option>Baik</option>
                      <option>Layak pakai</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary w-100">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal Filter end --> */}

          <div className="d-none d-md-flex">
            <Avatar />
          </div>
        </div>
      </div>

      <Lokasi direction="vertical" />
    </div>
  );
}
