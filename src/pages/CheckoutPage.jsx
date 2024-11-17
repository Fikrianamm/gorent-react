import { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../utils/data";

// Constants
const APPLICATION_FEE = 5000;

// Styled Components
const CheckoutContainer = styled(Container)`
  margin-top: 20px;
  position: relative;
`;

const SectionTitle = styled.h6`
  font-weight: bold;
  margin-top: 20px;
`;

const PriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border-bottom: 1px solid #dee2e6;
  padding-bottom: 0.5rem;
`;

const CustomButton = styled(Button)`
  width: 100%;
  background-color: #2d83b2;
  border-color: #2d83b2;

  &:hover {
    background-color: #2a79a3;
  }
`;

const DurationButton = styled(Button)`
  &&& {
    margin: 5px 5px 10px 0;
    background-color: ${(props) => (props.active ? "#2D83B2" : "white")};
    color: ${(props) => (props.active ? "white" : "#949494")};
    border-color: #949494;
  }
  
  &&&:hover {
    background-color: #2d83b2;
    color: white;
  }

`;

const ImgContainer = styled.div`
  max-width: 120px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Price = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 1rem;
`;

const PricePeriod = styled.span`
  font-size: 0.875rem;
  color: #666;
  font-weight: normal;
  margin-left: 4px;
`;

export default function CheckoutPage() {
  const [rentalDuration, setRentalDuration] = useState(1);
  const [isCustom, setIsCustom] = useState(false);
  const [customDays, setCustomDays] = useState("");

  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const handleCustomClick = () => {
    setIsCustom(true);
    setRentalDuration("");
    setCustomDays("");
  };

  const handleDaySelection = (day) => {
    setIsCustom(false);
    setRentalDuration(day);
  };

  const handleCustomDaysChange = (e) => {
    const days = e.target.value;
    setCustomDays(days);
    setRentalDuration(Number(days));
  };

  const calculateSubtotal = () => rentalDuration * product.pricePerDay;
  const calculateTotal = () => calculateSubtotal() + APPLICATION_FEE;

  return (
    <CheckoutContainer>
      <div className="d-flex gap-3 align-items-center">
        <a href="/" className="text-black fs-5">
          <i className="bi bi-arrow-left"></i>
        </a>
        <h5 className="m-0">Check Out</h5>
      </div>
      <Row>
        <Col>
          <SectionTitle>Nama</SectionTitle>
          <p>Fikri</p>
        </Col>
        <Col>
          <SectionTitle>Alamat</SectionTitle>
          <p>Bae, Kudus, Jawa Tengah</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <SectionTitle>Nomor Hp</SectionTitle>
          <p>089675329315</p>
        </Col>
      </Row>

      <SectionTitle>Produk</SectionTitle>
      <Card>
        <Card.Body className="d-flex align-items-center gap-3">
          <ImgContainer className="position-relative rounded-2 ratio ratio-1x1 bg-black col-4">
            <img
              src={product.image}
              className="img-fluid object-fit-contain"
              alt={product.name}
            />
          </ImgContainer>
          <div className="col-8 d-flex flex-column gap-6">
            <h6>{product.name}</h6>
            <div className="d-flex justify-content-between">
              <p>Harga per hari</p>
              <PriceWrapper>
                <Price>Rp {product.pricePerDay.toLocaleString("id-ID")}</Price>
                <PricePeriod>/hari</PricePeriod>
              </PriceWrapper>
            </div>
          </div>
        </Card.Body>
      </Card>

      <SectionTitle>Detail Penyewaan</SectionTitle>
      <div>
        {[1, 2, 3, 4].map((day) => (
          <DurationButton
            key={day}
            active={rentalDuration === day}
            onClick={() => handleDaySelection(day)}
          >
            {day} Hari
          </DurationButton>
        ))}
        <DurationButton active={isCustom} onClick={handleCustomClick}>
          Custom
        </DurationButton>
      </div>

      {isCustom && (
        <Form.Group controlId="customDays">
          <Form.Label>Masukkan jumlah hari</Form.Label>
          <Form.Control
            type="number"
            value={customDays}
            onChange={handleCustomDaysChange}
            min="1"
            placeholder="Masukkan jumlah hari"
          />
        </Form.Group>
      )}

      <SectionTitle>Detail Harga</SectionTitle>
      <PriceDetail>
        <span>Lama Sewa</span>
        <span>{rentalDuration ? `${rentalDuration} Hari` : "N/A"}</span>
      </PriceDetail>
      <PriceDetail>
        <span>Sub Total</span>
        <span>Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
      </PriceDetail>
      <PriceDetail>
        <span>Biaya Aplikasi</span>
        <span>Rp {APPLICATION_FEE.toLocaleString("id-ID")}</span>
      </PriceDetail>
      <PriceDetail style={{ fontWeight: "bold" }}>
        <span>Total Harga</span>
        <span>Rp {calculateTotal().toLocaleString("id-ID")}</span>
      </PriceDetail>

      <div className="fixed-bottom bg-white border-top p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <CustomButton>Bayar</CustomButton>
        </div>
      </div>
    </CheckoutContainer>
  );
}
