import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Teller from "./pages/Teller";
import TellerLogin from "./components/logins/TellerLogin";
import AdminLogin from "./components/logins/AdminLogin";
import Overview from "./components/admin/Overview";
import SetupZone from "./components/admin/SetupZone";
import Services from "./components/admin/Services";
import Reports from "./components/admin/Reports";
import TellOverview from "./components/teller/TellOverview";
import BillPayments from "./components/teller/BillPayments";
import BillGenerator from "./components/teller/BillGenerator";
import TellReports from "./components/teller/TellReports";
import NewUser from "./components/setupzone/NewUser";
import NewService from "./components/setupzone/NewService";
import ManageUser from "./components/services/ManageUser";
import ManageService from "./components/services/ManageService";
import AllUser from "./components/services/AllUser";
import Inputter from "./components/services/Inputter";
import Approver from "./components/services/Approver";
import Viewer from "./components/services/Viewer";
import AllServices from "./components/services/AllServices";
import Forms from "./components/services/Forms";
import Fees from "./components/services/Fees";
import Trials from "./components/services/Trials";



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
    children: [
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "setup-zone",
        element: <SetupZone />,
        children: [
          {
            path: "new-user",
            element: <NewUser />
          },
          {
            path: "new-service",
            element: <NewService />
          }
         
        ]
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: "manage-user",
            element: <ManageUser />,
            children: [
              {
                path: "all-user",
                element: <AllUser />
              },
              {
                path: "inputter",
                element: <Inputter />
              },
              {
                path: "approver",
                element: <Approver />
              },
              {
                path: "viewer",
                element: <Viewer />
              }
            ]
          },
          {
            path: "manage-service",
            element: <ManageService />,
            children: [
              {
                path: "all-services",
                element: <AllServices />,
              },
              {
                path: "forms",
                element: <Forms />,
              },
              {
                path: "fees",
                element: <Fees />,
              },
              {
                path: "trials",
                element: <Trials />
              }
            ]
          }

        ]
      },
      {
        path: "reports",
        element: <Reports />,
      }
    ]

  },
  {
    path: "/teller",
    element: <Teller />,
    children: [
      {
        path: "tell-overview",
        element: <TellOverview />,
      },
      {
        path: "bill-payments",
        element: <BillPayments />,
      },
      {
        path: "bill-generator",
        element: <BillGenerator />,
      },
      {
        path: "tell-reports",
        element: <TellReports />,
      }
    ]
  },
]);

export default router;
