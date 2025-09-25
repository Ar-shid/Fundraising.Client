import AdminHome from "../../views/admin/home";
import AdminCampaign from "../../views/admin/campaign";
import AddCompaign from "../../views/admin/campaign/pages/AddCompaign";
import EditCompaign from "../../views/admin/campaign/pages/EditCampaign";
import AdminGroup from "../../views/admin/group";
import AddGroup from "../../views/admin/group/pages/AddGroup";
import AdminProduct from "../../views/admin/product";
import AddProduct from "../../views/admin/product/pages/AddProduct";
import AdminUser from "../../views/admin/user";
import AdminFinance from "../../views/admin/finance";
import AdminSetting from "../../views/admin/setting";
import Profile from "../../views/admin/setting/pages/Profile";
import AdminOrder from "../../views/admin/order";
// Organizer
import OrganizerHome from "../../views/organizer/home";
import OrganizerCampaign from "../../views/organizer/campaign";
import OrganizerGroup from "../../views/organizer/group";
import OrganizerParticipant from "../../views/organizer/participant";
import OrganizerUser from "../../views/sales/organizeruser";
// Sales
import SalesHome from "../../views/sales/home";
import SalesCampaign from "../../views/sales/campaign";
import SalesGroup from "../../views/sales/group";

const PrivateRoutes = [
  // Admin
  { path: "/admin-home", element: <AdminHome />, allowedRoles: ["Admin"] },
  {
    path: "/admin-campaign",
    element: <AdminCampaign />,
    allowedRoles: ["Admin"],
  },
  { path: "/add-campaign", element: <AddCompaign />, allowedRoles: ["Admin"] },
  {
    path: "/admin-campaign/edit/:id",
    element: <EditCompaign />,
    allowedRoles: ["Admin"],
  },
  { path: "/admin-group", element: <AdminGroup />, allowedRoles: ["Admin"] },
  { path: "/add-group", element: <AddGroup />, allowedRoles: ["Admin"] },
  {
    path: "/admin-product",
    element: <AdminProduct />,
    allowedRoles: ["Admin"],
  },
  { path: "/add-product", element: <AddProduct />, allowedRoles: ["Admin"] },
  { path: "/admin-user", element: <AdminUser />, allowedRoles: ["Admin"] },
  {
    path: "/admin-finance",
    element: <AdminFinance />,
    allowedRoles: ["Admin"],
  },
  { path: "/setting", element: <AdminSetting />, allowedRoles: ["Admin"] },
  { path: "/profile", element: <Profile />, allowedRoles: ["Admin"] },
  { path: "/admin-order", element: <AdminOrder />, allowedRoles: ["Admin"] },

  // Organizer
  {
    path: "/organizer-home",
    element: <OrganizerHome />,
    allowedRoles: ["Organizer"],
  },
  {
    path: "/organizer-campaign",
    element: <OrganizerCampaign />,
    allowedRoles: ["Organizer"],
  },
  {
    path: "/organizer-group",
    element: <OrganizerGroup />,
    allowedRoles: ["Organizer"],
  },
  {
    path: "/organizer-participant",
    element: <OrganizerParticipant />,
    allowedRoles: ["Organizer"],
  },
  {
    path: "/seller-user",
    element: <OrganizerUser />,
    allowedRoles: ["Organizer"],
  },

  // Sales
  {
    path: "/seller-home",
    element: <SalesHome />,
    allowedRoles: ["Sales Person"],
  },
  {
    path: "/seller-campaign",
    element: <SalesCampaign />,
    allowedRoles: ["Sales Person"],
  },
  {
    path: "/seller-group",
    element: <SalesGroup />,
    allowedRoles: ["Sales Person"],
  },
];

export default PrivateRoutes;
