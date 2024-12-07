import { Card, Col, Container } from "react-bootstrap";
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
  /* width: 100%;
  height: 100%; */
`;

export const MainContentAdmin = styled(Col)`
  height: max-content;
`;

export const TopItemsCard = styled(Card)`
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
