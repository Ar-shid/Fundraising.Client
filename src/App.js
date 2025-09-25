import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  PublicRoutes,
  PrivateRoutes,
  PublicRoute,
  PrivateRoute,
} from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.css";
import "./assets/scss/test.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes.map(({ path, element }, i) => (
          <Route
            key={i}
            path={path}
            // element={<PublicRoute>{element}</PublicRoute>}
            element={element}
          />
        ))}

        {/* Private Routes */}
        {PrivateRoutes.map(({ path, element, allowedRoles }, i) => (
          <Route
            key={i}
            path={path}
            element={
              <PrivateRoute allowedRoles={allowedRoles}>{element}</PrivateRoute>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
