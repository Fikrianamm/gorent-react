import styled from 'styled-components';

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

const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 4px;
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

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StarRating = styled.div`
  color: #FFD700;
  font-size: 0.875rem;
  margin-right: 4px;
  display: flex;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#FFD700' : '#DDD'};
`;

const RatingCount = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

// Komponen untuk menampilkan rating bintang
const StarRatingDisplay = ({ rating }) => {
  return (
    <StarRating>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating}>★</Star>
      ))}
    </StarRating>
  );
};

export default function ProductCard({ product }) {
  return (
    <CardWrapper href={product.id} className='w-100'>
      <Card>
        <ProductImage src={product.image} alt={product.name} />
        <ContentWrapper>
          <ProductTitle>{product.name}</ProductTitle>
          <PriceWrapper>
            <Price>Rp{product.pricePerDay.toLocaleString()}</Price>
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