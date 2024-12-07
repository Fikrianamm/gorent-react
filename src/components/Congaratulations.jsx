import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "react-bootstrap";

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

const SubHeader = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
`;

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor || "#ddd"};
  margin-right: 15px;
`;

const OrderText = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderCount = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const OrderStatus = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const Illustration = styled(Image)`
  max-width: 100%;
  border-radius: 10px;
`;

const Congratulations = () => {
  return (
    <Container>
      <Row >
        <Col md={8} className="w-100">
          <Header>Congratulations Andar</Header>
          <SubHeader>You have done 38% more sales</SubHeader>
          <OrderItem>
            <IconWrapper bgColor="#e0f7fa">
              <i className="bi bi-bag"></i>
            </IconWrapper>
            <OrderText>
              <OrderCount>64 new orders</OrderCount>
              <OrderStatus>Processing</OrderStatus>
            </OrderText>
          </OrderItem>
          <OrderItem>
            <IconWrapper bgColor="#fff3e0">
              <i className="bi bi-hourglass-split"></i>
            </IconWrapper>
            <OrderText>
              <OrderCount>4 orders</OrderCount>
              <OrderStatus>On hold</OrderStatus>
            </OrderText>
          </OrderItem>
          <OrderItem>
            <IconWrapper bgColor="#e8f5e9">
              <i className="bi bi-check-circle"></i>
            </IconWrapper>
            <OrderText>
              <OrderCount>12 orders</OrderCount>
              <OrderStatus>Delivered</OrderStatus>
            </OrderText>
          </OrderItem>
        </Col>
      </Row>
    </Container>
  );
};

export default Congratulations;
