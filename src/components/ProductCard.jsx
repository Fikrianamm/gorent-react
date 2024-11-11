import styled from 'styled-components';

const CardWrapper = styled.a`
  text-decoration: none;
  display: block;
  user-select: none;
  background-color: white;
`;

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 12px;
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
  height: 200px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
  text-decoration: none;
`;

const PriceWrapper = styled.p`
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const PricePeriod = styled.span`
  font-size: 0.8rem;
  color: #666;
  font-weight: normal;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StarRating = styled.div`
  color: #ffc107;
  font-size: 0.9rem;
  margin-right: 0.25rem;
`;

const RatingCount = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export default function ProductCard({ product }) {
  return (
    <CardWrapper href={product.id} className='col-6 col-md-4 col-lg-3 col-xl-2'>
      <Card>
        <ProductImage src={product.image} alt={product.name} />
        <ContentWrapper>
          <ProductTitle>{product.name}</ProductTitle>
          <PriceWrapper>
            Rp{product.pricePerDay.toLocaleString()}{" "}
            <PricePeriod>/hari</PricePeriod>
          </PriceWrapper>
          <RatingWrapper>
            <StarRating>★★★★★</StarRating>
            <RatingCount>(11)</RatingCount>
          </RatingWrapper>
        </ContentWrapper>
      </Card>
    </CardWrapper>
  );
}