import ProductCard from "../components/productCard";
import Topbar from "../components/topbar";
import { products } from "../utils/data";

export default function HomePage() {
  return (
    <>
      <Topbar />
      <div className="container">
        {/* <!-- Terlaris Section start --> */}
        <div className="mb-4 mt-4 d-md-flex terlaris-section">
          <h2 className="section-title d-md-none">Terlaris</h2>
          <div className="terlaris-title d-none d-md-flex mb-5 align-items-center rounded-4">
            <h2 className="text-white fw-bold w-50">Paling Banyak Disewa</h2>
          </div>
          <div className="scroll-container bg-transparent d-flex gap-3 pb-3 overflow-x-auto hidden-scroll">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        {/* <!-- Terlaris Section end --> */}

        {/* <!-- Rekomendasi Section start --> */}
        <div>
          <h2 className="section-title">Rekomendasi</h2>
          <div className="row g-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        {/* <!-- Rekomendasi Section end --> */}
      </div>
    </>
  );
}
