import { Button, Card, Form, Modal, Row } from "react-bootstrap";
import { addHours, format } from "date-fns";
import { id } from "date-fns/locale";
import styled from "styled-components";
import { products } from "../utils/data";
import { MyButton } from "./Button";
import { useState } from "react";

const MyOrderCard = styled(Card)`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const StatusBadge = styled.div`
  background-color: ${(props) =>
    props.status === "Denda" ? "#ffdbdb" : "#e5f1f8"};
  color: ${(props) => (props.status === "Denda" ? "#ED2222" : "#2D83B2")};
  padding: 5px 8px;
  border-radius: 5px;
  font-weight: 600;
`;

const ImgContainer = styled.div`
  max-width: 120px;
`;

const Star = styled.span`
  color: #ffc107;
  width: fit-content;
`;

function ModalDenda(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detail denda
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pb-2 d-flex justify-content-between align-items-center border-bottom">
          <p className="m-0">Tipe</p>
          <strong>Terlambat</strong>
        </div>
        <div className="mt-2">
          <strong>Deskripsi</strong>
          <p className="m-0">
            Denda keterlambatan 2 hari untuk pengembalian barang
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ModalTambahDenda(props) {
  const typeDenda = [
    "Terlambat Mengembalikan Barang", "Kerusakan ringan", "Kerusakan sedang", "Kerusakan berat", "Pengembalian tidak lengkap", "Lainnya"
  ]

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Denda</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pb-2 d-flex flex-column ">
          <p className="m-0 mb-1">Tipe</p>
          <Form.Select
            className="w-100"
          >
            <option value={""}>Pilih tipe</option>
            {typeDenda.map((tipe, index) => (
              <option key={index} value={tipe}>
                {tipe}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="mt-2">
          <p className="m-0 mb-1">Deskripsi</p>
          <Form.Control as="textarea" placeholder="Deskripsi denda" />
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ModalReview(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Review {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="pb-2 d-flex justify-content-start gap-3 align-items-center border-bottom">
          <Star>
            <i className="bi bi-star-fill"></i>
          </Star>
          <Form.Control type="number" />
        </div>
        <div className="mt-2 d-flex flex-column gap-2">
          <strong>Deskripsi</strong>
          <Form.Control as="textarea" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <MyButton onClick={props.onHide} className={"w-100"}>
          Review
        </MyButton>
      </Modal.Footer>
    </Modal>
  );
}

function ModalCancelOrder(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Konfirmasi Order
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="m-0">
          Apakah Anda yakin ingin membatalkan penyewaan{" "}
          <strong>{props.product.name}</strong>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex gap-2">
          <Button variant="outline-secondary">Ya, batalkan</Button>
          <MyButton onClick={props.onHide}>Kembali</MyButton>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default function OrderCard({ order }) {
  const [modalDetailDenda, setModalDetailDenda] = useState(false);
  const [modalReview, setModalReview] = useState(false);
  const [modalCancelOrder, setModalCancelOrder] = useState(false);
  const product = products.find((p) => p.id === order.ProductId);

  return (
    <MyOrderCard>
      <Row>
        {/* header card */}
        <div className="d-flex align-items-center mb-1 justify-content-between">
          <div className="d-flex flex-column flex-md-row gap-2 align-items-start align-items-md-center">
            <small className="fw-semibold order-last order-md-first">
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

        {/* body card */}
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
                        onClick={() => setModalCancelOrder(true)}
                      >
                        Batalkan
                      </Button>
                      <MyButton>Bayar</MyButton>
                    </div>
                  )}
                  {order.Status == "Denda" && (
                    <div className="d-none d-md-flex justify-content-end gap-1 mt-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => setModalDetailDenda(true)}
                      >
                        Detail denda
                      </Button>
                      <MyButton>Bayar</MyButton>
                    </div>
                  )}
                  {order.Status == "Selesai" && (
                    <div className="d-none d-md-flex justify-content-end gap-1 mt-2">
                      <MyButton onClick={() => setModalReview(true)}>
                        Review
                      </MyButton>
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

        {/* footer card */}
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
            <Button
              variant="outline-danger"
              size="sm"
              className="me-2 w-100"
              onClick={() => setModalCancelOrder(true)}
            >
              Batalkan
            </Button>
            <MyButton className={"w-100"}>Bayar</MyButton>
          </div>
        )}
        {order.Status == "Denda" && (
          <div className="d-md-none d-flex gap-1 mt-2">
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-2 w-100"
              onClick={() => setModalDetailDenda(true)}
            >
              Detail denda
            </Button>
            <MyButton className={"w-100"}>Bayar</MyButton>
          </div>
        )}
        {order.Status == "Selesai" && (
          <div className="d-md-none d-flex gap-1 mt-2">
            <MyButton className={"w-100"} onClick={() => setModalReview(true)}>
              Review
            </MyButton>
          </div>
        )}
      </Row>
      <ModalDenda
        show={modalDetailDenda}
        onHide={() => setModalDetailDenda(false)}
      />
      <ModalReview
        show={modalReview}
        onHide={() => setModalReview(false)}
        product={product}
      />
      <ModalCancelOrder
        show={modalCancelOrder}
        onHide={() => setModalCancelOrder(false)}
        product={product}
      />
    </MyOrderCard>
  );
}

export function OrderCardAdmin({ order }) {
  const [modalDenda, setModalDenda] = useState(false);
  const product = products.find((p) => p.id === order.ProductId);

  return (
    <MyOrderCard>
      <Row>
        {/* header card */}
        <div className="d-flex align-items-center mb-1 justify-content-between">
          <div className="d-flex flex-column flex-md-row gap-2 align-items-start align-items-md-center">
            <small className="fw-semibold order-last order-md-first">
              {format(new Date(order.RentalStartDate), "dd MMMM yyyy", {
                locale: id,
              })}{" "}
              / {order.OrderId}
            </small>
            <StatusBadge status={order.Status}>{order.Status}</StatusBadge>
          </div>
          {order.Status == "Pengembalian" && (
            <StatusBadge status={order.Status} className="d-none d-lg-inline">
              <span className="text-black">Tenggat Pengembalian</span>{" "}
              {format(new Date(order.RentalEndDate), "dd MMMM yyyy", {
                locale: id,
              })}
            </StatusBadge>
          )}
        </div>

        {/* body card */}
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
                  {order.Status == "Denda" && (
                    <div className="d-none d-lg-flex justify-content-end gap-1 mt-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                      >
                        Hubungi
                      </Button>
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

        {/* footer card */}
        {order.Status == "Pengembalian" && (
          <div>
            <StatusBadge
              status={order.Status}
              className="d-lg-none mt-2 text-center w-100"
            >
              <span className="text-black">Tenggat Pengembalian</span>{" "}
              {format(new Date(order.RentalEndDate), "dd MMMM yyyy", {
                locale: id,
              })}
            </StatusBadge>
          </div>
        )}
        {order.Status == "Denda" && (
          <div className="d-lg-none d-flex gap-1 mt-2">
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-2 w-100"
            >
              Hubungi
            </Button>
          </div>
        )}
        {order.Status == "Pengembalian" && (
          <div className="d-lg-none d-flex gap-1 mt-2">
            <MyButton
              variant="border-red"
              size="sm"
              className="me-2 w-100"
              onClick={() => setModalDenda(true)}
            >
              Tambah denda
            </MyButton>
            <MyButton className={"w-100"}>Selesai</MyButton>
          </div>
        )}
      </Row>
      <ModalTambahDenda show={modalDenda} onHide={() => setModalDenda(false)} />
    </MyOrderCard>
  );
}
