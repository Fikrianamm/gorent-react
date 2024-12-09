import styled from "styled-components";
import { Price, PricePeriod, PriceWrapper } from "./SharedComponent";
import { MyButton } from "./Button";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardWrapper = styled.a`
  text-decoration: none;
  display: block;
  user-select: none;
  background-color: white;
  border-radius: 8px;
  height: 100%;
`;

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 12px;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: #333;
  text-decoration: none;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StarRating = styled.div`
  color: #ffd700;
  font-size: 0.875rem;
  margin-right: 4px;
  display: flex;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? "#FFD700" : "#DDD")};
`;

const RatingCount = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

function ModalDeleteProduct(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Konfirmasi Hapus Produk
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="m-0">
          Apakah Anda yakin ingin menghapus produk{" "}
          <strong>{props.product.name}</strong>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary">Ya, hapus</Button>
          <MyButton onClick={props.onHide}>Kembali</MyButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

// Komponen untuk menampilkan rating bintang
const StarRatingDisplay = ({ rating }) => {
  return (
    <StarRating>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating}>
          ★
        </Star>
      ))}
    </StarRating>
  );
};

export default function ProductCard({ product }) {
  return (
    <CardWrapper href={`/product/${product.id}`} className="w-100">
      <Card>
        <ProductImage src={product.image} alt={product.name} />
        <ContentWrapper>
          <ProductTitle>{product.name}</ProductTitle>
          <PriceWrapper>
            <Price>Rp {product.pricePerDay.toLocaleString("id-ID")}</Price>
            <PricePeriod>/hari</PricePeriod>
          </PriceWrapper>
          <RatingWrapper>
            <StarRatingDisplay rating={5} />
            <RatingCount>({product.ratingCount || 11})</RatingCount>
          </RatingWrapper>
        </ContentWrapper>
      </Card>
    </CardWrapper>
  );
}

export function ProductCardAdmin({ product }) {
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);
  const navigate = useNavigate()

  return (
    <CardWrapper className="w-100">
      <Card>
        <ProductImage src={product.image} alt={product.name} />
        <ContentWrapper>
          <ProductTitle>{product.name}</ProductTitle>
          <PriceWrapper>
            <Price>Rp {product.pricePerDay.toLocaleString("id-ID")}</Price>
            <PricePeriod>/hari</PricePeriod>
          </PriceWrapper>
          <RatingWrapper className="gap-2 mt-2">
            <Button onClick={()=>navigate(`/admin/product/${product.id}/edit`)} variant="outline-secondary" className={"w-100"}>
              Edit
            </Button>
            <MyButton
              variant="border-red"
              size="sm"
              className="me-2 w-100"
              onClick={() => setModalDeleteProduct(true)}
            >
              Hapus
            </MyButton>
          </RatingWrapper>
        </ContentWrapper>
      </Card>
      <ModalDeleteProduct
        show={modalDeleteProduct}
        onHide={() => setModalDeleteProduct(false)}
        product={product}
      />
    </CardWrapper>
  );
}
