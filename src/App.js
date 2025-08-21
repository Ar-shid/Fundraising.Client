import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/admin/auth/Login";
import SignUp from "./views/admin/auth/SignUp";
import AdminHome from "./views/admin/home";
import AdminCampaign from "./views/admin/campaign";
import AddCompaign from "./views/admin/campaign/pages/AddCompaign";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.css";
import "./assets/scss/test.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-campaign" element={<AdminCampaign />} />
          <Route path="/add-campaign" element={<AddCompaign />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
