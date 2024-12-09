import { Sidebar, SidebarSticky } from "../../components/Sidebar";
import {
  AdminContainer,
  CardContainer,
  MainContentAdmin,
  SearchContainer,
  SearchInput,
  StyledToggle,
} from "../../components/SharedComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";
import { ERROR_PAGE } from "../../routes/routeConstant";
import {
  Button,
  Dropdown,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { categories, products } from "../../utils/data";
import { ProductCardAdmin } from "../../components/ProductCard";
import styled from "styled-components";
import { GoPlusCircle } from "react-icons/go";
import { MyButton } from "../../components/Button";
import { FaPlus } from "react-icons/fa";

const ButtonPlus = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

const CustomButtonFloat = styled(Button)`
  padding: 0.8rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d83b2;
  border: none;

  &:hover {
    background-color: #2a79a3;
  }
`;

export default function ProductAdminPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [drop, setDrop] = useState(false);

  const handleMouseEnter = () => {
    setDrop(true);
  };

  const handleMouseLeave = () => {
    setDrop(false);
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Tambah produk
    </Tooltip>
  );

  useEffect(() => {
    if (user) {
      if (user.Role === "user") {
        navigate(ERROR_PAGE);
      }
    }
  }, [navigate, user]);

  return (
    <AdminContainer>
      <div className="d-flex gap-3 p-3">
        <SidebarSticky />

        <MainContentAdmin>
          <CardContainer className="d-flex align-items-center d-lg-none mb-3 gap-3">
            <Sidebar />
            <h5 className="m-0">Produk</h5>
          </CardContainer>
          <CardContainer className="d-flex flex-column">
            <div className="d-flex gap-2">
              <SearchContainer className="flex-grow-1">
                <Form className="d-flex align-items-center">
                  <SearchInput type="text" placeholder="Cari Produk" />
                  <Button type="submit" className="bg-transparent p-0 border-0">
                    <i className="bi bi-search me-2 text-muted"></i>
                  </Button>
                </Form>
              </SearchContainer>
              <Dropdown
                align={"end"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="d-lg-none d-inline"
              >
                <StyledToggle className="h-100 p-0">
                  <Button variant="light" className="h-100">
                    <i className="bi bi-filter"></i>
                  </Button>
                </StyledToggle>

                <Dropdown.Menu>
                  <div>
                    <Dropdown.Item
                      onClick={() => {
                        setCategory(null);
                      }}
                    >
                      Semua
                    </Dropdown.Item>
                    {categories.map((category) => (
                      <Dropdown.Item key={category.id}>
                        {category.name}
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-lg-flex d-none justify-content-between gap-3 mt-3">
              <Form.Select className="w-50">
                <option value={""}>Pilih kategori</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
              <MyButton className={"d-flex align-items-center gap-2"}>
                <FaPlus />
                Tambah produk
              </MyButton>
            </div>
            <strong className="m-2 mt-3">{products.length} Produk</strong>
            <div className="row g-3">
              {products.map((product) => (
                <div key={product.id} className="col-6 col-md-4 col-lg-3">
                  <ProductCardAdmin product={product} />
                </div>
              ))}
            </div>
          </CardContainer>
          <ButtonPlus className="d-lg-none">
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <CustomButtonFloat>
                <GoPlusCircle size={24} />
              </CustomButtonFloat>
            </OverlayTrigger>
          </ButtonPlus>
        </MainContentAdmin>
      </div>
    </AdminContainer>
  );
}
