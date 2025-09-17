import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./views/admin/auth/Login";
import SignUp from "./views/admin/auth/SignUp";
import ForgotPass from "./views/admin/auth/ForgotPass";
import ResetPassword from "./views/admin/auth/ResetPass";
import AdminHome from "./views/admin/home";
import AdminCampaign from "./views/admin/campaign";
import AddCompaign from "./views/admin/campaign/pages/AddCompaign";
import EditCompaign from "./views/admin/campaign/pages/EditCampaign";
import AdminGroup from "./views/admin/group";
import AddGroup from "./views/admin/group/pages/AddGroup";
import AdminProduct from "./views/admin/product";
import AddProduct from "./views/admin/product/pages/AddProduct";
import ProtectedRoute from "./views/admin/auth/ProtectedRoute";
import AdminUser from "./views/admin/user";
import AdminFinance from "./views/admin/finance";
import AdminSetting from "./views/admin/setting";
import Profile from "./views/admin/setting/pages/Profile";
import AdminOrder from "./views/admin/order";
// Organizer Links STart
import OrganizerHome from "./views/organizer/home";
import OrganizerCampaign from "./views/organizer/campaign";
import OrganizerGroup from "./views/organizer/group";
import OrganizerParticipant from "./views/organizer/participant";
import OrganizerUser from "./views/sales/organizeruser";
// Sale Links Start
import SalesHome from "./views/sales/home";
import SalesCampaign from "./views/sales/campaign";
import SalesGroup from "./views/sales/group";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.css";
import "./assets/scss/test.css";
import APITestingPage from "./views/admin/api-testing";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/admin-home"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-campaign"
            element={
              <ProtectedRoute>
                <AdminCampaign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-campaign"
            element={
              <ProtectedRoute>
                <AddCompaign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-campaign/edit/:id"
            element={
              <ProtectedRoute>
                <EditCompaign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-group"
            element={
              <ProtectedRoute>
                <AdminGroup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-group"
            element={
              <ProtectedRoute>
                <AddGroup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-product"
            element={
              <ProtectedRoute>
                <AdminProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-user"
            element={
              <ProtectedRoute>
                <AdminUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-finance"
            element={
              <ProtectedRoute>
                <AdminFinance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <ProtectedRoute>
                <AdminSetting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-order"
            element={
              <ProtectedRoute>
                <AdminOrder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/organizer-home"
            element={
              <ProtectedRoute>
                <OrganizerHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizer-campaign"
            element={
              <ProtectedRoute>
                <OrganizerCampaign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizer-group"
            element={
              <ProtectedRoute>
                <OrganizerGroup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizer-participant"
            element={
              <ProtectedRoute>
                <OrganizerParticipant />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller-home"
            element={
              <ProtectedRoute>
                <SalesHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller-campaign"
            element={
              <ProtectedRoute>
                <SalesCampaign />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller-group"
            element={
              <ProtectedRoute>
                <SalesGroup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller-user"
            element={
              <ProtectedRoute>
                <OrganizerUser />
              </ProtectedRoute>
            }
          />
          <Route path="/api-testing" element={<APITestingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
