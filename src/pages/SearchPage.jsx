import { useSearchParams } from "react-router-dom";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import useProductStore from "../zustand/productStore";
import { Form } from "react-bootstrap";
import { categories } from "../utils/data";
import { Back } from "../components/Button";
import { HOME_PAGE } from "../routes/routeConstant";

const SectionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    selectedCategory,
    selectedCondition,
    setCategory,
    setCondition,
    filteredProducts
  } = useProductStore();

  const handleCategoryChange = (event) => {
    const category = event.target.value;

    setCategory(category);

    const currentParams = Object.fromEntries([...searchParams]);
    if (category) {
      currentParams.category = category;
    } else {
      delete currentParams.category;
    }

    setSearchParams(currentParams);
  };

  const handleConditionChange = (event) => {
    const condition = event.target.value;

    setCondition(condition);

    const currentParams = Object.fromEntries([...searchParams]);
    if (condition) {
      currentParams.condition = condition;
    } else {
      delete currentParams.condition;
    }

    setSearchParams(currentParams);
  };

  return (
    <div className="pb-5">
      <Topbar />
      <div className="container py-3">
        <div>
          <div className="d-flex align-items-center">
            <SectionTitle className="">
              <Back className={"bg-black me-2"} navigateTo={HOME_PAGE} />
              Showing results for <strong>{searchParams.get("search")} </strong>
              {selectedCategory && (
                <span className="d-md-none">
                    category
                  <strong> {searchParams.get("category")}</strong>
                </span>
              )}
              {selectedCondition && (
                <span className="d-md-none">
                {" "}
                    condition
                  <strong> {searchParams.get("condition")}</strong>
                </span>
              )}
            </SectionTitle>
          </div>
          <div className="row g-3">
            <div className="d-md-flex d-none justify-content-between gap-3">
              <Form.Select
                className="w-50"
                value={selectedCategory || ""}
                onChange={handleCategoryChange}
              >
                <option value={""}>Pilih kategori</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                className="w-50"
                value={selectedCondition || ""}
                onChange={handleConditionChange}
              >
                <option value={""}>Pilih kondisi</option>
                <option value="Sangat baik">Sangat baik</option>
                <option value="Baik">Baik</option>
                <option value="Layak pakai">Layak pakai</option>
              </Form.Select>
            </div>

            {filteredProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
