import { SidebarSticky } from "../../components/Sidebar";
import {
  AdminContainer,
  MainContentAdmin,
} from "../../components/SharedComponent";

export default function DashboardPage() {
  return (
    <AdminContainer>
      {/* <div className="d-md-none">
        <Sidebar/>
      </div> */}
      <div className="d-flex gap-3 p-3">

      <SidebarSticky />

      <MainContentAdmin>
        
      </MainContentAdmin>
      </div>
      
    </AdminContainer>
  );
}
