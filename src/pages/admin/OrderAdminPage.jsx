import { Sidebar, SidebarSticky } from "../../components/Sidebar";
import {
  AdminContainer,
  CardContainer,
  MainContentAdmin,
} from "../../components/SharedComponent";
import { useEffect, useState } from "react";
import { orders } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../zustand/authStore";
import { ERROR_PAGE } from "../../routes/routeConstant";
import { Form, InputGroup } from "react-bootstrap";
import { MyButton } from "../../components/Button";
import { OrderCardAdmin } from "../../components/OrderCard";

export default function OrderAdminPage() {
  const [statusFilter, setStatusFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredByStatus = orders.filter((order) => {
    return statusFilter === "Semua" && order.Status !== "Belum bayar" || order.Status === statusFilter;
  });

  const filteredBySearch = filteredByStatus.filter((order) => {
    return (
      search === "" ||
      order.OrderId.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filteredOrders = filteredBySearch;

  const { user } = useAuthStore();
  const navigate = useNavigate();

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
            <h5 className="m-0">Order</h5>
          </CardContainer>
          <CardContainer>
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
                {[
                  "Semua",
                  "Pengembalian",
                  "Selesai",
                  "Denda",
                ].map((status) => (
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
                ))}
              </div>

              {/* Daftar Order */}
              {filteredOrders.map((order) => (
                <OrderCardAdmin key={order.OrderId} order={order} />
              ))}
          </CardContainer>
        </MainContentAdmin>
      </div>
    </AdminContainer>
  );
}
