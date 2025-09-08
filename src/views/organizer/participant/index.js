import AdminHeader from "../../admin/layout/AdminHeader";
import Sidebar from "../../admin/layout/Sidebar";
import ParticipantTable from "./section/ParticipantTable";
const OrganizerParticipant = () => {
  return (
    <>
      <AdminHeader />
      <main className="main-content">
        <Sidebar />
        <div className="contents">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Participants
                  </h4>
                </div>
              </div>
            </div>
            <ParticipantTable />
          </div>
        </div>
      </main>
    </>
  );
};
export default OrganizerParticipant;
