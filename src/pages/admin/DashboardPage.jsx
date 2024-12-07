import { Sidebar, SidebarSticky } from "../../components/Sidebar";
import {
  AdminContainer,
  CardContainer,
  MainContentAdmin,
} from "../../components/SharedComponent";
import CustomLineChart from "../../components/CustomLineChart";
import Congratulations from "../../components/Congaratulations";
import TopItems from "../../components/TopItems";
import CurrentRentals from "../../components/CurrentRentals";
import RevenueOverview from "../../components/RevenueOverview";
import { Container } from "react-bootstrap";

export default function DashboardPage() {
  return (
    <AdminContainer>
      <div className="d-lg-none">
      </div>
      <div className="d-flex gap-3 p-3">
        <SidebarSticky />

        <MainContentAdmin>
          <CardContainer className="d-flex align-items-center d-lg-none mb-3 gap-3">
            <Sidebar/> 
            <h5 className="m-0">Dashboard</h5>
          </CardContainer>
          <CardContainer className="d-lg-flex gap-2 mb-3">
            <div className="col-lg-4">
              <Congratulations />
            </div>
            <div className="col-lg-8">
              <CustomLineChart />
            </div>
          </CardContainer>
          <Container className="d-flex flex-column flex-wrap flex-lg-row gap-3 p-0">
            <div className="flex-grow-1">
              <RevenueOverview />
            </div>
            <div className="flex-grow-1">
              <TopItems />
            </div>
            <div className="flex-grow-1">
              <CurrentRentals />
            </div>
          </Container>
        </MainContentAdmin>
      </div>
    </AdminContainer>
  );
}
