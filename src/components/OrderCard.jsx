import { Button, Card, Row } from "react-bootstrap";
import { addHours, format } from "date-fns";
import { id } from "date-fns/locale";
import styled from "styled-components";
import { products } from "../utils/data";
import { MyButton } from "./Button";

const MyOrderCard = styled(Card)`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const StatusBadge = styled.div`
  background-color: ${(props) =>
    props.status === "Denda" ? "#ffdbdb" : "#d6effc"};
  color: ${(props) => (props.status === "Denda" ? "#ED2222" : "#2D83B2")};
  padding: 5px 8px;
  border-radius: 5px;
  font-weight: 600;
`;

const ImgContainer = styled.div`
  max-width: 120px;
`;

export default function OrderCard({ order }) {
  const product = products.find((p) => p.id === order.ProductId);

  return (
    <MyOrderCard>
      <Row>
        <div className="d-flex align-items-center mb-1 justify-content-between">
          <div className="d-flex gap-2 align-items-center">
            <small className="fw-semibold">
              {format(new Date(order.RentalStartDate), "dd MMMM yyyy", {
                locale: id,
              })}{" "}
              / {order.OrderId}
            </small>
            <StatusBadge status={order.Status}>{order.Status}</StatusBadge>
          </div>
          {order.Status == "Pengembalian" && (
            <StatusBadge status={order.Status} className="d-none d-md-inline">
              <span className="text-black">Tenggat Pengembalian</span>{" "}
              {format(new Date(order.RentalEndDate), "dd MMMM yyyy", {
                locale: id,
              })}
            </StatusBadge>
          )}
          {order.Status == "Belum bayar" && (
            <StatusBadge status={order.Status} className="d-none d-md-inline">
              <span className="text-black">Bayar sebelum</span>{" "}
              {format(
                addHours(new Date(order.RentalStartDate), 24),
                "dd MMMM yyyy HH:mm",
                { locale: id }
              )}
            </StatusBadge>
          )}
        </div>

        <div className="d-flex gap-3">
          <ImgContainer className="position-relative rounded-2 ratio ratio-1x1 bg-black col-4">
            <img
              src={product.image}
              className="img-fluid object-fit-contain"
              alt={product.name}
            />
          </ImgContainer>
          <div className="d-flex flex-column w-100">
            <div className="d-flex w-100 justify-content-between">
              <div>
                <strong>{product.name}</strong>{" "}
                <div>
                  Lama Sewa:{" "}
                  {Math.ceil(
                    (new Date(order.RentalEndDate).getTime() -
                      new Date(order.RentalStartDate).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  hari
                </div>
                <div>
                  {Math.ceil(
                    (new Date(order.RentalEndDate).getTime() -
                      new Date(order.RentalStartDate).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  x Rp
                  {product.pricePerDay.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="d-flex flex-column justify-content-center h-100">
                  {order.AdditionalCharges > 0 ? (
                    <div className="d-none d-md-inline">
                      <p className="m-0 text-end">Total denda</p>
                      <p className="m-0 text-end fw-semibold">
                        Rp {order.AdditionalCharges.toLocaleString()}
                      </p>
                    </div>
                  ) : (
                    <div className="d-none d-md-inline">
                      <p className="m-0 text-end">Total harga</p>
                      <p className="m-0 text-end fw-semibold">
                        Rp {order.TotalPrice.toLocaleString()}
                      </p>
                    </div>
                  )}
                  {order.Status == "Belum bayar" && (
                    <div className="d-none d-md-flex gap-1 mt-2">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="me-2"
                      >
                        Batalkan
                      </Button>
                      <MyButton>Bayar</MyButton>
                    </div>
                  )}
                  {order.Status == "Denda" && (
                    <div className="d-none d-md-flex justify-content-end gap-1 mt-2">
                      <MyButton>Bayar</MyButton>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex d-md-none w-100 mt-2 justify-content-between">
              {order.AdditionalCharges > 0 ? (
                <>
                  <strong>Total denda</strong>
                  <div>
                    <p className="m-0 text-end fw-semibold">
                      Rp {order.AdditionalCharges.toLocaleString()}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <strong>Total harga</strong>
                  <div>
                    <p className="m-0 text-end fw-semibold">
                      Rp {order.TotalPrice.toLocaleString()}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {order.Status == "Pengembalian" && (
          <div>
            <StatusBadge
              status={order.Status}
              className="d-md-none mt-2 text-center w-100"
            >
              <span className="text-black">Tenggat Pengembalian</span>{" "}
              {format(new Date(order.RentalEndDate), "dd MMMM yyyy", {
                locale: id,
              })}
            </StatusBadge>
          </div>
        )}
        {order.Status == "Belum bayar" && (
          <div>
            <StatusBadge
              status={order.Status}
              className="d-md-none mt-2 text-center w-100"
            >
              <span className="text-black">Bayar sebelum</span>{" "}
              {format(
                addHours(new Date(order.RentalStartDate), 24),
                "dd MMMM yyyy HH:mm",
                { locale: id }
              )}
            </StatusBadge>
          </div>
        )}
        {order.Status == "Belum bayar" && (
          <div className="d-md-none d-flex gap-1 mt-2">
            <Button variant="outline-danger" size="sm" className="me-2 w-100">
              Batalkan
            </Button>
            <MyButton className={" w-100"}>Bayar</MyButton>
          </div>
        )}
        {order.Status == "Denda" && (
          <div className="d-md-none mt-2">
            <MyButton className={"w-100"}>Bayar</MyButton>
          </div>
        )}
      </Row>
    </MyOrderCard>
  );
}
