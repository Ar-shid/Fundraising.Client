import Login from "../../views/admin/auth/Login";
import SignUp from "../../views/admin/auth/SignUp";
import ForgotPass from "../../views/admin/auth/ForgotPass";
import ResetPass from "../../views/admin/auth/ResetPass";
// User
import Landing from "../../views/main/landing";
import Categories from "../../views/main/categories";
import HowItWork from "../../views/main/work";
import ProductDetail from "../../views/main/product/ProductDetail";

const PublicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignUp /> },
  { path: "/forgot-password", element: <ForgotPass /> },
  { path: "/reset-password", element: <ResetPass /> },
  { path: "/", element: <Landing /> },
  { path: "/categories", element: <Categories /> },
  { path: "/howitwork", element: <HowItWork /> },
  { path: "/product-detail", element: <ProductDetail /> },
];

export default PublicRoutes;
