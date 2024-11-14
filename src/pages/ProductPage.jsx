import { useParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import { products } from "../utils/data";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ImageZoom = styled.img`
  max-height: 90vh;
  width: auto;
  max-width: 100%;
  margin: auto;
`;

const BgBlack = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border: none;
`;

const ImageContainer = styled.div`
  height: 400px;
`;
const ButtonBackCircle = styled.a`
  background-color: #696969;
  color: white;
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled.span`
  color: #ffc107;
  width: fit-content;
`;

const ReviewCard = styled.div`
  background-color: #ebebeb;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const recomendedProducts = products.filter((p) => p.id !== productId);

  return (
    <>
      <div className="d-none d-md-inline">
        <Topbar />
      </div>

      {/* web view */}
      <div className="container gap-4 mt-4 d-md-flex d-none">
        <div className="d-flex flex-column gap-4 col-4">
          <div className="position-relative rounded-2 ratio ratio-1x1 bg-black">
            <img
              src={product.image}
              className="img-fluid object-fit-contain"
              alt={product.name}
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
            />
          </div>
          <div className="d-flex flex-column">
            <h3 className="fw-semibold fs-5">Review</h3>
            <div className="d-flex flex-column gap-3 align-items-start">
              <ReviewCard>
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex flex-column">
                      <div className="d-flex gap-1">
                        <div className="rating p-0 m-0">⭐</div>
                        <p className="rating fw-bold p-0 m-0">4.5</p>
                      </div>
                      <strong className="">Sulthon</strong>
                    </div>
                    <small className="text-muted">Aug 9, 2024</small>
                  </div>
                  <p className="mb-0 mt-2">
                    Ringan dan nyaman dibawa. Performa baik, meski layar agak
                    reflektif di luar ruangan. Overall memuaskan!
                  </p>
                </div>
              </ReviewCard>

              <ReviewCard>
                <div className="d-flex flex-column gap-1">
                  <div className="d-flex justify-content-between align-items-end">
                    <div className="d-flex flex-column">
                      <div className="d-flex gap-1">
                        <div className="rating p-0 m-0">⭐</div>
                        <p className="rating fw-bold p-0 m-0">4.5</p>
                      </div>
                      <strong className="">Fahris</strong>
                    </div>
                    <small className="text-muted">Aug 9, 2024</small>
                  </div>
                  <p className="mb-0 mt-2">
                    Saya suka desain ramping dan ringan Yoga 7, nyaman dibawa ke
                    mana saja. Performa juga cukup cepat untuk pekerjaan kantor
                    dan browsing. Namun, saya merasa layarnya agak reflektif
                    saat digunakan di luar ruangan, tapi overall sangat bagus!
                  </p>
                </div>
              </ReviewCard>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-4 col-8">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="fw-semibold fs-3">{product.name}</h5>
            <div className="fs-4 d-flex gap-2">
              <span className="fw-semibold">4.5</span>
              <Star>
                <i className="bi bi-star-fill"></i>
              </Star>
            </div>
          </div>

          <p>{product.description}</p>
          <div className="d-flex flex-column gap-2">
            <h3 className="fw-semibold fs-5">Detail Produk</h3>
            <div className="d-flex flex-column gap-3">
              <div className="border-1 border-bottom d-flex justify-content-between w-100">
                <h6>Kondisi</h6>
                <p className="fw-semibold">{product.condition}</p>
              </div>
              <div className="border-1 border-bottom d-flex justify-content-between w-100">
                <h6>Harga per hari</h6>
                <p className="fw-semibold">
                  Rp{product.pricePerDay.toLocaleString()}/hari
                </p>
              </div>
              <div className="border-1 border-bottom d-flex justify-content-between w-100">
                <h6>Tersedia</h6>
                <p className="fw-semibold">{product.stock}</p>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle>Rekomendasi lainnya</SectionTitle>
            <div className="row g-3">
              {recomendedProducts.map((product) => (
                <div key={product.id} className="col-6 col-md-4 col-lg-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="container-fluid p-0 d-inline d-md-none">
        {/* Product Detail Section  */}
        <ImageContainer className="position-relative image-container ratio ratio-1x1 bg-black">
          <ButtonBackCircle href="/" className="rounded-5 z-3">
            <i className="bi bi-arrow-left"></i>
          </ButtonBackCircle>
          <img
            src={product.image}
            className="img-fluid object-fit-contain"
            alt={product.name}
            data-bs-toggle="modal"
            data-bs-target="#imageModal"
          />
        </ImageContainer>
        <div className="container mt-4 pb-5 mb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-semibold fs-3">{product.name}</h5>
            <div className="fs-4 d-flex gap-2">
              <span className="fw-semibold">4.5</span>
              <Star>
                <i className="bi bi-star-fill"></i>
              </Star>
            </div>
          </div>

          <p>{product.description}</p>

          {/* detail produk section */}
          <h3 className="fw-semibold fs-5 mb-4">Detail Produk</h3>
          <div className="d-flex flex-column gap-3">
            <div className="border-1 border-bottom d-flex justify-content-between w-100">
              <h6>Kondisi</h6>
              <p className="fw-semibold">{product.condition}</p>
            </div>
            <div className="border-1 border-bottom d-flex justify-content-between w-100">
              <h6>Harga per hari</h6>
              <p className="fw-semibold">
                Rp{product.pricePerDay.toLocaleString()}/hari
              </p>
            </div>
            <div className="border-1 border-bottom d-flex justify-content-between w-100">
              <h6>Tersedia</h6>
              <p className="fw-semibold">{product.stock}</p>
            </div>
          </div>

          {/* Reviews Section */}
          <h3 className="fw-semibold fs-5 mb-4 mt-4">Review</h3>
          <div className="d-flex flex-column gap-3 align-items-center">
            <ReviewCard>
              <div className="d-flex flex-column align-items-center">
                <Star>
                  <i className="bi bi-star-fill"></i>
                </Star>
                <p className="fw-bold">4.5</p>
              </div>
              <div className="d-flex flex-column gap-1">
                <div className="d-flex justify-content-between align-items-center">
                  <strong className="">Sulthon</strong>
                  <small className="text-muted">Aug 9, 2024</small>
                </div>
                <p className="mb-0 mt-2">
                  Ringan dan nyaman dibawa. Performa baik, meski layar agak
                  reflektif di luar ruangan. Overall memuaskan!
                </p>
              </div>
            </ReviewCard>

            <ReviewCard>
              <div className="d-flex flex-column align-items-center">
                <Star>
                  <i className="bi bi-star-fill"></i>
                </Star>
                <p className="fw-bold">4.5</p>
              </div>
              <div className="d-flex flex-column gap-1">
                <div className="d-flex justify-content-between align-items-center">
                  <strong className="">Fahris</strong>
                  <small className="text-muted">Aug 9, 2024</small>
                </div>
                <p className="mb-0 mt-2">
                  Saya suka desain ramping dan ringan Yoga 7, nyaman dibawa ke
                  mana saja. Performa juga cukup cepat untuk pekerjaan kantor
                  dan browsing. Namun, saya merasa layarnya agak reflektif saat
                  digunakan di luar ruangan, tapi overall sangat bagus!
                </p>
              </div>
            </ReviewCard>
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed-bottom bg-white border-top p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0 fw-bold fs-5">{product.name}</h6>
              <p className="mb-0 fs-6 fw-semibold">
                Rp{product.pricePerDay.toLocaleString()} /hari
              </p>
            </div>
            <button className="btn btn-primary">Sewa Produk</button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <BgBlack
        className="modal modal-fullscreen fade"
        id="imageModal"
        tabIndex="-1"
        aria-labelledby="imageModalLabel"
        aria-hidden="true"
      >
        <button
          type="button"
          className="close-modal-btn"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          ×
        </button>
        <BgBlack className="modal-dialog modal-fullscreen">
          <BgBlack className="modal-content">
            <div className="modal-body d-flex align-items-center justify-content-center">
              <ImageZoom
                src={product.image}
                alt={product.name}
                className="img-fluid"
              />
            </div>
          </BgBlack>
        </BgBlack>
      </BgBlack>
    </>
  );
}
