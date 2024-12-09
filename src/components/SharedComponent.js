import { Card, Col, Container, Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const PageContainer = styled(Container)`
  margin-top: 20px;
  padding-bottom: 120px;
  min-width: 100dvw;
  min-height: 100dvh;
`;

export const AdminContainer = styled(Container)`
  min-width: 100dvw;
  min-height: 100dvh;
  background-color: #eef5fa;
  padding: 0;
`;

export const SidebarContainer = styled.div`
  padding: 1.5rem;
  border-radius: 0.8rem;
  background-color: white;
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: calc(100vh - 2rem);
  position: sticky;
  top: 1rem;
  overflow: auto;
`;

export const CardContainer = styled(Container)`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.1);
`;

export const MainContentAdmin = styled(Container)`
  padding: 0;
`;

export const TopItemsCard = styled(Card)`
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SearchContainer = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  padding: 4px;
`;

export const ImgProfile = styled.img`
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

export const StyledToggle = styled(Dropdown.Toggle)`
  background: transparent !important;
  border: none !important;
  padding: 2px;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Price = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;

export const PricePeriod = styled.span`
  font-size: 0.875rem;
  color: #666;
  font-weight: normal;
  margin-left: 4px;
`;
