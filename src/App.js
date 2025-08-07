import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./views/admin/auth/Login";
import SignUp from "./views/admin/auth/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
