import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Teller from "./pages/Teller";
import TellerLogin from "./components/logins/TellerLogin";
import AdminLogin from "./components/logins/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/teller",
    element: <Teller />,
  },
  {
    path: "/teller-login",
    element: <TellerLogin />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/teller",
    element: <Teller />,
  },
]);

export default router;
