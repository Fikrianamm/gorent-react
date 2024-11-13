import Topbar from "../components/Topbar";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const TerlarisTitle = styled.div`
  background: #2d83b2;
  padding: 70px 24px;
  width: 300px;
  height: 308px;
`;

const SectionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ScrollContainer = styled.div`
  background-color: transparent;

  @media screen and (min-width: 768px) {
    position: relative;
    right: 20px;
    top: 30px;
  }
`;

export default function HomePage() {
  return (
    <div className="pb-5">
      <Topbar />
      <div className="container">
        {/* <!-- Terlaris Section start --> */}
        <div className="mb-4 mt-4 d-md-flex position-relative">
          <SectionTitle className="d-md-none">Terlaris</SectionTitle>
          <TerlarisTitle className="d-none d-md-flex mb-5 align-items-center rounded-4">
            <h2 className="text-white fw-bold w-50">Paling Banyak Disewa</h2>
          </TerlarisTitle>
          <ScrollContainer className="d-flex gap-3 pb-3 overflow-x-auto hidden-scroll">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={2}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                // ketika lebar window >= 768px
                768: {
                  slidesPerView: 3,
                },
                // ketika lebar window >= 1024px
                992: {
                  slidesPerView: 4,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="w-100 bg-transparent">
                    <ProductCard product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollContainer>
        </div>
        {/* <!-- Terlaris Section end --> */}

        {/* <!-- Rekomendasi Section start --> */}
        <div>
          <SectionTitle>Rekomendasi</SectionTitle>
          <div className="row g-3">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        {/* <!-- Rekomendasi Section end --> */}
      </div>
    </div>
  );
}
