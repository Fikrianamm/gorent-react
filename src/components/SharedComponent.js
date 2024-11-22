import { Container } from "react-bootstrap";
import styled from "styled-components";

export const PageContainer = styled(Container)`
  margin-top: 20px;
  padding-bottom: 120px;
  min-width: 100dvw;
  min-height: 100dvh;
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