import { useState } from "react";
import styled from "styled-components";
import { Row, Col, Card, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { products } from "../utils/data";
import Topbar from "../components/Topbar";
import { Back, MyButton } from "../components/Button";
import { Header, PageContainer, Price, PricePeriod, PriceWrapper } from "../components/SharedComponent";

// Constants
const APPLICATION_FEE = 5000;

// Styled Components

const SectionTitle = styled.h6`
  font-weight: bold;
  margin-top: 20px;
`;

const PriceDetailTable = styled.div`
  width: 100%;
  border-collapse: collapse;

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #dee2e6;
  }
`;

const TotalRow = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const ImgContainer = styled.div`
  max-width: 120px;
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
    <>
      <div className="d-none d-md-inline">
        <Topbar />
      </div>
      <PageContainer>
        {/* Header */}
        <Header className="d-md-none">
          <Back />
          <h5 className="m-0">Check Out</h5>
        </Header>

        {/* Produk dan Detail Penyewa */}
        <Row className="mb-4">
          <Col md={6}>
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
                <div className="col-8">
                  <h6>{product.name}</h6>
                  <p>Harga per hari</p>
                  {/* <h6>Rp {product.pricePerDay.toLocaleString("id-ID")}/hari</h6> */}
                  <PriceWrapper>
                    <Price>
                      Rp {product.pricePerDay.toLocaleString("id-ID")}
                    </Price>
                    <PricePeriod>/hari</PricePeriod>
                  </PriceWrapper>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="order-first order-md-last">
            <SectionTitle>Nama</SectionTitle>
            <p>Fikri</p>
            <SectionTitle>Nomor Hp</SectionTitle>
            <p>089675329315</p>
            <SectionTitle>Alamat</SectionTitle>
            <p>Bae, Kudus, Jawa Tengah</p>
          </Col>
        </Row>

        {/* Detail Penyewaan */}
        <SectionTitle>Detail Penyewaan</SectionTitle>
        <div>
          {[1, 2, 3, 4].map((day) => (
            <MyButton variant={"clicked-btn"}
              key={day}
              active={rentalDuration === day}
              onClick={() => handleDaySelection(day)}
            >
              {day} Hari
            </MyButton>
          ))}
          <MyButton variant={"clicked-btn"} active={isCustom} onClick={handleCustomClick}>
            Custom
          </MyButton>
        </div>

        {isCustom && (
          <Form.Group controlId="customDays" className="mt-3">
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

        {/* Detail Harga */}
        <SectionTitle>Detail Harga</SectionTitle>
        <PriceDetailTable>
          <div>
            <span>Lama Sewa</span>
            <span>{rentalDuration ? `${rentalDuration} Hari` : "N/A"}</span>
          </div>
          <div>
            <span>Sub Total</span>
            <span>Rp {calculateSubtotal().toLocaleString("id-ID")}</span>
          </div>
          <div>
            <span>Biaya Aplikasi</span>
            <span>Rp {APPLICATION_FEE.toLocaleString("id-ID")}</span>
          </div>
          <TotalRow>
            <span>Total Harga</span>
            <span>Rp {calculateTotal().toLocaleString("id-ID")}</span>
          </TotalRow>
        </PriceDetailTable>
        <div className="gap-3 mt-4 justify-content-end d-none d-md-flex">
          <Back variant={"text-btn"} className="col-2">
            Kembali
          </Back>
          <MyButton variant={"primary-btn"} className="col-2">Bayar</MyButton>
        </div>

        <div className="fixed-bottom bg-white border-top p-3 d-md-none">
          <div className="container d-flex justify-content-between align-items-center">
            <MyButton variant={"primary-btn"} className="w-100">Bayar</MyButton>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
