import { Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const ImgProfile = styled.img`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export default function Avatar() {
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
          // onClick={handleSignOut}
          className="text-danger d-flex gap-3"
        >
          <i className="bi bi-box-arrow-right"></i>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
