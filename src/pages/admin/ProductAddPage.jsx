import {
  AdminContainer,
  CardContainer,
  MainContentAdmin,
} from "../../components/SharedComponent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";
import { ERROR_PAGE } from "../../routes/routeConstant";
import styled from "styled-components";
import { Back } from "../../components/Button";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { categories } from "../../utils/data";
import FileInput from "../../components/FileInput";

const Badge = styled.span`
  background-color: #f2f2f2;
  color: #848484;
  padding: 5px 8px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.8rem;
`;

export default function ProductAddPage() {
  const navigate = useNavigate();
  const { user } = useAuthStore();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

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
        <MainContentAdmin>
          <CardContainer className="d-flex align-items-center mb-3 gap-3">
            <Back />
            <h5 className="m-0">Tambah produk</h5>
          </CardContainer>
          <CardContainer className="d-flex flex-column">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="productName">
                <Form.Label className="fw-semibold">
                  Nama Produk <Badge>Wajib</Badge>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nama Produk"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productCategory">
                <Form.Label className="fw-semibold">
                  Kategori Produk <Badge>Wajib</Badge>
                </Form.Label>
                <div className="mb-1">
                  <small>Pilih kategori yang sesuai</small>
                </div>
                <Form.Select required>
                  <option value="">Pilih Kategori</option>
                  {categories.map((category) => (
                      <option key={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                  Foto Produk <Badge>Wajib</Badge>
                </Form.Label>
                <Row>
                  <FileInput />
                </Row>
              </Form.Group>

              <Form.Group className="mb-3" controlId="productDescription">
                <Form.Label className="fw-semibold">
                  Deskripsi Produk <Badge>Wajib</Badge>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Masukkan deskripsi Produk"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productPrice">
                <Form.Label className="fw-semibold">
                  Harga Sewa Harian <Badge>Wajib</Badge>
                </Form.Label>

                <InputGroup>
                  <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Masukkan Harga Produk"
                    aria-describedby="basic-addon1"
                    required
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="productStock">
                <Form.Label className="fw-semibold">
                  Stok <Badge>Wajib</Badge>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan Jumlah Produk"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="productCondition">
                <Form.Label className="fw-semibold">
                  Kondisi <Badge>Wajib</Badge>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Kondisi Produk"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </CardContainer>
        </MainContentAdmin>
      </div>
    </AdminContainer>
  );
}
