import Topbar from "../components/Topbar";
import { Back, MyButton } from "../components/Button";
import { Header, PageContainer } from "../components/SharedComponent";
import { useEffect, useState } from "react";
import { orders } from "../utils/data";
import { Container, Form, InputGroup } from "react-bootstrap";
import OrderCard from "../components/OrderCard";
import React from "react";
import useAuthStore from "../zustand/authStore";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_PAGE } from "../routes/routeConstant";

export default function OrderPage() {
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredByStatus = orders.filter((order) => {
    return statusFilter === "Semua" || order.Status === statusFilter;
  });

  const filteredBySearch = filteredByStatus.filter((order) => {
    return (
      search === "" ||
      order.OrderId.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filteredOrders = filteredBySearch;

  const {user} = useAuthStore()
  const navigate = useNavigate()

  useEffect(()=>{
    if(user){
      if(user.Role === "admin"){
        navigate(DASHBOARD_PAGE)
      }
    }
  },[navigate, user])

  return (
    <>
      <div className="d-none d-md-inline">
        <Topbar />
      </div>
      <PageContainer>
        {/* Header */}
        <Header className="d-md-none">
          <Back />
          <h5 className="m-0">Order</h5>
        </Header>

        <Container>
          <h4 className="d-none d-md-inline">Daftar Order</h4>
          {/* Input Search */}
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Cari ID order di sini"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>

          <div
            className="d-flex overflow-auto gap-2 no-scroll align-items-center"
            style={{
              whiteSpace: "nowrap",
              flexWrap: "nowrap",
              overflowX: "auto",
            }}
          >
            <p className="fw-semibold d-none d-md-inline m-0">Status</p>
            {["Semua", "Belum bayar", "Pengembalian", "Selesai", "Denda"].map(
              (status) => (
                <MyButton
                  key={status}
                  variant="clicked-btn"
                  active={statusFilter === status}
                  onClick={() => setStatusFilter(status)}
                  className={"m-0"}
                  style={{
                    flexShrink: 0,
                  }}
                >
                  {status}
                </MyButton>
              )
            )}
          </div>

          {/* Daftar Order */}
          {filteredOrders.map((order) => (
            <OrderCard key={order.OrderId} order={order} />
          ))}
        </Container>
      </PageContainer>
    </>
  );
}
